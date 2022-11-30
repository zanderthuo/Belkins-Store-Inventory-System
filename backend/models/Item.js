import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    sku: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true

    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    fav: {
        type: Boolean,
        required: true
    },
    check: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Item', ItemSchema)