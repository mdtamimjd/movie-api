import {connect} from 'mongoose'
export default function connectDB(){
    try {
        connect(process.env.URL)
        console.log("DB Connection successful")
    } catch (error) {
        console.log(`DB Connection error ${error.message}`)
    }
}