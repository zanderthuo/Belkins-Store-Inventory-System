import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    Item_name: {
        type: String,
        required: true,
        unique: true
    },
    Item_quantity: {
        type: Number,
        required: true,
    },
    Item_category: {
        type: String,
        required: true,
        enum: ["New", "Used"]
    },
}, { timestamps: true });

export default mongoose.model('Item', ItemSchema)