import InputField from "../../components/inputField/inputField"
import { useStore } from "../../zuststore/userstore"

const UserProfile = ()=>{
  const {userDetails} = useStore((state)=>state)
  const inputFieldCom = [
    {
      id:"firstname",
      label:"First Name"
    },
    {
      id:"lastname",
      label:"Last Name"
    },
    {
      id:"address",
      label:"Address"
    },
  ]
  return (<div>
    {inputFieldCom?.map((field)=>{
      return <InputField   value={userDetails} id={field.id} label={field.label}/>
    })
       
    }
  </div>  )
}

export default UserProfile