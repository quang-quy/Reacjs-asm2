import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const { StaffID } = useParams();
  const store = useSelector((state) => state);
  const staff = store.Staff.listStaff.find((staff) => staff.id == StaffID);

  console.log({ staff });

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
          <img
            className="Teim"
            src="https://lh3.googleusercontent.com/ANJjOntqq2ZrXhazhmcX4cf1ahh-e7Qmt4o04FhGjJXFqT7daRhV5HJGV8k7D9Yjldlwz4zZHKntFUjnCepgXSVhkeONU6rNZmUWBVs6pdGxdn_XaqUxA1CV6vra9BhswDcDPHKN6cwEWCkSUBXQDvMTgyAfDcD0uPQbx8w_SIAGFyzetwE2ZKf9hAieAZC3QTI-3-wGMJZZNpJfh2eZzQRCJwq6YuyXs92NQzWhG0U7npTONpeZ0Ky0Pr-9hH8y0em5intGcjHBoJ27JpA54wtH28A8iurnGlCaD_HGxkxYFsIxyfbTmxenSvF6eUgyn4AiA_Dkb6EtbS5hNe83pws84vSIlBZzm_QJG9D27oR8In-S65Ov5kpUEpUOmqCGfaJPmVM23G6kApsp1XA7F9hn8IDwXXZqEcwuQCjTe3DhiUz58sIu27aemRJLY_Wj511jFbBRbNlGrehUfVODWgrmoSkI61F6STaBXSqgSNzl47riKD-B9HsTrzmWrX-_JeM1EGZBiVGA_lxA8i34fb0nA4fBwPHOSByAaJRtuTrC8fZMXXxyySXsU9Rs7zbjioa-4dFUILxOlGFdNr-kAdbrFoS4pJ0bxCLF7HFuTytT_Rkf-DI6BUEkk7i96MewqRZf9eN1EhLEem9uhDU5mOF7pbE5tj0G1zlGsCDG1uR0WrY3dIRMPghLEoJR7C_CfkSX-XmPgAFvsIp1DH22pIu2XBmvIHWzJ6sRuVB-wI-QTgen0RcF7Pl34gAHUNAz98GMHnDDkjOTufo9Tadls8vwKlZj-3jAsM86i-Gaccv67q9WS1LZAFGXXHOzvP4zJoVtDt8oe6hxwKl0AWJbxj3mx8NQF-N5mF2whkMmUdCC90rL0-duuqZHm0ypzstM8QNf3QgYXyy4ilP5jsmrOKFOHeyTf_B31IHJu24=s720-no?authuser=0"
          ></img>
        </Col>
        <Col className="image" xs="12" md="9" sm="8" lg="9">
          <h5>Họ và tên: {staff.name}</h5>
          <p>Ngày sinh: {dateFormat(staff.doB)}</p>
          <p>Ngày vào công ty: {staff.startDate}</p>
          <p>Phòng ban: {staff.department?.name} </p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave} </p>
          <p>Số ngày đã làm thêm: {staff.overTime} </p>
        </Col>
      </Row>
      {console.log(staff.startDate)}
      {/* <Row>
        <Col className="image" lg="3" md="3" sm="4" xs="12">
          <img
            className="Teim"
            src="https://lh3.googleusercontent.com/ANJjOntqq2ZrXhazhmcX4cf1ahh-e7Qmt4o04FhGjJXFqT7daRhV5HJGV8k7D9Yjldlwz4zZHKntFUjnCepgXSVhkeONU6rNZmUWBVs6pdGxdn_XaqUxA1CV6vra9BhswDcDPHKN6cwEWCkSUBXQDvMTgyAfDcD0uPQbx8w_SIAGFyzetwE2ZKf9hAieAZC3QTI-3-wGMJZZNpJfh2eZzQRCJwq6YuyXs92NQzWhG0U7npTONpeZ0Ky0Pr-9hH8y0em5intGcjHBoJ27JpA54wtH28A8iurnGlCaD_HGxkxYFsIxyfbTmxenSvF6eUgyn4AiA_Dkb6EtbS5hNe83pws84vSIlBZzm_QJG9D27oR8In-S65Ov5kpUEpUOmqCGfaJPmVM23G6kApsp1XA7F9hn8IDwXXZqEcwuQCjTe3DhiUz58sIu27aemRJLY_Wj511jFbBRbNlGrehUfVODWgrmoSkI61F6STaBXSqgSNzl47riKD-B9HsTrzmWrX-_JeM1EGZBiVGA_lxA8i34fb0nA4fBwPHOSByAaJRtuTrC8fZMXXxyySXsU9Rs7zbjioa-4dFUILxOlGFdNr-kAdbrFoS4pJ0bxCLF7HFuTytT_Rkf-DI6BUEkk7i96MewqRZf9eN1EhLEem9uhDU5mOF7pbE5tj0G1zlGsCDG1uR0WrY3dIRMPghLEoJR7C_CfkSX-XmPgAFvsIp1DH22pIu2XBmvIHWzJ6sRuVB-wI-QTgen0RcF7Pl34gAHUNAz98GMHnDDkjOTufo9Tadls8vwKlZj-3jAsM86i-Gaccv67q9WS1LZAFGXXHOzvP4zJoVtDt8oe6hxwKl0AWJbxj3mx8NQF-N5mF2whkMmUdCC90rL0-duuqZHm0ypzstM8QNf3QgYXyy4ilP5jsmrOKFOHeyTf_B31IHJu24=s720-no?authuser=0"
          ></img>
        </Col>
        <Col className="image" xs="12" md="9" sm="8" lg="9">
          <h5>Họ và tên: {store.name}</h5>
          <p>Ngày sinh: {dateFormat(store.doB)}</p>
          <p>Ngày vào công ty: {store.startDate}</p>
          <p>Phòng ban: {store.name} </p>
          <p>Số ngày nghỉ còn lại: {store.annualLeave} </p>
          <p>Số ngày đã làm thêm: {store.overTime} </p>
        </Col>
      </Row> */}
    </div>
  );
}
export default Detail;
