"use client";  
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ModalInsert from "./modal_insert";
import Image from "next/image";
import left from "../../public/left_04.png";
import right from "../../public/right_04.png";
import morning_sun from "../../public/morning_sun.png";
import sun from "../../public/sun.png";
import moon from "../../public/moon.png";
import under from "../../public/under_04.png";

export const TodayInsert = () => {
    const [state, setState] = useState({
        open_bf: false,
        open_ln: false,
        open_dn: false,
      });
    const [showModal, setShowModal] = useState(false); 
    const ShowModal = () => {
        setShowModal(true);
    };
    return (
        <>
        <ul className="date-list">
            <li className="arrow">
            <Image width={50} src={left} alt="左矢印" />
            </li>
            <li className="date"><p>2025年1月29日(火)</p></li>
            <li className="arrow">
            <Image width={50} src={right} alt="右矢印" />
            </li>
        </ul>

        <button className="fixed_btn" onClick={ShowModal}>登録</button>
        <ModalInsert showFlag={showModal} setShowModal={setShowModal}/>

        <section className="form">  
                <header className="label">
                    <Image width={50} src={morning_sun} alt="朝日" />
                    <h3>朝ごはん</h3>
                    <h3 className="cal-sum">999Kcal</h3>
                </header>
                {state.open_bf && (
                    <ul className="menu">
                        <li>sample</li>
                        <li>sample</li>
                    </ul>
                )}
                <div className="tab">
                    <button 
                        onClick={() => setState(prev => ({ ...prev, open_bf: !prev.open_bf }))}
                        className={state.open_bf? "arrow_open":"arow"}
                    >
                        <Image width={40} src={under} alt="矢印"/>
                    </button>
                </div>
        </section>

        <section className="form">
                <header className="label">
                    <Image width={50} src={sun} alt="太陽" />
                    <h3>昼ごはん</h3>
                    <h3 className="cal-sum">999Kcal</h3>
                </header>
                {state.open_ln && (
                    <ul className="menu">
                        <li>sample</li>
                        <li>sample</li>
                    </ul>
                )}
                <div className="tab">
                    <button 
                        onClick={() => setState(prev => ({ ...prev, open_ln: !prev.open_ln}))}
                        className={state.open_ln? "arrow_open":"arow"}
                    >
                        <Image width={40} src={under} alt="矢印" />
                    </button>
                </div>
        </section>
        <section className="form">
                <header className="label">
                    <Image width={50} src={moon} alt="月" />
                    <h3>夜ごはん</h3>
                    <h3 className="cal-sum">999Kcal</h3>
                </header>
                {state.open_dn && (
                    <ul className="menu">
                        <li>sample</li>
                        <li>sample</li>
                    </ul>
                )}
                <div className="tab">
                    <button 
                        onClick={() => setState(prev => ({ ...prev, open_dn: !prev.open_dn}))}
                        className={state.open_dn? "arrow_open":"arow"}
                    >
                        <Image width={40} src={under} alt="矢印" />
                    </button>
                </div>
        </section>
    </>
    );
};

export default TodayInsert;
