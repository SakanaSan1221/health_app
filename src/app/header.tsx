'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"
import logoImage from "../public/logo.png";

//データが存在しない時の画面
const Header = () => {
    const router = useRouter();
    // 他のページへ遷移
    const goPage = (path:string) => {
      router.push(path); 
    };

    return(
        <div className="header-container">
            <Image width={200} src={logoImage} alt="ロゴ画像"/>
            <div 
                className="header-user-info"
                onClick={() => goPage("/login")}
            >
                <p>ユーザー名</p>
            </div>
        </div>
    )
}

export default Header