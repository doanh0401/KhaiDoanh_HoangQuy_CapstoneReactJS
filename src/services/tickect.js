import { request } from "../configs/api";


class TicketService {
  fetchTicketDetailApi(id) {
    return request({
      url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
    });
  }
  
  bookTicket(data) {
    return request({
      url: `/QuanLyDatVe/DatVe`,
      method: "POST",
      data,
    })
  }
  taoLichChieuApi(thongTinLichChieu){
    return request({
      url:`/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: thongTinLichChieu,
    })
  }
}
  
export const ticketService = new TicketService();
