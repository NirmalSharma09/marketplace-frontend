import React from 'react';

const Sidebar = () => {
    return (
        <div>
        <div className='bg-white sidebar p-2'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-4'>Nirmal</span>
            </div>
            <hr className='text-dark'></hr>
            <div style={{ "textAlign": "left" }} className='list-group list-group-flush'>
                <a href="#" className='list-group-item py-2'>
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span className='fs-5'>Dashboard</span>
                </a>
                <a href="#" className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span className='fs-5'>Home</span>
                </a>
                <a href="#" className='list-group-item py-2'>
                    <i className='bi bi-table fs-5 me-3'></i>
                    <span className='fs-5'>Products</span>
                </a>
                <a href="#" className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>
                    <span className='fs-5'>Report</span>
                </a>
                <a href="#" className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span className='fs-5'>Customers</span>
                </a>
                <a href="#" className='list-group-item py-2'>
                    <i className='bi bi-power fs-5 me-3'></i>
                    <span className='fs-5'>Logout</span>
                </a>
            </div>
        </div>
        </div>
    )
}

export default Sidebar
