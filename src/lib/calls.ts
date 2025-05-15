import axios from "axios"

export const getProducts = async() => {
    try{
        const response = await axios.get("/api/products")
        console.log(response)
        return response
    }catch(error){
        console.log(error)
    }
}