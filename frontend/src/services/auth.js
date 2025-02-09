import API from "./api";

export const login = async (credentials) => {
  const response = await API.post("/auth/login", credentials);
  return response.data;
};

export const logout = async () => {
  await API.post("/auth/logout");
};
