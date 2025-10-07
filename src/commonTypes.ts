export type TokensType = {
  accessToken: string;
  refreshToken: string;
};

export type UserType = {
  userId: string;
  name: string;
  email: string;
  nickname: string;
  description: string;
  birthYear?: number;
  city: string;
};
