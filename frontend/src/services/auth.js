import API from "./api";


export const signup = async (formData) => {
  const response = await API.post("v1/users/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return response.data;
};


export const login = async (credentials) => {
  const response = await API.post("v1/users/login", credentials, {
    withCredentials: true, 
  });
  return response.data;
};


export const logout = async () => {
  await API.post("v1/users/logout", {}, { withCredentials: true });
};
