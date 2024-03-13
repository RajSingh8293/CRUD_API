import mongoose from "mongoose";
// no need to import dotenv here
// import dotenv from 'dotenv'
// dotenv.config({
// 	path: "./.env"
// })
// dotenv.config()
// Or
// // import 'dotenv/config'


const connectDb = async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URL}`)
		console.log("Connected");
	} catch (error) {
		console.log(error);

	}

}

export default connectDb