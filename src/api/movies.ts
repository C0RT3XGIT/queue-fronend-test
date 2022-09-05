import request from "utils/request";

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
