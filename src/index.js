import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import App from './App'
import AboutMe from './AboutMe'
import ListLink from './ListLink'
import './index.css'



const routing = (  
  <Router> 
    <div>
        <ul>
            <button className='button1'>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Main Page
                    </NavLink>
                </li>
            </button>
            <button className='button2'>
                <li>
                    <NavLink exact activeClassName="active" to="/AboutMe">
                        About Me
                    </NavLink>
                </li>
            </button>
            <button className='button3'>
                <li>
                    <NavLink exact activeClassName="active" to="/ListLink">
                        Historical Remnants
                    </NavLink>
                </li>
            </button>
        </ul>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/AboutMe" element={<AboutMe/>} />   
            <Route path="/ListLink" element={<ListLink/>} />   
        </Routes>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
