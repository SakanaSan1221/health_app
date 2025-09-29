"use client";  
import React, { useState } from "react";
import Image from "next/image";
import left from "../public/left_04.png";
import right from "../public/right_04.png";
import morning_sun from "../public/morning_sun.png";
import sun from "../public/sun.png";
import moon from "../public/moon.png";
import under from "../public/under_04.png";

export const Insert = () => {
    const [open_bf,setOpen_bf] = useState(false);
    const [open_ln,setOpen_ln] = useState(false);
    const [open_dn,setOpen_dn] = useState(false);
    return (
        <>
        <ul className="date-list">
            <li className="arrow">
            <Image width={50} src={left} alt="左矢印" />
            </li>
            <li className="date">2025年1月29日(火)</li>
            <li className="arrow">
            <Image width={50} src={right} alt="右矢印" />
            </li>
        </ul>

        <section className="form">  
                <header className="label">
                    <Image width={50} src={morning_sun} alt="朝日" />
                    <h3>朝ごはん</h3>
                    <h3 className="cal-sum">999Kcal</h3>
                </header>
                {open_bf && (
                    <ul className="menu">
                        <li>sample</li>
                            <li>sample</li>
                    </ul>
                )}
                <div className="tab">
                    <button 
                        onClick={() => setOpen_bf(!open_bf)}
                        className={open_bf? "arrow_open":"arow"}
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
                {open_ln && (
                    <ul className="menu">
                        <li>sample</li>
                        <li>sample</li>
                    </ul>
                )}
                <div className="tab">
                    <button 
                        onClick={() => setOpen_ln(!open_ln)}
                        className={open_ln? "arrow_open":"arow"}
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
                {open_dn && (
                    <ul className="menu">
                        <li>sample</li>
                        <li>sample</li>
                    </ul>
                )}
                <div className="tab">
                    <button 
                        onClick={() => setOpen_dn(!open_dn)}
                        className={open_dn? "arrow_open":"arow"}
                    >
                        <Image width={40} src={under} alt="矢印" />
                    </button>
                </div>
        </section>
    </>
    );
};

export default Insert;
