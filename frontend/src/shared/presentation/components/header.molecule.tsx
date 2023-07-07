import React from "react";
import logo from "../assets/header-logo.png";
import "./header.molecule.scss";

const HeaderMolecule: React.FC = () => {
  return (
    <div className="container-header">
      <img className="header-logo" src={logo} alt="Header Logo" />
    </div>
  );
};

export default HeaderMolecule;