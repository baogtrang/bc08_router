import React from 'react'

export default function XucXac({ xucXacArr }) {
    let renderXucXac = () => {
        return xucXacArr.map((item) =>
            <img src={item.img} className="mx-5" width={80} />);
    };

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-dark p-5'>Tai</button>
                <div>{renderXucXac()}</div>
                <button className='btn btn-danger p-5'>Xiu</button>
            </div>
            <button className='btn btn-warning px-5 py-2'>Play game</button>
        </div>
    )
}
