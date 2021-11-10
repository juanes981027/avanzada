import mongoose from "mongoose";
import validator from 'validator';

const Schema = mongoose.Schema
const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: {
        type: String, required: true, unique: true, lowercase: true, validate: (value) =>  validator.isEmail(value)
    },
    pais: { type: String, required: true },
    ciudad: { type: String, required: true },
    contraseña: {
        type: String, required: true, validate: (value) => {
            const regexp = /^(?=.{8,20}$)(?=.*[A-Z])(?=.*[\*\.\/])[a-zA-Z0-9._*/]+$/;

            return regexp.test(value);
        }
    },
    rol: { type: String, required: true },
    nombreTienda: { type: String, required: false }

})

const usuario = mongoose.model('usuario', usuarioSchema)

export default usuario;