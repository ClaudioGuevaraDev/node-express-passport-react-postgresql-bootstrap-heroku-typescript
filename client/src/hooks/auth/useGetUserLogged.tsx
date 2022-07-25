import axios from "axios";
import { useEffect, useState } from "react";
import { IUserLogged } from "../../interfaces/userLogged";

export default function useGetUserLogged() {
  const [userLogged, setUserLogged] = useState<IUserLogged>({
    email: "",
    username: "",
    logged: false,
  });

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/auth/get-user", {
        withCredentials: true,
      });

      setUserLogged({
        email: response.data.user.email,
        username: response.data.user.username,
        logged: true,
      });
    } catch (error) {
      setUserLogged({
        email: "",
        username: "",
        logged: false,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    userLogged,
  };
}
