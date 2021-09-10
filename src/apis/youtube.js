import axios from 'axios'

const KEY = 'AIzaSyAqK_r4C1fpWYgdYNz-CP79MVYbJlWiKp0'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        type: 'video',
        maxResult: 5,
        key: KEY
    }
})
