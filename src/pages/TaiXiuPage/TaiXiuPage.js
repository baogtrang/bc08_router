// rfc
import React, { useState } from 'react'
import "./style.scss"
import bggame from "./bgGame.png"
import XucXac from './XucXac'
import KetQua from './KetQua'
import img1 from "./imgXucXac/1.png"

// giống initial state
let defaultXucXac = [
    {
        img: img1,
        giaTri: 1,
    },
    {
        img: img1,
        giaTri: 1,
    },
    {
        img: img1,
        giaTri: 1,
    }
]

export default function TaiXiuPage() {
    const [xucXacArr, setXucXacArr] = useState(defaultXucXac);
    const [luaChon, setLuaChon] = useState("");
    const [soBanThang, setSoBanThang] = useState(0);
    const [soLuotChoi, setSoLuotChoi] = useState(0);


    return (
        <div style={{ backgroundImage: `url(${bggame})` }}
            id="game-page" className='text-center'
        >
            <XucXac xucXacArr={xucXacArr} />
            <KetQua />

        </div>
    )
}
