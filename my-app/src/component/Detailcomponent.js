import React from "react";
import {useParams} from "react-router-dom"
import { STAFFS } from "../shared/staffs";
import { Card, CardHeader, CardFooter,CardBody,Row,Col,Container,Breadcrumb,BreadcrumbItem  } from 'reactstrap';
import dateFormat from 'dateformat';
import { BrowserRouter, NavLink, Routes, Link } from 'react-router-dom';
function Detail () {
    const {StaffID}  = useParams(); 

  let staff = STAFFS[StaffID]
  console.log(staff)
  const listStaff = STAFFS.filter((listStaff) => {
    return listStaff.id === staff.id 
  })
  console.log(listStaff)
  const convernt = listStaff[0]

    return(
        <div>
           <Breadcrumb>
        <BreadcrumbItem>
          <Link to={"/"}>Nhân viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{convernt.name}</BreadcrumbItem>
      </Breadcrumb>
            <Row>
            <Col className="image" lg="3" md="3" sm="4" xs="12">
                  <img className="Teim" src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/272152907_1071638976739732_3190899723615333128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ojEBuSkDSn0AX-tLSrn&_nc_ht=scontent.fhan18-1.fna&oh=00_AT9fExUlVhPuUDUSAQvypbz5MRGYPIYXednnaFaIyFDn8g&oe=631A9AC6"></img>
                  </Col>
            <Col className="image" xs="12"
            md="9"
                sm="8"
                 lg="9">
                  
                  
                  
            <h5>Họ và tên: {convernt.name}</h5>
           
            <p>Ngày sinh: {dateFormat(convernt.doB)}</p>
            <p>Ngày vào công ty: {convernt.startDate}</p>
            <p>Phòng ban: {convernt.department.name} </p>
            <p>Số ngày nghỉ còn lại: {convernt.annualLeave} </p>
            <p>Số ngày đã làm thêm: {convernt.overTime} </p>
            </Col>
            </Row>
        </div>
    )
}
export default Detail