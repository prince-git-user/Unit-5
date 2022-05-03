import styled from "styled-components"

const Button =styled.button`
color: ${({theme1})=> (theme1 === "first_btn") ? "white" : ( theme1 === "lestbt") ? "blue" : "black"} ;
background-color:${({theme1})=> (theme1 === "first_btn") ? "blue" : "transparent"}; 
border: ${({theme1})=> (theme1 === "dott") ? "dotted" : (theme1 === "textbt") ? "none" :(theme1 === "lestbt") ? "none" : "solid 0.5px" };
margin:5px;
padding:10px;
border-radius:3px;
`;

export{Button};