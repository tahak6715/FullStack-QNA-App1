import { Paper } from "@mui/material";
import { GetDataById } from "../config/firebase_Methods";
import { useEffect, useState } from "react";

export default function UserTwo(){

    const [value,CurrentValue] = useState([{}]);
    const [valuea,CurrentValuea] = useState([{}]);

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
              let getAnswer = () => {
                const nodeName = "Answers"
                            GetDataById(nodeName)
                            .then((res) => {
                              // console.log(res);
                              CurrentValuea([...res])
                              console.log(valuea)
                              return value;
                              
                              
                              })
                              .catch((err) => {
                                console.log(err);
                              });
            }
              

            useEffect(() => {
            
                GetDataa();
                getAnswer();
             }, []);

             const [num,setNum] = useState(0);


    return(
        <>
        <h1>Question & Answers</h1>

        <Paper>
            {value.map((item) => (
                <Paper>
                <h4> Q...{item.Question}</h4>
                
                
                </Paper>
            ))}
            </Paper>

            <Paper>
            {valuea.map((item) => (
                <Paper>
                <h4>ANS...{item.Answer}</h4>
                
                </Paper>
            ))}
            </Paper>
            

        

        </>


    );
}