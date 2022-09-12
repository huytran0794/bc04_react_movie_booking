import { MOVIE_AXIOS_INSTANCE as AXIOS_INSTANCE } from "./configURL";

const MOVIE_SERVICE = {
  getAllMovie: (groupId) =>
    AXIOS_INSTANCE.get(`/LayDanhSachPhim?maNhom=${groupId}`),
};

export default MOVIE_SERVICE;
