import { useState,useEffect } from "react";
import * as ProductService from "../service/ProductService"

export default function ListProduct(){
    const[listProduct,setProductList] = useState([]);

    const findAll = async () => {
        const res = await ProductService.findAll()
        setProductList(res)
    }  
    useEffect(() => {
        findAll()

    }, [])

    return(
        <>
        {listProduct.map((product, index) => (
            <div key={index}>
                <p>{product.name}</p>
                <p dangerouslySetInnerHTML={{__html : product.description}}></p>
                <p>-------------------</p>
            </div>
        ))

        }
        </>
    )
}