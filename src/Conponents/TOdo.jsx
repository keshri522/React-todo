import {React,useEffect,useState} from 'react';
import "../App.css"
import card from './card';
import CreateTask from './createTask';
import Card from './card';
import DateTime from './DateTime';
const TOdo = () => {


   
  const getDatafromLocal=()=>{
    const item=localStorage.getItem("Lists")
    if(item){
      return JSON.parse(item);
    }
    
    else{
      return[]
    }
  }




    let [modal,Setmodal]=useState(false);
     let [arrlist,Setarrlist]=useState(getDatafromLocal());
   
  const Open=(()=>{
        Setmodal(true);
    })

 const Add =((taskobj)=>{
    Setarrlist((prevValue)=>{
        return [...prevValue,taskobj]

       

    })
   
    Setmodal(false);
 
 })

 useEffect(()=>{
  localStorage.setItem("Lists",JSON.stringify(arrlist));
 },[arrlist])

function handleDelete(id){
   Setarrlist((prevValue)=>{
    return prevValue.filter((item,index)=>{
        return id!==index
    })

   })
   window.location.reload()
}

// const Change=()=>{
//   Setmodal(true);
// }
function Close(){
  Setmodal(false);
}


const UpdateArray=(obj,id)=>{
  
  let array=[...arrlist];
  array.map((item,index)=>{
    if(id==index){
       array[id]=obj
      
      }
 return item;
    }
   
  )
  
  
  Setarrlist(array);
localStorage.setItem("Lists",JSON.stringify(array));
window.location.reload();
}

    
    return (
       <>
        <div className="header text-center "> 
        <div className=''>
        <DateTime></DateTime>
        </div>
        <h3 >Add Your Tasks</h3>
            <button className='btn btn-danger mt-2 text-white  ' onClick={Open}>Create Task</button>
        </div>
        
        <div className="task-content    ">
     

       {  arrlist.map((obj,index)=>{
         
         return <Card   fullobj={obj} key={index}  id={index} index={index} delete={handleDelete}  UpdateArray={UpdateArray}  ></Card>
       
          
        
       })}
       
       
        </div>
       
        <CreateTask  modals={modal} save={Add} close={Close}  ></CreateTask>\
       
       </>
    
    );
};

export default TOdo;