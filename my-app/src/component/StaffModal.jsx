import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";
import { addStaff, updateStaff } from "../features/addStaffslice";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
  } from "reactstrap";

const StaffModal = ({staffs, staff, isUpdate, text}) => {
    const dispatch = useDispatch();

    const action = isUpdate ? updateStaff : addStaff; 

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = (
      <button className="close" onClick={toggle} type="button">
        &times;
      </button>
    );
    const formik = useFormik({
        initialValues: isUpdate ? {
          id: staff.id,
          name: staff.name,
          doB: dateFormat(staff.doB, "yyyy-mm-dd"),
          startDate: dateFormat(staff.startDate, "yyyy-mm-dd"),
          departmentId: staff.departmentId,
          salaryScale: staff.salaryScale,
          annualLeave: staff.annualLeave,
          overTime: staff.overTime,
        } : {
            id: 0,
            name: "",
            doB: "",
            startDate: "",
            departmentId: "Dept01",
            salaryScale: 0,
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
          doB: Yup.date()
            .max(new Date(), "ngày nhập vào không được lớn hơn ngày hiện tại")
            .required("Yêu cầu nhập"),
          departmentId: Yup.string().required("vui lòng nhập phòng ban của bạn"),
          salaryScale: Yup.string()
            .max(8, "tên không được quá 8 kí tự")
            .required("Vui lòng nhập chính xác hệ số lương của bạn"),
          annualLeave: Yup.string()
            .max(8, "tên không được quá 8 kí tự")
            .required("Vui lòng nhập số ngày nghỉ còn lại"),
          overTime: Yup.string()
            .max(8, "tên không được quá 8 kí tự")
            .required("Vui lòng nhập số ngày đã làm thêm"),
        }),
        onSubmit: (values, { resetForm }) => {
          values.id = isUpdate ? staff.id : staffs[staffs.length - 1]?.id + 1;
          dispatch(action(values));
          toggle();
          resetForm();
        },
      });
    return (
        <div>
          <Button color="danger" onClick={toggle}>
            {text}
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} close={closeBtn}>
            {text}
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
                    id="doB"
                    name="doB"
                    value={formik.values.doB}
                  ></input>
                  {formik.touched.doB && formik.errors.doB ? (
                    <p className="errors"> {formik.errors.doB} </p>
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
                    id="departmentId"
                    name="departmentId"
                    defaultValue={formik.values.departmentId}
                    onChange={formik.handleChange}
                  >
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">Hr</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">It</option>
                    <option value="Dept05">Finance</option>
                  </select>
                  <label>hệ số lương</label>
                  <input
                    type="number"
                    id="salaryScale"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    name="salaryScale"
                    value={formik.values.salaryScale}
                  ></input>
                  {formik.touched.salaryScale && formik.errors.salaryScale ? (
                    <p className="errors"> {formik.errors.salaryScale} </p>
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
              Accept
                  </Button>
                  <Button className="cancel" color="secondary" onClick={toggle}>
                    Hủy
                  </Button>
                </form>
              </div>
            </ModalBody>
          </Modal>
        </div>
    )
}

export default StaffModal;