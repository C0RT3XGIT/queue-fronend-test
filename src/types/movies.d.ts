interface IDirector {
  first_name: string;
  last_name: string;
}

export interface IMovie {
  _id: string;
  name: string;
  release_year: number;
}

export interface IMovieDetailed extends IMovie {
  director: IDirector;
}
