import { isValidObjectId } from "mongoose";
import categoryModel from "../models/category.model.js";


async function getAllCategories (req, res) {
    try {
        const categories = await categoryModel.find()

        res.send({
            message: "Succes",
            data: categories
        })
    } catch (error) {
        res.status(500).send({ 
            message: "Olishda xatolik", 
            error: error.message });
    }
};


async function getCategoriesBYId (req, res) {
    try {
        const id = req.params.id 

        if (!isValidObjectId(id)) {
            return res.status(400).send({
                message: `Given ID: ${id} is not valid object ID`
            })
        }

        const foundedCategory = await categoryModel.findById({_id: id})

        if (!foundedCategory) {
            return res.status(404).send({
                message: `Category with ID: ${id} not found`
            })
        }

        res.send({
        message: "Succes",
        data: foundedCategory
    })
    } catch (error) {
        res.status(500).send({ 
            message: "Olishda xatolik", 
            error: error.message });
    }
};


async function createCategory (req, res) {
    try {
        const { name } = req.body

        const foundedCategory = await categoryModel.findOne({ name })

        if (foundedCategory) {
            res.status(409).send({
                message: `Category: ${name} allaqachon mavjud`
            })
        }

        const createdCategory = await categoryModel.create({ name })
        await createdCategory.save()

        res.send({
        message: "Succes",
        data: createdCategory
        })
    } catch (error) {
        res.status(500).send({ 
            message: "Olishda xatolik", 
            error: error.message });
    }
};

async function updateCategory (req, res) {
    try {
        const id = req.params.id 

        const { name } = req.body

        if (!isValidObjectId(id)) {
            return res.status(400).send({
                message: `Given ID: ${id} is not valid object ID`
            })
        }

        const foundedCategory = await categoryModel.findOne({ name })

        if (foundedCategory) {
            res.status(409).send({
                message: `Category: ${name} allaqachon mavjud`
            })
        }

        const updatedCategory = await categoryModel.findById({_id: id})

        if (!updatedCategory) {
            return res.status(404).send({
                message: `Category with ID: ${id} not found`
            })
        }

        res.send({
        message: "Succes",
        data: updatedCategory
    })
    } catch (error) {
        res.status(500).send({ 
            message: "Olishda xatolik", 
            error: error.message });
    }
};

async function deleteCategory (req, res) {
    try {
        const id = req.params.id 

        if (!isValidObjectId(id)) {
            return res.status(400).send({
                message: `Given ID: ${id} is not valid object ID`
            })
        }

        await categoryModel.findByIdAndDelete(id)

        // if (!foundedCategory) {
        //     return res.status(404).send({
        //         message: `Category with ID: ${id} not found`
        //     })
        // }

        res.send({
        message: "Succes",
        data: null
    })
    } catch (error) {
        res.status(500).send({ 
            message: "Olishda xatolik", 
            error: error.message });
    }
};

export default  {getAllCategories, getCategoriesBYId, createCategory, updateCategory, deleteCategory }