
import usuario from "../modules/Usuario.js"



const getUsers = async () =>
{
    const users = await usuario.find({})
    return users

}

const getUser = async (data) =>
{
    const {email} = data

    try{
        const user = await usuario.findOne({email:email})
        console.log(user)
        const user1 = {
            email:user.email,
            rol:user.rol,
            nombreTienda:user.nombreTienda
        }
        console.log(user1)
        return user1

    }
    catch(e){
        console.log(e)
    }
    
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

const validarRol = (Rol) => {

    if (Rol = "Cliente")
    {
        
    }


}

const userController =  {
    login,
    getUsers,
    getUser
}

export default userController