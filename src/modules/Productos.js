import mongoose from "mongoose";

const Schema = mongoose.Schema

const productoSchema = new Schema({

    nombre:{type:String,required:true},
    stock:{type:String,required:false},
    categoria:{type:String,required:false},
    precio:{type:String,required:true},
    descripcion:{type:String,required:false}
})

const producto = mongoose.model('producto',productoSchema)

export default producto;