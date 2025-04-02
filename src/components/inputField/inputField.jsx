import { useStore } from "../../zuststore/userstore"

const InputField = ({label,value,placeholder,id})=>{
    const {handleUserDetails} = useStore(state=>state)
    return (
        <>
            <label>{label}:</label>
            <input name={id} value={value[id]} placeholder={placeholder} onChange={(e)=>handleUserDetails(e?.target?.name,e?.target?.value)}/>
        </>
    )
}

export default InputField