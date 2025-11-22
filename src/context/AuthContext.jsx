import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const login = (email, password) => {
    const account = accounts.find(a => a.email === email && a.password === password);
    if (account) {
      setUser(account);
      return true;
    }
    return false;
  };

  const signup = (data) => {
    const exists = accounts.some(a => a.email === data.email);
    if (exists) return false;

    setAccounts([...accounts, data]);
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
