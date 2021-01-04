import React from 'react'


const NavbarButton = (props) => {
    return (
        <>
            <li><a href={props.id}>{props.name}</a></li>
        </>
    );
}

export default NavbarButton