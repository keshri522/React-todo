import React, { useState } from "react";
import '../App.css'

import Modal from "react-bootstrap/Modal";
// import ModalHeader from "react-bootstrap/esm/ModalHeader";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import { faCoffee,faTrash ,faPenToSquare,faXmark} from '@fortawesome/free-solid-svg-icons'
import TOdo from "./TOdo";

 

const Edit = (props) => {
    let[first,Setfirst]=useState('')
    let[second,Setsecond]=useState('')
     
    
function handleUpdate(){
// 
let  Myobj={};
Myobj["Name"]=first;
Myobj["Description"]=second;
localStorage.setItem("Lists",JSON.stringify(Myobj));

props.updateCard(Myobj);
props.close();
}

function handleChnage(event){

    
   
let{name,value}=event.target;

if(name=="Edit-Task"){
  
    Setfirst(value);
   Setsecond(props.description);
  
        
}

 if(name=="Edit-Description"){
   
      Setsecond(value)
      Setfirst(props.name);
    
}

}

    return (
        <>
        <div>
        
            <Modal className="bg-light"  show={props.change}  >
            <Modal.Header>Edit Todos</Modal.Header>
            <Modal.Body >
             <form  className="form-group">
                <div>
              
                    <input  name="Edit-Task"    type="text" className=" input-width m-2 bg-light on"   onChange={handleChnage}   placeholder={props.name} />
                </div>
                <div>
              <textarea name="Edit-Description"  id="" rows="4" className="input-width remove-area m-2 bg-light on" onChange={handleChnage}  placeholder={props.description}   ></textarea>
                </div>
             </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary m-2"  onClick={handleUpdate}  >Save</button>
                <button className="btn btn-danger m-2 "   onClick={props.close} ><FontAwesomeIcon icon={faXmark}/></button>
            </Modal.Footer>
            </Modal>
          
        </div>
        
        </>
    );
};



export default Edit;