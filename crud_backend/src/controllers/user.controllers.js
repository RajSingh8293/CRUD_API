import User from "../model.js/user.model.js"
import bcryptjs from 'bcryptjs'



export const registerUser = async (req, res) => {
	const { username, email, password } = req.body
	// const user = await User({ username, email })

	try {

		const existUser = await User.findOne({ email })
		if (existUser) {
			return res.status(200).json({
				succes: true,
				message: "User already exist",
			})

		}
		const hashPassword = bcryptjs.hashSync(password, 8)
		const user = await User({
			email,
			username,
			password: hashPassword
		})

		const userdata = await user.save()
		res.status(200).json({
			succes: true,
			message: "User created Successfuly",
			user: userdata
		})
	} catch (error) {
		res.status(200).json({
			succes: true,
			message: "Something went wrong with register",
			error
		})


	}
}


export const loginUser = async (req, res) => {

	const { email, password } = req.body
	try {
		const user = await User.findOne({ email })
		if (!user) {
			res.status(200).json({
				succes: false,
				message: "User does't exist",

			})
		}
		const isMatched = bcryptjs.compareSync(password, user.password)
		if (!isMatched) {
			res.status(200).json({
				succes: false,
				message: "Invalid data",
			})

		} else {

			return res.status(200).json({
				succes: true,
				message: "User logged in successfully",
				user

			})
		}


	} catch (error) {

		res.status(200).json({
			succes: false,
			message: "Something wrong with login",

		})

	}
}


