import axios from "axios";

export const dummyApiIoRequest = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: {
    // https://dummyapi.io 에서 키 발급 필요
    "app-id": process.env.NEXT_PUBLIC_DUMMY_API_APP_ID,
  },
});

type PagingDummyType = {
  limit?: string;
  page?: string;
};

export const dummyApiIoApi = {
  getUser: (params?: PagingDummyType) => {
    const url = "/user";
    const queryStr = params ? "?" + new URLSearchParams(params).toString() : "";
    return dummyApiIoRequest.get(`${url}${queryStr}`);
  },
};
