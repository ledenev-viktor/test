import React from "react";
import { MiniCart } from "../mini-cart";
import "./header.css";

export const Header: React.FC = () => (
  <header className="l-header">
    <div className="header__inner">
      <a href="#" className="b-logo">
        <img src="./img/glassesusalogo.svg" alt="optimax" />
      </a>
      <MiniCart />
    </div>
  </header>
);
