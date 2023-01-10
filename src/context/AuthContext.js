import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";
import { config } from "../config";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // const [accessToken, setAccessToken] = useState(undefined);
  const [accessToken, setAccessToken] = useState(undefined);
  const [loading, setLoading] = useState(true);

  async function register(data) {
    try {
      const res = await axios.post(`${config.API_URL}/registration`, data);
      console.log(res);
      console.log(res);
      if (res.status !== 201) {
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async function login(email, password) {
    const requestConfig = {
      headers: {
        "X-AUTH-EMAIL": email,
        "X-AUTH-PASSWORD": password,
      },
    };

    try {
      const res = await axios.post(
        `${config.API_URL}/login`,
        {},
        requestConfig
      );
      console.log(res);
      console.log(res.data)
      if (res.status !== 200) {
        return false;
      }
      if (!res.data.accessToken) {
        return false;
      }
      setAccessToken(res.data.accessToken);
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    setAccessToken(false);
  }

  useEffect(() => { }, []);

  const value = {
    accessToken,
    login,
    register,
    logout,
  };

  useEffect(() => {
    console.log(accessToken, 'changed')
  }, [accessToken])

  return (
    <AuthContext.Provider value={value}>
      {/* {!loading && children} */}
      {children}
    </AuthContext.Provider>
  );
}
