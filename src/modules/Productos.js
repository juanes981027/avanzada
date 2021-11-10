import mongoose from "mongoose";
const Schema = mongoose.Schema
const productoSchema = new Schema({
    id:{type:String,required:true},
    nombre:{type:String,required:true},
    stock:{type:String,required:true},
    categoria:{type:String,required:true}
})

const producto = mongoose.model('usuario',productoSchema)

export default producto;