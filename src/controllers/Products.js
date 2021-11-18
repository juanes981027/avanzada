import product from '../modules/Productos'

const getProducts = async () =>
{
    const products = await product.find({})
    return products

}

const getProduct = async (id) =>
{
    const product = await product.findOne({id:id})
    return product
}

const searchProduct = async (userData) =>
{
    const {id} = userData
    if(id)
    {
        
        const products2 = await product.findOne({id:id})
        console.log(products2)
        const product = {
            id:products2.id,
            nombre:products2.nombre,
            precio:products2.precio,
            description:products2.descripcion
        }
        
        return product
    }
    else{
        return{
            error:"El producto no existe"
        }
    }
}

const productController =  {
    getProducts,
    getProduct,
    searchProduct
}

export default productController;