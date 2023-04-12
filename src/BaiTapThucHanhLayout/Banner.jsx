import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className='container'>

                <div className="p-5 my-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus deleniti ratione atque, inventore non culpa perspiciatis eligendi saepe aliquam.</p>
                        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                    </div>
                </div>

            </div>
           
        )
    }
}
