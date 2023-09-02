import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { PostingOfData } from "../config/firebase_Methods";


import { Button, TextField } from "@mui/material";

export default function AdminTwo(){


    const {state} = useLocation();

    const [value,CurrentValue] = useState([])

    const [model, setModel] = useState({});
    
    const{obj}=state
    
    let Detail =()=>{
        CurrentValue(obj)
    }



        
  React.useEffect(() => {
 Detail();
  }, []);

  let SendData = () => {
    console.log(model)

    const nodeName = "Answers"
    console.log(model)

   PostingOfData(nodeName, model)
        .then((res) => {
            console.log(res)
            
        })
        .catch((err) => {
            console.log(err)
        })
}

    return(
        <>
        <h1>{obj.Question}</h1>
        <TextField id="filled-basic" variant="filled" onChange = {(e) => {setModel({Answer: e.target.value})}}/>
        <Button className="bg-primary text-dark py-3 px-3" onClick={SendData} >Send Answer</Button>
        </>
    );
}