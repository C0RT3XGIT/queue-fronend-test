import request from "utils/request";
import { IMovie, IMovieCreate } from "types/movies";

export const getMovies = () => {
  return request({
    url: "/movies",
    method: "get",
  });
};

export const getMovieDetails = (id: string) => {
  return request({
    url: `/movies/${id}`,
    method: "get",
  });
};

export const updateMovieDetails = (id: string, payload: IMovieCreate) => {
  return request({
    url: `/movie/${id}`,
    method: "put",
    data: payload,
  });
};

export const createMovie = (payload: IMovieCreate) => {
  return request({
    url: "/movie",
    method: "post",
    data: payload,
  });
};
