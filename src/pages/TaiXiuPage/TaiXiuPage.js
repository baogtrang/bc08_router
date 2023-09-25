// rfc
import React, { useState } from 'react'
import "./style.scss"
import bggame from "./bgGame.png"
import XucXac from './XucXac'
import KetQua from './KetQua'
import img1 from "./imgXucXac/1.png"
import img2 from "./imgXucXac/2.png"
import img3 from "./imgXucXac/3.png"
import img4 from "./imgXucXac/4.png"
import img5 from "./imgXucXac/5.png"
import img6 from "./imgXucXac/6.png"
import "./utils"
import { TAI, XIU } from './utils'

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
    let [xucXacArr, setXucXacArr] = useState(defaultXucXac);
    let [luaChon, setLuaChon] = useState("");
    let [soBanThang, setSoBanThang] = useState(0);
    let [soLuotChoi, setSoLuotChoi] = useState(0);
    let handlePlayGame = () => {
        let imagesArray = [img1, img2, img3, img4, img5, img6];
        let tongDiem = 0;
        //tạo mảng xúc xắc mới
        let newXucXac = xucXacArr.map((item) => {
            let random = Math.floor(Math.random() * 6);
            tongDiem += random;
            return {
                img: imagesArray[random],
                giaTri: random,
            };
        });
        setXucXacArr(newXucXac);
        setSoLuotChoi(++soLuotChoi);
        // xử lý thắng thua
        if (tongDiem >= 11) {

        }

    }

    return (
        <div style={{ backgroundImage: `url(${bggame})` }}
            id="game-page" className='text-center'
        >
            <XucXac
                xucXacArr={xucXacArr}
                setLuaChon={setLuaChon}
                handlePlayGame={handlePlayGame}
            />
            <KetQua
                luaChon={luaChon}
                soBanThang={soBanThang}
                soLuotChoi={soLuotChoi}
            />

        </div>
    )
}
