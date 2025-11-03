import React from "react";
import {MonthView} from "./month_view"
import "../globals.css";

export default function Home() {
  return (
   <div className="container">
     <div>
      <MonthView/>
     </div>
   </div>
  );
}
