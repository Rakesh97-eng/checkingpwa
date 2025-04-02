import { useEffect, useLayoutEffect, useState } from "react";
import { useStore } from "../../zuststore/userstore";

const typeHeadData = [
  {
    id: 1,
    label: "Kumbakonam",
    value: "Kumbakonam",
  },
  {
    id: 2,
    label: "Thanjavur",
    value: "thanjavur",
  },
  {
    id: 3,
    label: "Trichy",
    value: "trichy",
  },
  {
    id: 4,
    label: "Chennai",
    value: "chennai",
  },
  {
    id: 5,
    label: "Coimbatore",
    value: "cbe",
  },
];

const TypeHead = () => {
  const [field, setField] = useState([]);
  const [count,setCount] = useState(0);
  const [laycount,setLayCount] = useState(0);
  const [layColor,setLayColor] = useState("black")
  const { products,productsLoading } = useStore((state) => state);
  const [fieldOption, setFieldOption] = useState(typeHeadData);

  const handleChange = (e) => {
    let filtered = typeHeadData.filter((option) =>
      option.label.includes(e?.target?.value)
    );
    setFieldOption(filtered);
  };

  const handleOptionClick = (label) => {
    setField([...field, label]);
    setFieldOption(fieldOption.filter((option) => option.label !== label));
  };

  console.log(products,"products")

  // useLayoutEffect(()=>{
  //   let qcount =0;
  //   for(let i=0;i<10000;i++){
  //     console.log("checks "); 
  //     qcount += i 
  //   }
  //   setLayCount(qcount)
  // },[])

  // useLayoutEffect(()=>{
  //   for(let i=0;i<100000;i++){
  //     console.log("i",i);
  //     if(i == 89998){
        
  //       setLayColor("green")
  //     }
  //   }
  // },[])
  
  return (
    <>
      <input value={field} onChange={handleChange} />
      <div>
      useeffect counthere:{count}
      <br></br>
      leyout counthere :{laycount}
      </div>
      {productsLoading && "...Loading"}
      {products?.length > 0 ? (
        products?.map((head) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => handleOptionClick(head.label)}
            >
              {head.title}
            </li>
          );
        })
      ) : (
        <p>No data found</p>
      )}
    </>

    // <>
    //   <h4>UseLayoutEffect:</h4>
    //   <button style={{background:layColor,color:"white",border:"none"}}>Text Layout</button>
    // </>
  );
};

export default TypeHead;
