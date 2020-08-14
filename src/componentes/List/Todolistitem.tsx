import React , { useContext , useState , useEffect } from 'react'
import './todolist.css'
import { Context } from '../UseContext/Context'
import { Link } from 'react-router-dom'
function Todolistitem() {
    const { state, dispatch } = useContext(Context);
    const [message, setmessage] = useState({ iscompleted : false , length : 0})
   

    useEffect( () => {
        return () => {  
          setTimeout(()=>{
               setmessage({ iscompleted : false  , length : 0})
            },2000)
        }
    }, [message])

    
      
  
 

    

    return (
        <div>
     

            <div className="list">
                <div className="container">
                      
                    <div style={{marginTop:'1rem'}} >

                            { message.length  && message.iscompleted ? <div className="alert alert-success">Sucessfully Deleted</div> : null }
                    </div>


                            {state.todos.length > 0 ?
                            
                            <div className="table-data">
                               <table className="table">
                                   <thead>
                                   <tr className="head">
                                   <th>Sr#</th>
                                   <th colSpan={4}>Name</th>
                                   <th colSpan={2}>Action</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                       {state.todos.length > 0 && state.todos.map((item , index: number)  =>{
                                           return (
                                   
                                   <tr className="table-desc" key={index}>
                                           <td>{index + 1}</td>
                                           <td colSpan={3}>{item.text}</td>
                                           <td  colSpan={2}><Link to={`/edit/${item.id}`}><button className="btn btn-info">Edit</button></Link>
                                           <button className="btn btn-danger" onClick={()=> [dispatch({type : "DELETE_TODO" , payload : item}), setmessage({iscompleted : true , length : 1})]}>Delete</button></td>
                                       </tr>
                                           )
                                       })}
                                       
                                   </tbody>
                                   
                               </table>
                            </div>
                            :null }
                     
</div>

            </div>
            
        </div>
    )
}

export default Todolistitem
