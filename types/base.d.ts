export interface MongooseBase {
  _id: ObjectId;
  __v: number;
}

export interface JwtBase {
  iat: number;
  exp: number;
}

export interface UserJwtPayload {
  jti: string;
  iat: number;
}

export interface ObjectBase<T> {
  [key: string]: T;
}

export type ChildrenProps = {
  children: React.ReactNode;
};
