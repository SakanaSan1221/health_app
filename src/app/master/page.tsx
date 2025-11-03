"use client";  
import { useSearchParams } from "next/navigation";
import UserMaster from "./user_master";
import MenuMaster from "./menu_master";
import "../globals.css";

export default function MasterManagement() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab"); // user or menu

  return (
   <div className="container">
     <div className="master_content">
      {tab === "menu" && <MenuMaster />}
      {tab === "user" && <UserMaster />}
      {!tab && <p>表示するマスタを選択してください。</p>}
      </div>
   </div>
  );
}
