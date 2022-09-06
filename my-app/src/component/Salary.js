import React from "react";
import {STAFFS} from '../shared/staffs'
import {Row, Col} from 'reactstrap'
function salary() {
  
     
    return(
        <div>
            <Row>
           {STAFFS.map((index, luong) =>
           <Col key={luong}
           className="p-2  depart" 
           md="4"
           xs="12"
            sm="4"
             lg="3"
           >
<h5> {index.name} </h5>
<p>Mã nhân viên: {index.id} </p>
<p>Hệ số lương: {index.salaryScale} </p>
<p>Số ngày làm thêm {index.overTime} </p>
<p>Lương: {index.salaryScale * 3000000 + index.overTime*200000} </p>

           </Col>
           )} 
           </Row>
        </div>
    )
}
export default salary