declare namespace Express {
  export interface Request {
    user_data: {
      id: string;
      admin: boolean;
    };
  }
}
