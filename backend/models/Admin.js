import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    admin_name: {
        type: String,
        required: true,
    },
    admin_email: {
        type: String,
        required: true,
        unique: true
    },
    admin_password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

export default mongoose.model('Admin', AdminSchema)