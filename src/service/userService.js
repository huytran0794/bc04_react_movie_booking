import { USER_AXIOS_INSTANCE as AXIOS_INSTANCE } from "./configURL";

const USER_SERVICE = {
  getAllMovie: (data) =>
    AXIOS_INSTANCE.post(`/https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`, data),
};

export default USER_SERVICE;
