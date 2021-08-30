import React, { useState } from "react";

export default function About(props) {
    return (
        <div className="container">
            <h1
                className={`text-${
                    props.mode === "light" ? "dark" : "light"
                } my-3`}
            >
                About Us
            </h1>
            <p
                className={`text-${
                    props.mode === "light" ? "dark" : "light"
                } my-3`}
            >
                This is a website which was made for the sole intent of learning
                React!
            </p>
            <footer>
                <h4
                    className={`text-${
                        props.mode === "light" ? "dark" : "light"
                    } my-3 text-center`}
                >
                    Created By Vaibhav Sharma
                </h4>
            </footer>
        </div>
    );
}
