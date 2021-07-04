import axios from "axios"



export const signup = (userData ,history)=>{
    return async(dispatch)=>{
        try {
            await axios.post(`http://localhost:8080/signup`, userData)
            history.replace("/")
        } catch (error) {
            console.log(error.message)
        }
    }
}