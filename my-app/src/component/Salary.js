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
<img src="https://lh3.googleusercontent.com/ANJjOntqq2ZrXhazhmcX4cf1ahh-e7Qmt4o04FhGjJXFqT7daRhV5HJGV8k7D9Yjldlwz4zZHKntFUjnCepgXSVhkeONU6rNZmUWBVs6pdGxdn_XaqUxA1CV6vra9BhswDcDPHKN6cwEWCkSUBXQDvMTgyAfDcD0uPQbx8w_SIAGFyzetwE2ZKf9hAieAZC3QTI-3-wGMJZZNpJfh2eZzQRCJwq6YuyXs92NQzWhG0U7npTONpeZ0Ky0Pr-9hH8y0em5intGcjHBoJ27JpA54wtH28A8iurnGlCaD_HGxkxYFsIxyfbTmxenSvF6eUgyn4AiA_Dkb6EtbS5hNe83pws84vSIlBZzm_QJG9D27oR8In-S65Ov5kpUEpUOmqCGfaJPmVM23G6kApsp1XA7F9hn8IDwXXZqEcwuQCjTe3DhiUz58sIu27aemRJLY_Wj511jFbBRbNlGrehUfVODWgrmoSkI61F6STaBXSqgSNzl47riKD-B9HsTrzmWrX-_JeM1EGZBiVGA_lxA8i34fb0nA4fBwPHOSByAaJRtuTrC8fZMXXxyySXsU9Rs7zbjioa-4dFUILxOlGFdNr-kAdbrFoS4pJ0bxCLF7HFuTytT_Rkf-DI6BUEkk7i96MewqRZf9eN1EhLEem9uhDU5mOF7pbE5tj0G1zlGsCDG1uR0WrY3dIRMPghLEoJR7C_CfkSX-XmPgAFvsIp1DH22pIu2XBmvIHWzJ6sRuVB-wI-QTgen0RcF7Pl34gAHUNAz98GMHnDDkjOTufo9Tadls8vwKlZj-3jAsM86i-Gaccv67q9WS1LZAFGXXHOzvP4zJoVtDt8oe6hxwKl0AWJbxj3mx8NQF-N5mF2whkMmUdCC90rL0-duuqZHm0ypzstM8QNf3QgYXyy4ilP5jsmrOKFOHeyTf_B31IHJu24=s720-no?authuser=0"></img>
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