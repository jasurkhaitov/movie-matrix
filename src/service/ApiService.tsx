import axios from 'axios';

const BASE_URL = 'https://imdb236.p.rapidapi.com';

const options = {
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
	},
};

export const ApiService = {
	async fetching(endpoint: string) {
		try {
			const response = await axios.get(`${BASE_URL}/${endpoint}`, options);
			return { data: response.data, status: response.status }
		} catch (error) {
			console.error('API Fetching Error:', error);
			return { data: [], status: 500 };
		}
	},
};