import { Card, CardHeader, CardFooter,CardBody,Row,Col,Container  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { STAFFS } from './shared/staffs';
import dateFormat from 'dateformat';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faFax,faEnvelope,faIdCard,faPeopleGroup,faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom';
import Member from './component/Member';
import Salary from './component/Salary'
import Department from './component/Department';
import {Route } from 'react-router-dom';
import Home from  './component/Home'

import './App.css';


function App() {

  const [staffInfo, setStaffInfo] = useState(null)
console.log('staff', staffInfo)
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

library.add(faPhone,faFax,faEnvelope,faIdCard,faPeopleGroup,faMoneyBill)
  return (
    <div className="App">
     
      <Card>
      
      <Home/>
        <CardBody>
            <Container>
            <h1>Nhân Viên</h1>
            <hr></hr>
            <Row>
              {STAFFS.map((s, idx) => <Col  key={idx} className="bg-light p-2" xs="6" sm="4" lg="2" style={{cursor: 'pointer'}} onClick={() => setStaffInfo(s)}>
                <img src='https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/272152907_1071638976739732_3190899723615333128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HuLKHgaHaAcAX-4dWxq&_nc_ht=scontent.fhan18-1.fna&oh=00_AT-UM86mLcmKd_AvUh4OwRvsLK25qzehqxW8-bg2gCsVww&oe=6302DFC6' className='border mx-auto'>

                </img>
                <p className='Name'> {s.name} </p>
              </Col>)}
            </Row>
            {
              staffInfo && renderStaffInfo()
            }
          </Container>  
        </CardBody>
        <CardFooter>
          <div className='Main-footer'>

     
         <div className='contact-infor'>
          <h3>Our Address</h3>
          <p>121, Clear Water Bay Road <br></br>
          Water Bay Road, Kowloon <br></br>
          HONG KONG <br></br>
          <FontAwesomeIcon icon="fas fa-phone" />+852 1234 5678 <br></br>
          <FontAwesomeIcon icon="fas fa-fax" /> +852 8765 4321 <br></br>
          <FontAwesomeIcon icon="fas fa-envelope" /> <a href='https://www.youtube.com/watch?v=INinjCg50v8&t=112s' target={'_blank'}>confusion@food.net</a>
          </p>
         </div>
         <div className='right'>
          <img className='logo' src='data:image/png;base64,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'></img>
          <img className='logo' src='https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png'></img>
          <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png'></img>
          <img className='logo' src='https://cdn.pixabay.com/photo/2017/08/23/11/30/twitter-2672572_1280.jpg'></img>
         <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/640px-YouTube_social_red_square_%282017%29.svg.png'></img>
         <img className='logo' src='https://toppng.com//public/uploads/preview/font-email-comments-email-icon-square-11563265451o3oy61mf1b.png'></img>
         </div>
         </div>
         <div className='clear'></div>
         <p className='p1'> Copyright 2019 Ristorante Con Fusion</p>
        </CardFooter>
      </Card>

    </div>
    
  );
}
<BrowserRouter>
<Routes>
<Route path='/Member' element = {<Member/>} ></Route>
<Route path='/Department' element={<Department/>} ></Route>
<Route path='/Salary' element={<Salary/>} ></Route>
</Routes>
</BrowserRouter>


export default App;
