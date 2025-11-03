"use client";  
import React, { useState } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";
import Image from "next/image"
import ToggleImage from "../public/toggle.png";

export default function Navigation() {
    const router = useRouter();
    const [selected, setSelected] = useState<string | null>(null);
    const [openNav,setOpenNav] = useState(false);

    // 他のページへ遷移
    const goPage = (path:string,key:string) => {
      setSelected(key); // 押したものを記録
      setOpenNav(false);
      router.push(path); 
    };

     // 他のページへ遷移（サブメニューから）
     const goToPageFromSubNav = (path:string,key:string) => {
      setSelected(key); // 押したものを記録
      router.push(path); 
    };

  return (
  <ul className="nav">
    <li>ダッシュボード</li>
    <li 
      className={selected === "today" ? "active" : ""}
      onClick={() => goPage("/today","today")}
    >
      今日の記録
    </li>
    <li
      className={selected === "month" ? "active" : ""}
      onClick={() => goPage("/month","month")}
    >
      今月の記録
    </li>
      <section className={`nav_master ${openNav ? "open" : ""}`}>  
        <li 
          className={`toggle ${openNav ? "open" : ""}`}
          onClick={(e) => {
              e.stopPropagation();
              setOpenNav((prev) => !prev);
              setSelected("user");
              router.push(`/master?tab=user`);
            }}
        >
          マスタ登録
          <Image src={ToggleImage} alt="ロゴ画像"/>
        </li>
        {openNav && (
          <>
            <li 
              className={selected === "user" ? "active" : ""}
              onClick={(e) => {
                e.stopPropagation(); // 親にイベントに伝播させない
                goToPageFromSubNav(`/master?tab=user`, "user")
              }}
            >
              ユーザマスタ
            </li>
            <li 
              className={selected === "menu" ? "active" : ""}
              onClick={(e) => {
                e.stopPropagation(); // 親にイベントに伝播させない
                goToPageFromSubNav(`/master?tab=menu`, "menu")
              }}
            >
              メニューマスタ
            </li>
          </>
        )}
      </section>
  </ul>
  );
}
