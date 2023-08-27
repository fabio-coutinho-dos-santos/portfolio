
export interface IUserLogin {
  email: string;
  password: string
}

export class UserLogin<IUserLogin> {
  constructor(
    public email: string,
    public password: string
  ){}
}