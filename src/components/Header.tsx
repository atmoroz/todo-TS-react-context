import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav>
        <div className="nav-wrapper  pdg15 light-blue darken-3">
          <Link to="/" className="brand-logo">
            React.Context
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Список дел</Link>
            </li>
            <li>
              <Link to="/about">Описаие</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
