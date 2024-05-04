import React, { Component } from 'react'

function Spinner() {
    return (
        <div className='d-flex align-items-center'>
            <strong>Loading....</strong>
            <div className='spinner-border text-danger ml-auto' role='status' aria-hidden='true'>

            </div>
        </div>
    )
}

export default Spinner;


