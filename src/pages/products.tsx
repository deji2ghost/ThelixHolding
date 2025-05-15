import { getProducts } from "@/lib/calls"
import { useEffect, useState } from "react"


const Products = () => {
    const [ prod, setProd ] = useState()
    const fetchProducts = async() => {
        const response = await getProducts()
        console.log(response)
        setProd(response?.data)
    }

    useEffect(()=> {
        fetchProducts()
    }, [])

  return (
    <div>
      {
        prod?.map(item=> {
            return(
                <div key={item?.id}>
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Products
