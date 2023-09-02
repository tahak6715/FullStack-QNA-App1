import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { PostingOfData } from "../config/firebase_Methods";

export default function UserOne(){

    const [model, setModel] = useState({});

    let SendData = () => {
        console.log(model)

        const nodeName = "Questionss"
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
        <h1>UserOne</h1>

        <TextField id="filled-basic" variant="filled" onChange = {(e) => {setModel({Question: e.target.value})}}/>
        <Button className="bg-primary text-dark py-3 px-3" onClick={SendData} >Send Question</Button>


        </>
        
    );
}