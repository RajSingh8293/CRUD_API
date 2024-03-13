import express from "express"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import productRouter from "./routes/product.routes.js"
import connectDb from "./db/conn.js"
// import dotenv from 'dotenv'
// dotenv.config({
// 	path: "./.env"
// })
// dotenv.config()

import 'dotenv/config'


const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000


// app.get("/", (req, res) => {
// 	res.send({ message: "Hello express" })
// })

app.use("/api/v1", userRouter)
app.use("/api/v1", productRouter)



// app.listen(port, (req, res) => {
// 	console.log("Server running on port : ", port);
// })





app.get('/', (req, res) => {
	res.send('Hello backend!')
})

connectDb().then(() => {
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
})