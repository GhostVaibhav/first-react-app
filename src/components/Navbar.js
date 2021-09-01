import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                    onClick={() => {
                        props.changeLink(props.homeText);
                    }}
                >
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    props.link === props.homeText
                                        ? "active"
                                        : ""
                                }`}
                                aria-current="page"
                                to="/"
                                onClick={() => {
                                    props.changeLink(props.homeText);
                                }}
                            >
                                {props.homeText}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    props.link === props.aboutText
                                        ? "active"
                                        : ""
                                }`}
                                to="/about"
                                onClick={() => {
                                    props.changeLink(props.aboutText);
                                }}
                            >
                                {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                    <div
                        className="color-palette"
                        style={{
                            display: props.mode === "dark" ? "flex" : "none",
                        }}
                    >
                        <div
                            className="color-box red"
                            onClick={() => {
                                props.changeColor("#821409");
                            }}
                        ></div>
                        <div
                            className="color-box green"
                            onClick={() => {
                                props.changeColor("#347841");
                            }}
                        ></div>
                        <div
                            className="color-box blue"
                            onClick={() => {
                                props.changeColor("#064f94");
                            }}
                        ></div>
                    </div>
                    <div
                        className={`form-check form-switch mx-1 my-3 text-${
                            props.mode === "light" ? "dark" : "light"
                        }`}
                    >
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onClick={props.toggleMode}
                            checked={props.toggleState}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            {props.modeText}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string,
    aboutText: PropTypes.string,
};
Navbar.defaultProps = {
    title: "My Title",
    homeText: "Home",
    aboutText: "About",
};
