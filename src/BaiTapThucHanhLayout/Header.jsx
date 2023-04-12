import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header text-white bg-dark " style={{height:'50px'}}>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Start Bootstrap</h2>
                    <nav >
                        <ul  className='d-flex '>
                            <li><a href="#" className='text-white'>Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
