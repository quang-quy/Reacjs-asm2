import React from "react";
import { faPhone,faFax,faEnvelope,faIdCard,faPeopleGroup,faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Link, NavLink, Routes, useParams } from 'react-router-dom';
import { Card, CardHeader, CardFooter,CardBody,Row,Col,Container  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import department from "./Department";
import { STAFFS } from '../shared/staffs';
import dateFormat from 'dateformat';
import { useState } from 'react';

function Home() {
    const [staffInfo, setStaffInfo] = useState()

    const renderStaffInfo = () => {
        return <Row className=''>
          <Col className='col-5 p-1'>
            <Card className='staff-detail' xs="12">
              <CardBody>
                <img className='Teim' src={staffInfo.image}/>
                <b className='mb-3'>Họ và tên: {staffInfo.name}</b>
                <p>Ngày sinh: {dateFormat(staffInfo.doB)}</p>
                <p>Ngày vào công ty: {staffInfo.startDate}</p>
                <p>Phòng ban: {staffInfo.department.name}</p>
                <p>Số ngày nghỉ còn lại: {staffInfo.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staffInfo.overTime}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      }



    return(
        <div>
            <h1>Nhân Viên</h1>
            <hr></hr>
            <Row>
              {STAFFS.map((s, idx) => 
              <Col  
              key={idx}
               className="bg-light p-2" 
               xs="6"
                sm="4"
                 lg="2"
                  style={{cursor: 'pointer'}} 
                 >
                    <Link to={`/detailcomponent/${idx}`}>
                <img src='https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/272152907_1071638976739732_3190899723615333128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ojEBuSkDSn0AX-tLSrn&_nc_ht=scontent.fhan18-1.fna&oh=00_AT9fExUlVhPuUDUSAQvypbz5MRGYPIYXednnaFaIyFDn8g&oe=631A9AC6'>
                </img>
                <p className='Name'> {s.name} </p>
                </Link>   
              </Col>)}
            </Row>
            {
              staffInfo && renderStaffInfo()
            }
        </div>
    )

}

export default Home