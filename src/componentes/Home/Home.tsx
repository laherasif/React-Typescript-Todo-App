import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Todolistitem from '../List/Todolistitem'
function Home() {
    return (
        <div className="home-page">
            <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="add">
                        <h4>React TypeSript ToDo App</h4>
                        <Link to="/new" className="btn btn-info">Add To Do</Link>
                    </div>
                        <Todolistitem/>
                </div>
                <div className="col-md-2"></div>
            </div>
            </div>
        </div>
    )
}

export default Home
