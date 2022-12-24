import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { STAFFS } from "../shared/staffs";
import dateFormat from "dateformat";
import { useState } from "react";
import "../component/cpn.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { addStaff, delStaff, staffAction } from "../features/addStaffslice";
import StaffModal from "./StaffModal";

function Home() {
  const dispatch = useDispatch();
  const {staffs, isLoading, searchedStaff} = useSelector((state) => ({
    staffs: state.Staff.staffs,
    isLoading: state.Staff.isLoading,
    searchedStaff: state.Staff.searchedStaff,
  }));

  // const [staffsLocal, setStaffsLocal] = useState(staffs);

  const [search, setSearch] = useState(staffs); // thang nay luu gia tri da tim kiem
  const [textSearch, setTextSearch] = useState(""); // thang nay luu gia tri da tim kiem

  // useEffect(() => {
  //   console.log("after list staff has changed", listStaff);
  //   handleSearch();
  // }, [listStaff]); //khi store.Staff.listStaff thay đổi thì nó sẽ gọi hàm trong useEffect
  // console.log(listStaff1)
  const handleSearch = () => {
    // const searchedStaffs = staffs.filter(staff => staff.name.toLowerCase().includes(textSearch.toLowerCase()));
    // setStaffsLocal(searchedStaffs);
    dispatch(staffAction.searchStaff(textSearch))

    // setListStaff1(
    //   listStaff1.filter((staff) => {
        
    //     return staff.name.toLowerCase().includes(textSearch.toLowerCase());
    //   })
    // );
  };
  /**GET LIST OF STAFF */
  // useEffect(() => {
  //   // const url = "https://rjs-101x-asignment-04-backend.vercel.app/staffs";
  //   // fetch(url)
  //   //   .then((Response) => Response.json())
  //   //   .then((data) => {
  //   //     setListStaff1(data)
  //   //   })
  //   //   .catch((err) => console.log(err));
  //   dispatch(getStaffs());
  // }, [dispatch, getStaffs]);

  const handleDelete = id => {
    // const delStaff = async() => {
    //   const response = await fetch(`https://rjs-101x-asignment-04-backend.vercel.app/staffs/${id}`,{
    //     method : 'DELETE'
    //   })
    //   const data = await response.json();
    //   return data;
    // }
    // delStaff();
    // fetch('https://rjs-101x-asignment-04-backend.vercel.app/staffs', + "" + id,{
    //   method : 'DELETE',
    //  body: id 
    // }).then(res => console.log('Delete EMP',res)).catch(err => console.log(err))
    // console.log(id)
    dispatch(delStaff(id));
  }   

  if(isLoading) {
    return (
      <>
            <div className="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
      </>
    )
  }

  return (
    <div>
      <h1>Nhân Viên</h1>
      <div className="main-input">
        <div>
          <input
            className="search"
            type="text"
            onChange={(e) => setTextSearch(e.target.value)}
          ></input>
          <button className="find" xs="12" onClick={handleSearch}>
            Tìm Kiếm
          </button>
        </div>
        <StaffModal staffs={staffs} isUpdate={false} text={'Thêm nhân viên'} />
      </div>
      <hr></hr>
      <Row>
      {searchedStaff[0] && searchedStaff.map((s, idx) => (
          <Col
            key={idx}
            className="bg-light  p-2"
            xs="6"
            sm="4"
            lg="2"
            style={{ cursor: "pointer" }}
          >
            <Link to={`/detailcomponent/${s.id}`}>
              <p className="Name"> {s.name} </p>
              <img src="https://159i.files.wordpress.com/2022/10/public.jpg"></img>
              {/* <button className="find delete-button" onClick={() => handleDelete(s.id)}>Xóa nhân viên</button> */}
            </Link>
            <button className="find delete-button" onClick={() => handleDelete(s.id)}>Xóa nhân viên</button>
          </Col>
        ))}
  
        {!searchedStaff[0] && staffs.map((s, idx) => (
          <Col
            key={idx}
            className="bg-light  p-2"
            xs="6"
            sm="4"
            lg="2"
            style={{ cursor: "pointer" }}
          >
            <Link to={`/detailcomponent/${s.id}`}>
              <p className="Name"> {s.name} </p>
              <img src="https://159i.files.wordpress.com/2022/10/public.jpg"></img>
              {/* <button className="find delete-button" onClick={() => handleDelete(s.id)}>Xóa nhân viên</button> */}
            </Link>
            <button className="find delete-button" onClick={() => handleDelete(s.id)}>Xóa nhân viên</button>
            <StaffModal isUpdate={true} staff={s ? s : null} text={'Sửa thông tin'} staffs={staffs} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
