import styled from "styled-components";

const Button=styled.button`
border-style:${(props)=>props.border || "solid"} ;
background:${(props)=>props.primary?"dodgerblue":"transparent"};
color:${(props)=>props.color || "teal"};
padding: 15px;
margin-top: 30px;
width: 150px;
font-size:15px;
&:hover{
   cursor: pointer; 
   border: 1px solid black;
}
`


export{Button}