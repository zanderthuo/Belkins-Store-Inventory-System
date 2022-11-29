import InventoryManager from "../models/InventoryManager.js";
import bcrypt from 'bcryptjs'
import { createError } from '../utils/error.js'
import jwt from 'jsonwebtoken'

// login
export const loginInventoryManagerController = async(req, res, next) => {
    try {
        // check for user in db and if no user throw an error
        const user = await InventoryManager.findOne({ inventoryManager_name: req.body.inventoryManager_name });
        if (!user) return next(createError(404, 'User not found'));

        // compare the credentials on db with the on entered
        const isPasswordCorrect = await bcrypt.compare(
            req.body.inventoryManager_password,
            user.inventoryManager_password
        );
        if (!isPasswordCorrect) return next(createError(404, 'Password incorrect'));

        // Creating a login token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWTINVENTORYMANAGER)
        console.log(token)
        const { inventoryManager_password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(201).json(`Welcome ${user.inventoryManager_name}`)
    } catch (err) {
        next(err);
    }
}

// forget password