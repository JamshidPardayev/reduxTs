export interface IPosts {
  id: number;
  title: string;
  body: string;
}

export interface IComments {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IAlbums {
  id: number;
  title: string;
}

export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
