import React, { useReducer, useState } from "react";
import '../App.css'

import Modal from "react-bootstrap/Modal";
// import ModalHeader from "react-bootstrap/esm/ModalHeader";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import { faCoffee,faTrash ,faPenToSquare ,faSquarePlus, faXmark} from '@fortawesome/free-solid-svg-icons'
import Edit from "./Edit";





const CreateTask = (props) => {
  let [task,Settask]=useState('');
  let [descp,Setdescp]=useState(' ');
 
  
 
 
const handleChange=((event)=>{
    const{name,value}=event.target;

    if(name=="create-task"){
      
        Settask(value);
    }
    else{
        if(name=="create-description"){
          
            Setdescp(value);
        }
    }
   
})
const handleSave=(()=>{
    let taskobj={};
    taskobj ["Name"]=task;
    taskobj ["Description"]=descp;
    props.save(taskobj);
    window.location.reload();
  
   
    Settask("");
    Setdescp("")
  

    
    
})


    return (
        <>
        <div>
            <Modal className="color bg-info" show={props.modals}  >
            <Modal.Header ><h2 className="text-warning">Create Task</h2></Modal.Header>
            <Modal.Body className="colors">
             <form  className="form-group">
                <div>
                <label htmlFor="" className="m-2 text-warning">Task Name</label>
                  
                    <input type="text" name="create-task" id="" className="form-control text-input  border-0 " value={task} onChange={handleChange}  />
                </div>
                <div> <label htmlFor="" className="m-2 text-warning">About</label>
             
              <textarea name="create-description" id=""  rows="4" className="form-control remove-area border-0" value={descp} onChange={handleChange}  ></textarea>
                </div>
             </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-info m-2" onClick={handleSave}  > <FontAwesomeIcon icon={faSquarePlus}/></button>
                <button className="btn btn-outline-danger m-2" onClick={props.close}  ><FontAwesomeIcon icon={faXmark}/></button>
            </Modal.Footer>
            </Modal>
          
        </div>
        <Edit first={task} second={descp} ></Edit>
        </>
    );
};

export default CreateTask;