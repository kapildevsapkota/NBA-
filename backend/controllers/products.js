const Product=require("../model/model")
const getAllProducts=async(req,res)=>{
    const myData=await Product.find({});
    console.log(myData)
    res.status(200).json({myData});
     
};
const registerPlayer = async (req, res) => {
    try {
        console.log(req)
        const { name, age, country } = req;
        const createdPlayer = await Product.create(req.body);

        res.status(201).json(createdPlayer);
    } catch (error) {
        console.error('Error registering player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllProductsTestinhg=async(req,res)=>{
    res.status(200).json({mgs:"i am allproducts testing"});
};

module.exports={getAllProducts,getAllProductsTestinhg,registerPlayer};