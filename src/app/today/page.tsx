import React from "react";
import { TodayInsert } from "./today_insert"
import "../globals.css";

export default function Home() {
  return (
   <div className="container">
     <div>
      <TodayInsert/>
     </div>
   </div>
  );
}
