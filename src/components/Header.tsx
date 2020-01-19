import React from "react";

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav>
        <div className="nav-wrapper  pdg15 light-blue darken-3">
          <a href="/" className="brand-logo">
            TO-DO REACT-CONTEXT
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">To-do list</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
