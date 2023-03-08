import React,{useState} from 'react';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import { faCoffee,faTrash ,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import Edit from './Edit';
import CreateTask from './createTask';

const Card = (props) => {
let[show,Setshow]=useState(false);

function Reverse(){
  Setshow(true);

  
}


function Close(){
  Setshow(false);
  
}
const updateCard=(obj)=>{
props.UpdateArray(obj,props.id)
// console.log(props.id);
// console.log(obj);
}


    return (
        
<div className=' hover m-4'>

  <div className="text-rigth">

   <input   name="" id="" value={props.fullobj.Name}  className= "form-control    text   border-0 text    bg-light m-1   " />
  <textarea    className="form-control  remove-area   border-0 text font   m-1 bg-light  text  "  rows="3"  value={props.fullobj.Description}></textarea>
  <div className='d-flex justify-content-end bg-secondary'>
<button  onClick={(()=>{props.delete(props.id)})}
           className="btn btn-sm btn-danger m-1"> <FontAwesomeIcon icon={faTrash}/></button>


<button   className="btn btn-sm btn-warning m-1  "  onClick={Reverse}   ><FontAwesomeIcon icon={faPenToSquare}/></button>
    </div>
    </div>
    
    
    
    <Edit name={props.fullobj.Name}   description={props.fullobj.Description} change={show} close={Close} updateCard={updateCard}></Edit>
    
    </div>
  
   )
    }
    


export default Card;