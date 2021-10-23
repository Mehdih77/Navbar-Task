import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Error in AuthContext");
  }
  return context;
};

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const hanldeAuth = () => {
    setAuth(!auth);
  }

  return (
    <AuthContext.Provider value={[auth, hanldeAuth]}>
      {children}
    </AuthContext.Provider>
  );
}
