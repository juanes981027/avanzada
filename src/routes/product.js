import Router from "express";
import productController from "../controllers/Product.js";
import producto from "../modules/Productos";
const router = Router();
const product = producto

router.post('/saveProduct',async (req,res)=>{
    try{
        let data = new producto(req.body)
        await data.save()
        res.json("Successful"),console.log("Successful")

    }
    catch(e){
        res.json(e),console.log(e)

    }    
})

router.get('/get-product',async (req,res)=>{

    let data = await productController.getProduct(req.body)
    console.log(data)
    
})

router.get('/get-products', async (req,res)=>
{
    let data = await productController.getProducts()
    res.json({
        
        data:data,
        totalResults:data.length,
        status: "OK"
    })
    
})

router.post('/searchProduct', async(req,res)=>
{ 
    
    let data = await productController.searchProduct(req.body);
    res.json({data})
    
})