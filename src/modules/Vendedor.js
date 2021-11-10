import mongoose from "mongoose";
const Schema = mongoose.Schema
const vendedorSchema = new Schema({
    nombre:{type:String,required:true},
    email:{type:String,required:true},
    pais:{type:String,required:true},
    ciudad:{type:String,required:true},
    contraseña:{type:String,required:true},
    rol:{type:String,required:true},
    nombreTienda:{type:String,required:true}

    
})

const vendedor = mongoose.model('usuario',vendedorSchema)

export default vendedor;