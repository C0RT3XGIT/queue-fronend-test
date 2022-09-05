import request from "../utils/request";
import { IDirector } from "../types/movies";

export const getDirectors = () => {
  return request({
    url: "/directors",
    method: "get",
  });
};

export const getDirectorDetails = (id: string) => {
  return request({
    url: `/director/${id}`,
    method: "get",
  });
};

export const updateDirectorDetails = (id: string, payload: IDirector) => {
  return request({
    url: `/director/${id}`,
    method: "put",
    data: payload,
  });
};

export const createDirector = (payload: IDirector) => {
  return request({
    url: "/director",
    method: "post",
    data: payload,
  });
};
