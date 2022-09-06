import React from "react";
import {STAFFS,DEPARTMENTS} from '../shared/staffs'
import {Row, Col} from 'reactstrap'
function department () {
  
 
    return(
        <div>
      <Row>
      
              {DEPARTMENTS.map((s, idx) => 
              <Col  
              key={idx}
               className="p-2 depart" 
               xs="12"
                sm="5"
                 lg="3"
                
                  
                 >
                  
                  <h5 className=''> {s.name} </h5>
                <p className=''>Số lượng nhân viên: {s.numberOfStaff} </p>
               
                
                
                 
              </Col>)}
              
            </Row>
           
        </div>
    )

}

export default department