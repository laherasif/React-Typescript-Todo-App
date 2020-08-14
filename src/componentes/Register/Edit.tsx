import React , { useContext , useState , ChangeEvent, useEffect } from 'react'
import { Link , useHistory }  from 'react-router-dom'
import './Addtodo.css'
import { Context } from '../UseContext/Context'
const  Edittodo: React.FC = () => {
   const [data , setdata] = useState({ id : "" , text : ''})
    
  const { state, dispatch } = useContext(Context);
    const history = useHistory()
  let handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch({ type: "UPDATE_TODO", payload: { id : data.id , text : data.text } });
    history.push('/')
  };

  useEffect(() => {
      const url= window.location.pathname
      let  id  = url.split('/').pop();
    
     
      const data =state.todos.filter(item =>{return  item.id === id })
      const object = Object.assign({} , ...data)
      console.log("id id " , object)
      setdata(object)
      

  }, [state])
  

    const handleOnChange = (event: ChangeEvent<HTMLInputElement> ) : void => {
        
        setdata({ ...data, [event.target.name] : event.target.value });
 }

    
  console.log("state " , data)
    return (
        <div className="form-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="box">
                            <form onSubmit={handleSubmit}>
                                    <input type="text" autoFocus value={data.text} name="text" onChange={handleOnChange} className="form-control" placeholder="Enter Your Name here" />
                                    <button className="btn btn-primary">UPDATE</button>
                                   <Link to="/"> <button className="btn btn-danger" >Cancel</button></Link>
                                    </form>
                        </div>
                      
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Edittodo
