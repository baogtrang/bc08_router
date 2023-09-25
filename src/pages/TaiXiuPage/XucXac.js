import React from 'react'
import { TAI, XIU } from './utils';

export default function XucXac({ xucXacArr, setLuaChon, handlePlayGame }) {
    let renderXucXac = () => {
        return xucXacArr.map((item) =>
            <img src={item.img} className="mx-5" width={80} />);
    };

    return (
        <div className='pt-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={() => setLuaChon(TAI)} className='btn btn-dark p-5'>Tài</button>
                <div>{renderXucXac()}</div>
                <button onClick={() => setLuaChon(XIU)} className='btn btn-danger p-5'>Xỉu</button>
            </div>
            <button onClick={handlePlayGame} className='btn btn-warning px-5 py-2'>Play game</button>
        </div >
    )
}
