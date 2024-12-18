import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: "https://we-do-theta.vercel.app/api"
	// baseURL: "http://localhost:4000/api"

});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("authToken")
		if(token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	}, 
	(error) => {
		return Promis.reject(error)
	}
)

export default axiosInstance