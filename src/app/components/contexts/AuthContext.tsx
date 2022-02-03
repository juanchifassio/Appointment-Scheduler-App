import { createContext, useContext, useState, useEffect, FC } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  logout: () => void;
  currentUser: any;
  users: object;
}

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext) as AuthContextType;

export const AuthContextProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [users, setUsers] = useState<any>();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);

      const starCountRef = ref(getDatabase(), "users/" + currentUser?.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setUsers(data);
      });
    });
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  const value = {
    currentUser,
    logout,
    users,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
