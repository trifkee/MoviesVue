import axiosInstance from "../instances/axiosInstance";

export const requestUserToken = () => {
  return axiosInstance.get("/authentication/token/new");
};

export const signInUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axiosInstance.get(`/authentication/token/validate_with_login`, {
    params: {
      email,
      password,
    },
  });
};
