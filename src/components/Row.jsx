import React from "react";
function Row(props){
    const {label} = props;
    return (
        <>
        <div className="row">
        <label>{props.label}</label>
        <br />
        {props.children}
        <hr />
        </div>
        </>
    )

}
export default Row;