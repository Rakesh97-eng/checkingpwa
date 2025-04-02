import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addProducts } from "../../../services/Post"
import { Buttons } from "../../Buttons"

const  AddProducts = ()=>{
    const queryClient = useQueryClient()

    const addProduct = useMutation({
        mutationFn:addProducts,
        onSuccess:()=>{
          return queryClient.invalidateQueries('products')
        } 
    })

    
    const handleAddProduct = ()=>{
        let data = {
            id:100,
            title:"Shirt for me"
        }
        addProduct.mutate(data)
    }
    const renderbutton = (handleaddproduct)=>{
        return <button onClick={handleaddproduct}>
            Add Products
        </button>
    }
    return (
        <Buttons onAccept={handleAddProduct} rendererButtons={(handleclick)=>renderbutton(handleclick)}/>
    )
}

export default AddProducts