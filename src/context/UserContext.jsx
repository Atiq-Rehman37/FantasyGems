import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Load from localStorage on first render
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save users whenever it changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save current user whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // Register a new user
  const registerUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  // Login check
  const loginUser = (loginData) => {
    const foundUser = users.find((u) => {
      return (
        u.userpassword === loginData.userpassword &&
        ((loginData.useremail && u.useremail === loginData.useremail) ||
          (loginData.usernumber && u.usernumber === loginData.usernumber))
      );
    });

    if (foundUser) {
      setCurrentUser(foundUser);
      return true; // success
    } else {
      return false; // failed
    }
  };

  // Logout
  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ users, currentUser, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
