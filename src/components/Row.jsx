import React from "react";
function Row(props){
    const {label} = props;
    return (
        <>
        <div className="row">
        <label>{label}</label>
        <br />
        {props.children}
        <hr />
        </div>
        </>
    )

}
export default Row;