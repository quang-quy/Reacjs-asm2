import React from "react";
import { faPhone,faFax,faEnvelope,faIdCard,faPeopleGroup,faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom';
import { Card, CardHeader, CardFooter,CardBody,Row,Col,Container  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
    return(
         <CardHeader className='asm1-header'>
       <NavLink className={"Link"} to="/Member"> <FontAwesomeIcon icon="fa-solid fa-people-group" />Nhân viên</NavLink> <br></br>
       <NavLink className={"Link"} to="/Department"><FontAwesomeIcon icon="fa-solid fa-id-card" />Phòng ban</NavLink> <br></br>
    <NavLink className={"Link"} to="/Salaty"> <FontAwesomeIcon icon="fa-solid fa-money-bill" />Lương</NavLink>
        </CardHeader>
    )

}

export default Home