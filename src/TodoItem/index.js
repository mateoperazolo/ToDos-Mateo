import React from "react";
import './TodoItem.css';


function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed ? 'Icon-check--active':""}`}
      onClick={props.onComplete}
      >
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`Icon Icon-check ${props.completed ? 'Icon-check--hide':""}`}>
          <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#323232" strokeWidth="2"/>
        </svg>

        <svg width="134px" height="134px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" 
        fill="#4caf50" 
        className={`Icon Icon-check ${props.completed ? 'Icon-check--active':"Icon-check--hide"}`}>

          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

          <g id="SVGRepo_tracerCarrier" strokeLinejoin="round"  stroke="#CCCCCC" strokeWidth="0.128"/>

          <g id="SVGRepo_iconCarrier"> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/> </g>

        </svg>
       
      </span>
      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete':""}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
      <svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" 
      className="Icon Icon-delete">

        <g>

          <path d="M298.656,187.5c-10.096,0-18.281,8.185-18.281,18.281v129.188c0,10.096,8.185,18.281,18.281,18.281   s18.281-8.185,18.281-18.281V205.781C316.938,195.685,308.753,187.5,298.656,187.5z"/>

          <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M365.688,163.125v202.312   c0,20.193-16.37,36.562-36.562,36.562h-146.25c-20.193,0-36.562-16.37-36.562-36.562V163.125   c-13.462,0-24.375-10.913-24.375-24.375s10.913-24.375,24.375-24.375h49.796c3.232,0,6.332-1.284,8.618-3.57l17.236-17.236   c2.286-2.285,5.385-3.57,8.618-3.57h50.841c3.232,0,6.332,1.284,8.618,3.57l17.236,17.236c2.286,2.286,5.385,3.57,8.618,3.57   h49.795c13.462,0,24.375,10.913,24.375,24.375S379.149,163.125,365.688,163.125z"/>

          <path d="M213.344,187.5c-10.096,0-18.281,8.185-18.281,18.281v129.188c0,10.096,8.185,18.281,18.281,18.281   s18.281-8.185,18.281-18.281V205.781C231.625,195.685,223.44,187.5,213.344,187.5z"/>

        </g>

      </svg>
      </span>
    </li>
  );
}

export {TodoItem}

