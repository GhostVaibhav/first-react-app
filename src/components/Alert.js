import React from "react";

function Alert(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        props.alert && <div>
            <div
                className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                role="alert"
            >
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>
        </div>
    );
}

export default Alert;
