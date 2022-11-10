import axios from "axios";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(undefined);
  const [loading, setLoading] = useState(true);

  async function register(data) {
    try {
      const res = await axios.post(`${config.API_URL}/registration`, data);
      console.log(res);
      return res;
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
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
