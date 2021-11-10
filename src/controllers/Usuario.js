
import usuario from "../modules/Usuario.js"



const getUsers = async () =>
{
    const users = await usuario.find({})
    return users

}

const login = async (userData) =>
{
    const {email,contraseña} = userData
    if(email)
    {
        
        const userData2 = await usuario.findOne({email: email, contraseña: contraseña})
        console.log(userData2)
        const user = {
            email:userData2.email,
            rol:userData2.rol,
            nombreTienda:userData2.nombreTienda
        }
        
        return user
    }
    else{
        return{
            error:"No existe el correo"
        }
    }
}


const userController =  {
    login,
    getUsers
}

export default userController