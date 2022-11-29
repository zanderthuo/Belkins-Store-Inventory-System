import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    Customer_name: {
        type: String,
        required: true,
        unique: true
    },
    Customer_email: {
        type: String,
        required: true,
        unique: true,
    },
    Customer_password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('Customer', CustomerSchema)