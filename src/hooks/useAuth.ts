import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { User, setUser } from "../state/authState/authSlice";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // check user auth state
    const unSubscribe = onAuthStateChanged(getAuth(), (currentUser) => {
      console.log("user", currentUser);
      let user: User = {};
      if (currentUser && currentUser.email) {
        user.email = currentUser.email;
      }
      dispatch(setUser(user));
    });

    return unSubscribe;
  }, [dispatch]);
};

const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(getAuth(), email, password);
  } catch (error) {
    console.log("error", error);
  }
};

export default useAuth;
export { signIn };
