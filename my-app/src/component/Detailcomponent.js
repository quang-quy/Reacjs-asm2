import React from "react";
import {useParams} from "react-router-dom"
import { STAFFS } from "../shared/staffs";
function Detail () {
    const {StaffID}  = useParams(); 

  let staff = STAFFS[StaffID]
  console.log(staff)
  const listStaff = STAFFS.filter((listStaff) => {
    return listStaff.id === staff 
  })
  console.log(listStaff)
  const convernt = listStaff[0]

    return(
        <div>
            <h1>Death is like the wind</h1>
            <p>Name: {}</p>
        </div>
    )
}
export default Detail