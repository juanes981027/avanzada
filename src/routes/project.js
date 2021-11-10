import Router from "express";
import userController from "../controllers/Usuario.js";
import usuario from "../modules/Usuario.js";
const router = Router();
const user = usuario


router.get('/Buscar',(req,res)=>{
   
    
})

router.post('/registro',async (req,res)=>{
    try{
        let data = new usuario(req.body)
        await data.save()
        res.json("Successful"),console.log("Successful")

    }
    catch(e){
        res.json(e),console.log(e)

    }
    
    
    
})

router.get('/get-users', async (req,res)=>
{
    let data = await userController.getUsers()
    res.json({
        
        data:data,
        totalResults:data.length,
        status: "OK"
    })
    
})


router.post('/login', async(req,res)=>
{ 
    // my way
    // try{

    //     const {email,password} = req.params
    //     const result = await user.findOne(email,password)
    //     let summary = {
    //         email: result.email,
    //         rol: result.rol,
    //         nombreTienda: result.nombreTienda,
    //         ciudad: result.ciudad
    //     }
    //     res.json(summary),console.log(result)
            
    // }
    // catch(e){
    //     console.log(e),res.json(e)
    // }
    
    // teachers way
    let data = await userController.login(req.body);
    res.json({data})
    
})

export default router