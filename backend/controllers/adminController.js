import Admin from '../models/Admin.js'
import InventoryManager from '../models/InventoryManager.js'
import bcrypt from 'bcryptjs'
import { createError } from '../utils/error.js'
import jwt from 'jsonwebtoken'

// register admin
export const registerAdminController = async(req, res, next) => {
        try {
            // hashing our users password using bycrypt
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.admin_password, salt);

            // initialize new user details
            const newAdmin = new Admin({
                admin_name: req.body.admin_name,
                admin_email: req.body.admin_email,
                admin_password: hash,
            })

            // save the new user
            await newAdmin.save()
                // if saved successfully return status code 201
            res.status(201).send('Admin has been created successfully')
        } catch (err) {
            next(err)
        }
    }
    // login admin

export const loginAdminController = async(req, res, next) => {
    try {
        // check for user in db and if no user throw an error
        const user = await Admin.findOne({ admin_name: req.body.admin_name });
        if (!user) return next(createError(404, 'User not found'));

        // compare the credentials on db with the on entered
        const isPasswordCorrect = await bcrypt.compare(
            req.body.admin_password,
            user.admin_password
        );
        if (!isPasswordCorrect) return next(createError(404, 'Password incorrect'));

        // Creating a login token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWTADMIN)
        console.log(token)
        const { admin_password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(201).json(`Welcome back ${user.admin_name}!!`)
    } catch (err) {
        next(err);
    }
}

// Admin Add inventory manager
export const adminAddInventoryManagerController = async(req, res, next) => {
        try {
            // hashing our users password using bycrypt
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.inventoryManager_password, salt);

            // initialize new user details
            const newInventoryManager = new InventoryManager({
                inventoryManager_name: req.body.inventoryManager_name,
                inventoryManager_email: req.body.inventoryManager_email,
                inventoryManager_password: hash,
            })

            // save the new user
            await newInventoryManager.save()
                // if saved successfully return status code 201
            res.status(201).send('Inventory Manager has been created successfully')
        } catch (err) {
            next(err)
        }
    }
    // login inventory manager

// edit inventory manager
export const updateInventoryManagerController = async(req, res, next) => {
        try {
            // update hotel in db
            const updatedInventoryManager = await InventoryManager.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                // if updated successfully status code is 200
            res.status(200).json(updatedInventoryManager)
            console.log(updatedInventoryManager)
        } catch (err) {
            // return an error message
            next(err)
        }
    }
    // view all inventory manager
export const getAllInventoryManagerController = async(req, res, next) => {
        try {
            // find all inventory managers from the DB
            const inventoryManagers = await InventoryManager.find();
            // if query successfully send status code is 200
            res.status(200).json(inventoryManagers);
        } catch (err) {
            // if any error return send status code 500
            next(err)
        }
    }
    // delete inventory manager
export const deleteInventoryManagerController = async(req, res, next) => {
        try {
            // delete hotel in db
            await InventoryManager.findByIdAndDelete(req.params.id)
                // if deleted successfully return status code is 200
            res.status(200).json("Inventory Manager has been deleted successfully")
        } catch (err) {
            // if any error return status code 500
            res.status(500).json(err)
        }
    }
    // register customer
    // edit customer
    // view all customer
    // delete customer
    // view all customer
    // delete customer