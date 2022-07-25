import axios from "axios";
import { useEffect } from "react";

export default function useGetUserLogged() {
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/auth/get-user", {
        withCredentials: true,
      });
      console.log(response.data.user);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return {};
}
