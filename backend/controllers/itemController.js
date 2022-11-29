import Item from '../models/Item.js'

import { createError } from '../utils/error.js'


// create item
export const createItemController = async(req, res, next) => {
        // initialize the new hotel variable
        const newItem = new Item(req.body)
        try {
            // save new hotel in db
            const savedItem = newItem.save()
                // if saved successfully status code is 200
            res.status(200).send('Item has been created successfully')
            console.log(savedItem)
        } catch (err) {
            // if any error return status code 500
            next(err)
        }
    }
    // get one item

export const getItemByIDController = async(req, res, next) => {
        try {
            const item = await Item.findById(req.params.id);
            // if query successfully send status code is 200
            res.status(200).json(item);
        } catch (err) {
            // if any error return send status code 500
            res.status(500).json(err)
        }
    }
    // edit item
export const updateItemController = async(req, res, next) => {
        try {
            // update hotel in db
            const updatedItem = await Item.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                // if updated successfully status code is 200
            res.status(200).json(updatedItem)
            console.log(updatedItem)
        } catch (err) {
            // return an error message
            next(err)
        }
    }
    // get all Items
export const getAlltemsController = async(req, res, next) => {
        try {
            // find all inventory managers from the DB
            const items = await Item.find();
            // if query successfully send status code is 200
            res.status(200).json(items);
        } catch (err) {
            // if any error return send status code 500
            next(err)
        }
    }
    //delete item
export const deleteItemController = async(req, res, next) => {
    try {
        // delete hotel in db
        await Item.findByIdAndDelete(req.params.id)
            // if deleted successfully return status code is 200
        res.status(200).json("Item has been deleted successfully")
    } catch (err) {
        // if any error return status code 500
        res.status(500).json(err)
    }
}