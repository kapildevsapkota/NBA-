require("dotenv").config();
const bodyParser=require("body-parser")
const express= require("express");
const multer = require('multer');

const cors = require('cors');
const app=express();
app.use(cors());
app.use(bodyParser.json())
const connectDB=require("./bataBase/connect")
const PORT=process.env.PORT ||1000;

const products_routes=require("./routes/products")

app.get("/",(req,res)=>{
    res.send("Hi Iam kapil");
});

app.use("/api/products",products_routes)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });


/*app.post('/api/products/new', upload.single('image'), async (req, res) => {
    try {


    const newProduct = new Product({
      name: req.body.name,
      age: req.body.age,
      country: req.body.country,
      Image: req.body.image, 
    });


    await newProduct.save();

    res.status(200).json({ message: 'Product and image saved successfully' });
  } catch (error) {
    console.error('Error uploading image and saving product', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});*/



const start= async()=>{
    try {
        await connectDB(process.env.MONGODB_URL); 
        app.listen(PORT)
        console.log(`${PORT} yes I am the one who knows`)
        
    } catch (error) {
        console.log(error);
        
    }

};

start();



