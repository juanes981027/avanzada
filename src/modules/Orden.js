import mongoose from "mongoose";
const Schema = mongoose.Schema
const ordenSchema = new Schema({
    id:{type:String,required:true},
    fecha:{type:Date,required:true},
    stock:{type:Number,required:true},
    categoria:{type:String,required:true}
})

const orden = mongoose.model('usuario',ordenSchema)

export default orden;