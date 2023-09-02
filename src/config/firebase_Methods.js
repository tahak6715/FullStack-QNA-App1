import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./FireBase_Config";
import { getDatabase, set, ref , get, onValue , push, remove} from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);


let PostingOfData = (nodeName,obj) => {
    
   
        return new Promise( (resolve,reject) =>{
            let refer = ref(db,`${nodeName}/`)
            obj.id  = push(refer).key
            
      
            const referenc = ref(db,`${nodeName}/${obj.id}`)
            set(referenc,obj)
            .then((succ) =>{
                resolve("data send successfully")
            })
            .catch((err) =>{
                reject(err.message)
            })
        })
    }


    let GetDataById = (nodeName) => {
        return new Promise( (resolve,reject) =>{
          let refer = ref(db,`${nodeName}/`)
          onValue(refer, (dt) =>{
              if(dt.exists()){
                  let a  = Object.values(dt.val()) 
                  // console.log(dt.val())
                  resolve(a)
              }
          })
      })                                    
      };


      export {PostingOfData,GetDataById};