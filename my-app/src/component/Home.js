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
import { staffAction } from "../features/addStaffslice";

function Home(props) {
  const dispatch = useDispatch();
  const listStaff = useSelector((state) => state.Staff.listStaff);
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );
  const [staffInfo, setStaffInfo] = useState();
  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      Birthday: "",
      startDate: "",
      Department: "Sale",
      Salary: 0,
      annualLeave: 0,
      overTime: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "tên không được quá 30 kí tự")
        .min(2, "tên không được dưới 2 kí tự")
        .required("Tên không được để trống"),
      startDate: Yup.date()
        .max(new Date(), "ngày nhập vào không được lớn hơn ngày hiện tại")
        .required("Yêu cầu nhập"),
      Birthday: Yup.date()
        .max(new Date(), "ngày nhập vào không được lớn hơn ngày hiện tại")
        .required("Yêu cầu nhập"),
      Department: Yup.string().required("vui lòng nhập phòng ban của bạn"),
      Salary: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Vui lòng nhập chính xác hệ số lương của bạn"),
      annualLeave: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Vui lòng nhập số ngày nghỉ còn lại"),
      overTime: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Vui lòng nhập số ngày đã làm thêm"),
      // overTime: Yup.string()
      //   .max(8, "tên không được quá 8 kí tự")
      //   .required("Vui lòng nhập số ngày đã làm thêm"),
    }),
    onSubmit: (values, { resetForm }) => {
      values.id = listStaff[listStaff.length - 1]?.id + 1;
      console.log("on submit", values);
      values = { ...values, department: { name: values.Department } };
      dispatch(staffAction.addStaff(values));
      toggle();
      resetForm();
      handleSearch();
    },
  });

  const [search, setSearch] = useState(listStaff); // thang nay luu gia tri da tim kiem
  const [textSearch, setTextSearch] = useState(""); // thang nay luu gia tri da tim kiem

  useEffect(() => {
    console.log("1 lần duy nhất"); //didmount
    return () => console.log("unmounting..."); //unmount
  }, []);

  useEffect(() => {
    console.log("after list staff has changed", listStaff);
    handleSearch();
  }, [listStaff]); //khi store.Staff.listStaff thay đổi thì nó sẽ gọi hàm trong useEffect

  const handleSearch = () => {
    console.log("searching...", textSearch);
    setSearch(
      listStaff.filter((staff) =>
        staff.name.toLowerCase().includes(textSearch.toLowerCase())
      )
    );
  };

  const renderStaffInfo = () => {
    return (
      <Row className="">
        <Col className="col-5 p-1">
          <Card className="staff-detail" xs="12">
            <CardBody>
              <img className="Teim" src={staffInfo.image} />
              <b className="mb-3">Họ và tên: {staffInfo.name}</b>
              <p>Ngày sinh: {dateFormat(staffInfo.doB)}</p>
              <p>Ngày vào công ty: {staffInfo.startDate}</p>
              <p>Phòng ban: {staffInfo.department.name}</p>
              <p>Số ngày nghỉ còn lại: {staffInfo.annualLeave}</p>
              <p>Số ngày đã làm thêm: {staffInfo.overTime}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };

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
        <div>
          <Button color="danger" onClick={toggle}>
            Thêm nhân viên
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle} close={closeBtn}>
              Thêm nhân viên mới
            </ModalHeader>
            <ModalBody>
              <div className="form-input">
                {/* <div className="column left-label"> </div> */}
                <form onSubmit={formik.handleSubmit} id="form">
                  <label>Tên</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    id="name"
                    name="name"
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <p className="errors"> {formik.errors.name} </p>
                  ) : null}
                  <label>Ngày Sinh</label>
                  <input
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    id="Birthday"
                    name="Birthday"
                    value={formik.values.Birthday}
                  ></input>
                  {formik.touched.Birthday && formik.errors.Birthday ? (
                    <p className="errors"> {formik.errors.Birthday} </p>
                  ) : null}
                  <label>Ngày Vào Công Ty</label>
                  <input
                    type="date"
                    id="Datejoin"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    name="startDate"
                    value={formik.values.startDate}
                  ></input>
                  {formik.touched.startDate && formik.errors.startDate ? (
                    <p className="errors"> {formik.errors.startDate} </p>
                  ) : null}
                  <label>Phòng ban</label>
                  <select
                    id="Department"
                    name="Department"
                    defaultValue={formik.values.Department}
                    onChange={formik.handleChange}
                  >
                    <option value="Sale">Sale</option>
                    <option value="Hr">Hr</option>
                    <option value="Marketing">Marketing</option>
                    <option value="It">It</option>
                    <option value="Finance">Finance</option>
                  </select>
                  <label>hệ số lương</label>
                  <input
                    type="number"
                    id="Salary"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    name="Salary"
                    value={formik.values.Salary}
                  ></input>
                  {formik.touched.Salary && formik.errors.Salary ? (
                    <p className="errors"> {formik.errors.Salary} </p>
                  ) : null}
                  <label>số ngày nghỉ </label>
                  <input
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    id="annualLeave"
                    name="annualLeave"
                    value={formik.values.annualLeave}
                  ></input>
                  {formik.touched.annualLeave && formik.errors.annualLeave ? (
                    <p className="errors"> {formik.errors.annualLeave} </p>
                  ) : null}
                  <label>số ngày làm thêm</label>
                  <input
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    id="overTime"
                    name="overTime"
                    value={formik.values.overTime}
                  ></input>
                  {formik.touched.overTime && formik.errors.overTime ? (
                    <p className="errors"> {formik.errors.overTime} </p>
                  ) : null}
                  <Button className="add" color="primary" type="sumbit">
                    Thêm nhân viên
                  </Button>
                  <Button className="cancel" color="secondary" onClick={toggle}>
                    Hủy
                  </Button>
                </form>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <hr></hr>
      <Row>
        {search.map((s, idx) => (
          <Col
            key={idx}
            className="bg-light  p-2"
            xs="6"
            sm="4"
            lg="2"
            style={{ cursor: "pointer" }}
          >
            <Link to={`/detailcomponent/${idx}`}>
              <img src="https://159i.files.wordpress.com/2022/10/public.jpg"></img>
              <p className="Name"> {s.name} </p>
            </Link>
          </Col>
        ))}
      </Row>
      {staffInfo && renderStaffInfo()}
    </div>
  );
}

export default Home;
