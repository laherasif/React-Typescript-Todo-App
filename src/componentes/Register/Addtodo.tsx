import React, { useContext, useState, ChangeEvent, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Addtodo.css'
import { Context } from '../UseContext/Context'
const Addtodo: React.FC = () => {
    const [todo, setTodo] = useState("");
    const [error, seterror] = useState("");

    const { state, dispatch } = useContext(Context);
    const history = useHistory()

    let handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (todo === '') {
            seterror("Name Field is required")
        }
        else {

            dispatch({ type: "ADD_TODO", payload: { text: todo } });
            history.push('/')
            setTodo("");
        }
    };

    useEffect(() => {
        const url = window.location.pathname
        let id = url.split('/').pop();


        const data = state.todos.filter(item => { return item.id === id })
        console.log("id id ", data)


    }, [state])





    console.log("state ", error)
    return (
        <div className="form-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="box">
                            <form onSubmit={handleSubmit}>
                                <input type="text" autoFocus value={todo} onChange={event => setTodo(event.target.value)} className="form-control" placeholder="Enter Your Name here" />
                                {error.length > 0 ? <div className="alert alert-danger" style={{marginTop:'1rem'}}>{error}</div> : null}

                                <button className="btn btn-primary">Add TO DO</button>
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

export default Addtodo
