import { Router } from "express";
import categoryController from "../controllers/category.controller.js";
import { ValidationMiddlewware } from "../middleware/validation.middleware.js";
import { createCategorySchema, updateCategorySchema } from "../schema/category.schema.js";

const categoryRouter = Router()

categoryRouter
    .get("/", categoryController.getAllCategories)
    .get("/:id", categoryController.getCategoriesBYId)
    .post("/", ValidationMiddlewware(createCategorySchema), categoryController.createCategory)
    .put("/:id", ValidationMiddlewware(updateCategorySchema), categoryController.updateCategory)
    .delete("/:id", categoryController.deleteCategory)

export default categoryRouter;