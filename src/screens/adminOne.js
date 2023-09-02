import { Paper } from "@mui/material";
import { GetDataById } from "../config/firebase_Methods";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";


export default function AdminOne(){

    const [value,CurrentValue] = useState([{}]);


    let GetDataa =  () => {
        const nodeName = "Questionss"
                GetDataById(nodeName)
                .then((res) => {
                  // console.log(res);
                  CurrentValue([...res])
                  console.log(value)
                  return value;
                  
                  
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                  
                }
                useEffect(() => {
            
                    GetDataa();
                    
                 }, []);

               


                 let navigatation = useNavigate();

  let page = (obj) => {

    navigatation(`/admin/quesTwo`,{


      state:{obj:obj}
    }
    
    )


  }

                 
    return(
        <>
        
        <Paper>
            {value.map((abc) => (
                <Paper onClick={()=>{
                    page(abc)}}>
                <h1 style={{marginBottom:'8px'}}>{abc.Question}</h1>
                
                </Paper>
            ))}
            </Paper>

            </>
    );
}