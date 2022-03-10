import React from 'react'
import { ConvertCalc } from './ConvertCalc'

import './index.scss'

export const ConvertContainer = () => {
  return (
	<div className='convert_container'>
    <div className="title">
      <h1>Valuta EX</h1>
      <p>
        Простой и интуитивно понятный конвертер валют, идеально подходящий для путешественников.
        Valuta EX предоставляет точные курсы обмена для более чем 160 мировых валют!
      </p>
    </div>
    <ConvertCalc />
  </div>
  )
}
