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
      Datejoin: "",
      Department: "volvo",
      Salary: 0,
      Dayoff: 0,
      Overtime: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Tên không được để trống"),
      Birthday: Yup.date()
        .max(new Date(), "ngày nhập vào không được lớn hơn ngày hiện tại")
        .required("Yêu cầu nhập"),
      Department: Yup.string().required("vui lòng nhập phòng ban của bạn"),
      Salary: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Vui lòng nhập chính xác hệ số lương của bạn"),
      Dayoff: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Vui lòng nhập số ngày nghỉ còn lại"),
      Overtime: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Vui lòng nhập số ngày đã làm thêm"),
      Overtime: Yup.string()
        .max(8, "tên không được quá 8 kí tự")
        .required("Vui lòng nhập số ngày đã làm thêm"),
    }),
    onSubmit: (values, { resetForm }) => {
      values.id = listStaff[listStaff.length - 1]?.id + 1;
      console.log("on submit", values);
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
          <button className="find" onClick={handleSearch}>
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
                    name="Datejoin"
                    value={formik.values.Datejoin}
                  ></input>
                  {formik.touched.Datejoin && formik.errors.Datejoin ? (
                    <p className="errors"> {formik.errors.Datejoin} </p>
                  ) : null}
                  <label>Phòng ban</label>
                  <select
                    id="Department"
                    name="Department"
                    defaultValue={formik.values.Department}
                    onChange={formik.handleChange}
                  >
                    <option value="volvo">Sale</option>
                    <option value="saab">Hr</option>
                    <option value="fiat">Marketing</option>
                    <option value="audi">It</option>
                    <option value="audi">Finance</option>
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
                    id="Dayoff"
                    name="Dayoff"
                    value={formik.values.Dayoff}
                  ></input>
                  {formik.touched.Dayoff && formik.errors.Dayoff ? (
                    <p className="errors"> {formik.errors.Dayoff} </p>
                  ) : null}
                  <label>số ngày làm thêm</label>
                  <input
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    id="Overtime"
                    name="Overtime"
                    value={formik.values.Overtime}
                  ></input>
                  {formik.touched.Overtime && formik.errors.Overtime ? (
                    <p className="errors"> {formik.errors.Overtime} </p>
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
              <img src="https://lh3.googleusercontent.com/ANJjOntqq2ZrXhazhmcX4cf1ahh-e7Qmt4o04FhGjJXFqT7daRhV5HJGV8k7D9Yjldlwz4zZHKntFUjnCepgXSVhkeONU6rNZmUWBVs6pdGxdn_XaqUxA1CV6vra9BhswDcDPHKN6cwEWCkSUBXQDvMTgyAfDcD0uPQbx8w_SIAGFyzetwE2ZKf9hAieAZC3QTI-3-wGMJZZNpJfh2eZzQRCJwq6YuyXs92NQzWhG0U7npTONpeZ0Ky0Pr-9hH8y0em5intGcjHBoJ27JpA54wtH28A8iurnGlCaD_HGxkxYFsIxyfbTmxenSvF6eUgyn4AiA_Dkb6EtbS5hNe83pws84vSIlBZzm_QJG9D27oR8In-S65Ov5kpUEpUOmqCGfaJPmVM23G6kApsp1XA7F9hn8IDwXXZqEcwuQCjTe3DhiUz58sIu27aemRJLY_Wj511jFbBRbNlGrehUfVODWgrmoSkI61F6STaBXSqgSNzl47riKD-B9HsTrzmWrX-_JeM1EGZBiVGA_lxA8i34fb0nA4fBwPHOSByAaJRtuTrC8fZMXXxyySXsU9Rs7zbjioa-4dFUILxOlGFdNr-kAdbrFoS4pJ0bxCLF7HFuTytT_Rkf-DI6BUEkk7i96MewqRZf9eN1EhLEem9uhDU5mOF7pbE5tj0G1zlGsCDG1uR0WrY3dIRMPghLEoJR7C_CfkSX-XmPgAFvsIp1DH22pIu2XBmvIHWzJ6sRuVB-wI-QTgen0RcF7Pl34gAHUNAz98GMHnDDkjOTufo9Tadls8vwKlZj-3jAsM86i-Gaccv67q9WS1LZAFGXXHOzvP4zJoVtDt8oe6hxwKl0AWJbxj3mx8NQF-N5mF2whkMmUdCC90rL0-duuqZHm0ypzstM8QNf3QgYXyy4ilP5jsmrOKFOHeyTf_B31IHJu24=s720-no?authuser=0"></img>
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
