import mongoose from "mongoose";

const InventoryManagerSchema = new mongoose.Schema({
    inventoryManager_name: {
        type: String,
        required: true,
    },
    inventoryManager_email: {
        type: String,
        required: true,
        unique: true,
    },
    inventoryManager_password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

export default mongoose.model('InventoryManager', InventoryManagerSchema)