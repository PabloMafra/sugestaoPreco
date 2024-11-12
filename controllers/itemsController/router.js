const express = require("express");
const router = express.Router();
const itemsController = require("./controller");

router.get("/get", itemsController.getItemsController);
router.get("/getProducts", itemsController.getProductsController);
router.get("/getSugestPrice", itemsController.getSugestPriceController);
router.post("/insertSugestPrice", itemsController.insertSugestPriceController);

module.exports = router;
