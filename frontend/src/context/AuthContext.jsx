import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check login on refresh using cookie
      useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await API.get("/auth/me");
            setUser(res.data);
            // console.log(res.data)
          } catch (err) {
            setUser(null);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUser();
      }, []);

  const login = async (formData) => {
    const res = await API.post("/auth/login", formData);
    setUser(res.data);
  };

  const logout = async () => {
    await API.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);