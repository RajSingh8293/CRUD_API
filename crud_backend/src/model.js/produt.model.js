import mongoose from 'mongoose'


const productSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	modal: {
		type: String,
		required: true

	},
	price: {
		type: Number,
		required: true

	},
	brand: {
		type: String,
		required: true

	},


});

export const Product = new mongoose.model("Product", productSchema);