const express= require("express");
const router =express.Router();


const {getAllProducts,getAllProductsTestinhg,registerPlayer}= require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTestinhg);
router.route("/new").post(registerPlayer);
module.exports=router;
