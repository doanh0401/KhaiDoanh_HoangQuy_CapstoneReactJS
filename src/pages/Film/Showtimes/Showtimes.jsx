import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Checkbox,
  DatePicker,
  InputNumber,
  Select,
} from "antd";

import { cinemaService } from "../../../services/cinema";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { ticketService } from "../../../services/tickect";
import moment from "moment";
import * as Yup from "yup";

export default function Showtimes() {
  const { id } = useParams();
  const {tenphim} = useParams();
  const TaoLichChieu = Yup.object().shape({
    ngayChieuGioChieu:Yup.string().required("Ngày chiếu, giờ chiếu không được để trống!"),
    maRap:Yup.string().required("Hệ thống rạp và cụm rạp không được để trống!"),
    giaVe:Yup.number().required("Giá vé không được để trống!").min(75000,"Giá vé phải lớn hơn 75000").max(150000,"Giá vé phải nhỏ hơn 150000"),
  })
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    validationSchema:TaoLichChieu,
    onSubmit: async(values) => {
      console.log(values);
      try{
        const result = await ticketService.taoLichChieuApi(values)
        alert("Thêm lịch chiếu thành công!")
      }
      catch(errors){
        console.log(errors.response?.data);
      }
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
  console.log(state.heThongRapChieu);
  console.log(state.cumRapChieu);
  const fetchCinemaDetail = async () => {
    try {
      const result = await cinemaService.layThongTinHeThongRapApi();
      setState({ ...state, heThongRapChieu: result.data.content });
    } catch (errors) {
      console.log("errors", errors);
    }
  };

  useEffect(() => {
    fetchCinemaDetail();
  }, []);
  const handleChangeHeThongRap = async (value) => {
    try {
      const result = await cinemaService.layThongTimCumRapApi(value);
      setState({ ...state, cumRapChieu: result.data.content });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
  const handleChangeCumRap = async (value) => {
    formik.setFieldValue("maRap", value);
  };
  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onchangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onchangeInputNumber = (values) => {
    formik.setFieldValue("giaVe", values);
  };
  const converseSelectHTR = () => {
    return state.heThongRapChieu?.map((htr, idx) => ({
      label: htr.tenHeThongRap,
      value: htr.maHeThongRap,
    }));
  };
  let film ={};
  if(localStorage.getItem('filmParams')){
    film = JSON.parse(localStorage.getItem('filmParams'));
  }
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h3 style={{ fontSize: "24" }}>Tạo lịch chiếu - {tenphim}</h3>
      <img src={film.hinhAnh} alt="" width={300} height={200}/>
      <Form.Item label="Hệ thống rạp">
        <Select
          options={converseSelectHTR()}
          onChange={handleChangeHeThongRap}
          placeholder="Chọn hệ thống rạp"
        />
        {formik.errors.maRap && formik.touched.maRap && (
            <span className='form-label text-danger'>{formik.errors.maRap}</span>
          )}
      </Form.Item>
      <Form.Item label="Cụm rạp">
        <Select
          options={state.cumRapChieu?.map((cumRap, idx) => ({
            label: cumRap.tenCumRap,
            value: cumRap.maCumRap,
          }))}
          onChange={handleChangeCumRap}
          placeholder="Cụm rạp"
        />
        {formik.errors.maRap && formik.touched.maRap && (
            <span className='form-label text-danger'>{formik.errors.maRap}</span>
          )}
      </Form.Item>
      <Form.Item label="Ngày chiếu giờ chiếu">
        <DatePicker
          format={"DD/MM/YYYY hh:mm:ss"}
          showTime
          onChange={onchangeDate}
          onOk={onOk}
        ></DatePicker>
        {formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu && (
            <span className='form-label text-danger'>{formik.errors.ngayChieuGioChieu}</span>
          )}
      </Form.Item>
      <Form.Item label="Giá vé">
        <InputNumber min={75000} max={150000} onChange={onchangeInputNumber} />
        {formik.errors.giaVe && formik.touched.giaVe && (
            <span className='form-label text-danger'>{formik.errors.giaVe}</span>
          )}
      </Form.Item>
      <Form.Item label="Chức năng">
        <Button htmlType="submit">Tạo lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
}
