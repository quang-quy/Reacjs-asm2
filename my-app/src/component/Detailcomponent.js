import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStaffs } from "../features/addStaffslice";

function Detail() {
  const { StaffID } = useParams();
  const navigate = useNavigate();
  const {staffs, depts} = useSelector((state) => ({
    staffs: state.Staff.staffs,
    depts: state.depts.departments,
  }));

  // console.log('STAFF DETAIL: ', {depts})
  // const [loading,setLoading] = useState(false)
  // const [value,getValue] = useState([])
  // const staff = staffs.find((staff) => staff.id == StaffID);
  // console.log({ staff });

  if(!staffs[0]) {
    return (
      <>
        <div>Loading....</div>
      </>
    )
  } else {
    const staff = staffs.find((staff) => staff.id == StaffID);

    if(!staff) {
      navigate('/')
    }

    const [staffDept] = depts.filter((dept) => dept.id === staff.departmentId); 
    console.log('STAFF DETAIL: ', {staffDept})

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={"/"}>Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col className="image" lg="3" md="3" sm="4" xs="12">
            <img className="Teim" src="https://159i.files.wordpress.com/2022/10/public.jpg"></img>
          </Col>
          <Col className="image" xs="12" md="9" sm="8" lg="9">
            <h5>Họ và tên: {staff.name}</h5>
            <p>Ngày sinh: {dateFormat(staff.doB)}</p>
            <p>Ngày vào công ty: {staff.startDate}</p>
            <p>Phòng ban: {staffDept.name} </p>
            <p>Số ngày nghỉ còn lại: {staff.annualLeave} </p>
            <p>Số ngày đã làm thêm: {staff.overTime} </p>
          </Col>
        </Row>
       
      </div>
    );
  }
 
  // // ví dụ
  // const addStaff = (data) => {
  //   fetch('https://rjs-101x-asignment-04-backend.vercel.app/staffs',{
  //     method : 'POST',
  //     body: data
  //   }).then(res => console.log('add EMP',res))
  // }
  // useEffect(() => {
  //   const staffsTest = dispatch(getStaffs());
  //   console.log({staffsTest})
  // }, [])

  // useEffect(() => {
  //   fetch('https://rjs-101x-asignment-04-backend.vercel.app/staffs',{
  //     method : 'POST',
  //     body: '{"id":0,"name":"Quang Quy","doB":"1999-01-01T08:59:00.000Z","salaryScale":1.1,"startDate":"2019-04-30T08:59:00.000Z","departmentId":"Dept01","annualLeave":1,"overTime":1,"image":"/assets/images/alberto.png"}',
  //   }).then(res => console.log('add EMP',res)).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   const url = "https://rjs-101x-asignment-04-backend.vercel.app/staffs";
  //   fetch(url)
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       getValue(data)
      
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(value)
  // const nhanvien = value.find((param)=>param.id==StaffID)


}
export default Detail;
