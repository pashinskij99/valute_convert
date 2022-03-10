import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Service from '../../../service/service'

import switchImg from '../../../assets/img/svg/switch.svg'

import './index.scss'

// rate: 33.1707, rate: 29.2549, =  (1 / ( : 1,1338510)) = 0.88(eur)
export const ConvertCalc = () => {
	const [options, setOptions] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [inputValue1, setInputValue1] = useState(1)
	const [inputValue2, setInputValue2] = useState(1)
	const [stateRate1, setStateRate1] = useState(0)
	const [stateRate2, setStateRate2] = useState(0)
	const [flex_direction_reverse, setStyleFlexDirection] = useState(null)
	const [btnReverseIsClick, setBtnReverseIsClick] = useState(false)
	// const [ inputIsReverse, setInputIsReverse ] = useState(false) 

	useEffect(() => {
		const service = new Service()
		service.getValuteList()
		.then(res => {

			let list = [];

			[...res].forEach(item => {
				const { exchangedate, cc, r030, rate, txt } = item
				list.push({value: cc, label: txt, rate})
			})

			if(!stateRate1) {
				setStateRate1(list[0].rate)
				setStateRate2(list[1].rate)
			}

			let diff
			
			// if(btnReverseIsClick) diff = inputValue1 / (stateRate1 / stateRate2) 
			// else diff = inputValue1 / (stateRate2 / stateRate1)
			// console.log(inputIsReverse);
			// if(inputIsReverse) diff = inputValue1 / (stateRate1 / stateRate2) 
			// else diff = inputValue1 / (stateRate2 / stateRate1)
			diff = inputValue1 / (stateRate2 / stateRate1)
			console.log(diff);
			
			setInputValue2(diff)
			setOptions(list)
			setIsLoading(false)
		})
	}, [stateRate1, stateRate2, inputValue1, btnReverseIsClick]) 

	const selected = (event) => {
		if(event) {
			setStateRate1( event.rate )
		}
		// setInputIsReverse(false)
	}

	const selected2 = (event) => {
		if(event) {
			setStateRate2( event.rate )
		}
		// setInputIsReverse(false)
	}

	const handleInput = (event) => {
		const value = Number( event.target.value )
		setInputValue1(value)
		// setInputIsReverse(false)
	}

	const handleReverse = () => {
		if(!flex_direction_reverse) {
			setStyleFlexDirection({'flexDirection' : 'row-reverse'})
			setBtnReverseIsClick(true)
		} else {
			setStyleFlexDirection(null)
			setBtnReverseIsClick(false)
		}
		// setInputIsReverse(!inputIsReverse)
	}

	if(!options) return null

	return (
		<div className='convert-calc'>
			<div 
				className="select_wrapper" 
				style={flex_direction_reverse}>
				
				<Select 
					className='select'
					options={options}   
					isLoading={isLoading}
					isClearable={true}
					isSearchable={true}
					defaultValue={options[0]}
					onChange={btnReverseIsClick ? selected2 : selected}
				/>
				<Select 
					className='select'
					options={options} 
					isLoading={isLoading} 
					isClearable={true}
					isSearchable={true}
					defaultValue={options[1]}
					onChange={btnReverseIsClick ? selected : selected2} 
				/>
			</div>
			<div className="switch_wrapper">
				{/* <button onClick={handleReverse} >
					<img className='img' src={ switchImg } alt="switch" />
				</button>	 */}
			</div>
			<div 
				className="input_wrapper"
				>
				<input 
					type="number" 
					value={
						inputValue1 === 0 
						? undefined 
						: inputValue1
					}
					onChange={handleInput} 
				/>
				<input 
					type="number" 
					value={ isNaN(inputValue2) ? 1 : inputValue2 } 
					onChange={() => {}}
				/>
			</div>
		</div>
  	)
}

