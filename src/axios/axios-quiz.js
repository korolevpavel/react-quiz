import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-50074.firebaseio.com/'
})