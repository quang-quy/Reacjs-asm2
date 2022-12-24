import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";

const DeptDetail = () =>{
    const {deptId} = useParams();
    const staffs = useSelector((state) => state.Staff.staffs);
    console.log({staffs})

    if(!staffs[0]) {
        return (
            <>
                <div>Loading.....</div>
            </>
        )
    }

    const deptStaffs = staffs.filter((staff)=> staff.departmentId === deptId);

    return (
        <>
       
            
            {deptStaffs.map(staff=> (

                <>
                {console.log(staff)}
                     <Row className="tamlongson">
                        <Col className="image" xs="12" md="9" sm="8" lg="3">
                          
                    
                    <img className="inline" src="https://159i.files.wordpress.com/2022/10/public.jpg" alt="" />
                    
                    </Col>
                    <Col className="dpm">
                    <h3>Name: {staff.name}</h3>
                    <p>Ngày sinh {dateFormat(staff.doB)}</p>
                    <p>Số ngày làm thêm {staff.overTime}</p>
                    <p>Số ngày nghỉ còn lại {staff.annualLeave}</p>
                    <p>Bậc Lương {staff.salaryScale}</p>
                    <p>ngày vào công ty {dateFormat(staff.startDate)}</p>
                    <p></p>
                   
                    </Col>
                    </Row>
                </>
            ))}
        </>
    );
}

export default DeptDetail;