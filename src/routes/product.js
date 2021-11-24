import Router from "express";
import producto from "../modules/Productos.js";
const routerProduct = Router();

routerProduct.post('/saveProduct',async (req,res)=>{
    try{
        let data = new producto(req.body)
        await data.save()
        res.json("Successful"),console.log("Successful")

    }
    catch(e){
        res.json(e),console.log(e)

    }    
})

// routerProduct.get('/get-product',async (req,res)=>{

//     let data = await productController.getProduct(req.body)
//     console.log(data)
    
// })

// routerProduct.get('/get-products', async (req,res)=>
// {
//     let data = await productController.getProducts()
//     res.json({
        
//         data:data,
//         totalResults:data.length,
//         status: "OK"
//     })
    
// })

// routerProduct.post('/searchProduct', async(req,res)=>
// { 
    
//     let data = await productController.searchProduct(req.body);
//     res.json({data})
    
// })

export default routerProduct