import React from 'react'
import "./SidebarOption.css";

function SidebarOption({heading,Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption-icon"></Icon>}
            {Icon ? <h4>{heading}</h4>:<p>{heading}</p>}
        </div>
    )
}

export default SidebarOption;
