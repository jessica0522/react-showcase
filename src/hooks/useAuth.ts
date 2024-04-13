import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { User, setUser } from "../state/authState/authSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // check user auth state
    const unSubscribe = onAuthStateChanged(getAuth(), async (currentUser) => {
      let user: User = {};
      if (currentUser && currentUser.email) {
        user.email = currentUser.email;
        user.token = await currentUser.getIdToken();
      }
      dispatch(setUser(user));
    });

    return unSubscribe;
  }, [dispatch]);
};

export default useAuth;
