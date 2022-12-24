import React, { useEffect, useState } from "react";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDepts } from "../features/departmentSlicer";
import { Link } from "react-router-dom";

const deptImgs = [
  "https://wiki.tino.org/wp-content/uploads/2021/07/word-image-653.png",
  "https://i2.wp.com/hr-gazette.com/wp-content/uploads/2018/10/bigstock-Recruitment-Concept-Idea-Of-C-250362193.jpg?fit=1600%2C900&ssl=1",
  "https://media.loveitopcdn.com/22912/ra-1.jpg",
  "https://amis.misa.vn/wp-content/uploads/2022/04/dao-tao.png",
  "https://quixy.com/wp-content/uploads/2020/05/Solutions_Finance_Theme-1.png"
]

function Department() {
  const dispatch = useDispatch();
  const {depts, isLoading} = useSelector(state => ({
    depts: state.depts.departments,
    isLoading: state.depts.isLoading
  }));
  console.log({depts})
  const [Data, setData] = useState([]);
  // useEffect(() => {
  //   //fetch để lấy dữ liệu từ saver về sau đó sử dung
  //   // dạng 2 của uceefffect [],  sẽ chạy sau khi compononent đc render. chỉ chạy 1 lần

  //   // const url = "https://rjs-101x-asignment-04-backend.vercel.app/departments";
  //   // fetch(url)
  //   //   .then((Response) => Response.json())
  //   //   .then((data) => {
  //   //     setData(data);
  //   //   })
  //   //   .catch((err) => console.log(err));
  //   dispatch(getDepts());
      
  // }, []);
  // for(let i = 0; i<Data.length; i++) {

  //     Data[i].img = "https://wiki.tino.org/wp-content/uploads/2021/07/word-image-653.png"
  //     Data[1].img = "https://i2.wp.com/hr-gazette.com/wp-content/uploads/2018/10/bigstock-Recruitment-Concept-Idea-Of-C-250362193.jpg?fit=1600%2C900&ssl=1"
  //     Data[3].img = "https://media.loveitopcdn.com/22912/ra-1.jpg"
  //     Data[2].img = "https://amis.misa.vn/wp-content/uploads/2022/04/dao-tao.png"
  // }

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
      {/* <Row>
        {DEPARTMENTS.map((s, idx) => (
          <Col key={idx} className="p-2 depart" xs="12" sm="5" lg="3">
            <h5 className=""> {s.name} </h5>
            <p className="">Số lượng nhân viên: {s.numberOfStaff} </p>
          </Col>
        ))}
      </Row> */}
      {
        <Row>
          {depts.map((value, idx) => (
            <Col key={idx} className="p-2 depart" xs="12" sm="5" lg="3">
              <p> {value.numberOfStaff} </p>
              <h5> {value.name} </h5>
              <Link to={`/deptDetail/${value.id}`}>
                <img src={deptImgs[idx]} alt="dept pic" />
              </Link>
            </Col>
          ))}
        </Row>
      }
    </div>
  );
}

export default Department;
