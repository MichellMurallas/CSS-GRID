import React from "react";
import { Main } from "./Main";
import "./Styles/Extructura.css";

export function Extructura (){
  return(
    <div className="grid-content caja">
      <div className="caja c1">HEADER</div>
      <div className="caja c2">NAVBAR</div>
      <Main />
      <div className="caja c4">SIDEBAR</div>
      <div className="caja c5">FOOTER</div>
    </div>
    )
}
