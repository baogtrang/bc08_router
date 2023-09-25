import React from 'react'

export default function KetQua({ luaChon, soBanThang, soLuotChoi }) {
    return (
        <div className='pt-5'>
            <h3>Bạn chọn: {luaChon} </h3>
            <h3>Số bàn thắng: {soBanThang} </h3>
            <h3>Số lượt chơi: {soLuotChoi} </h3>
        </div>
    )
}
