import axios from "axios";
import { api } from "./api";

export default class Service {
	async getValuteList() {
		try {
			const response = await axios.get( api.apiUrl )
			return response.data 
		} catch {}
		
	}
}