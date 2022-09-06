import React from "react";
import {STAFFS} from '../shared/staffs'
import {Row, Col} from 'reactstrap'
function department () {
  
 
    return(
        <div>
      <Row>
              {STAFFS.map((s, idx) => 
              <Col  
              key={idx}
               className="bg-light p-2" 
               xs="6"
                sm="4"
                 lg="2"
                  
                 >
                  
                
                <p className='Name'> {s.department.name} </p>
                 
              </Col>)}
            </Row>
           
        </div>
    )

}

export default department