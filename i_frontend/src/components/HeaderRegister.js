import React from "react";

function HeaderRegister(props) {

    return (
        <div className='titleRegister bg-light text-dark fs-3 fw-light p-3 mb-2  border-bottom border-2 border-secondary rounded-3 '>
           {props.title}
        </div>
    );

}

export default HeaderRegister;