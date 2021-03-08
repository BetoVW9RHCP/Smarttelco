import React from 'react';

function Nav2Item(props){
    return(
        <li className='nav2-item'>
            <a href='#' className='icon-button'>
                {props.icon}
            </a>
        </li>
    );
}

export default Nav2Item; 