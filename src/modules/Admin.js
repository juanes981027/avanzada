import mongoose from "mongoose";
const Schema = mongoose.Schema
const adminSchema = new Schema({
    nombre:{type:String,required:true},
    email:{type:String,required:true},
    pais:{type:String,required:true},
    ciudad:{type:String,required:true},
    contraseña:{type:String,required:true},
    rol:{type:String,required:true},
    nombreTienda:{type:String,required:false}

    
})

const admin = mongoose.model('usuario',adminSchema)

export default admin;