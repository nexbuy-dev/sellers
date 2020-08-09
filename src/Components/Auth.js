import React, { useEffect, useState } from "react";
import service from "../Firebase/Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    service.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div>
        <div className="preloader">
          <div className="loader">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AuthContext.Provider
        value={{
          currentUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
