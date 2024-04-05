import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { selectUser } from "../../../state/selectors";
// import { setLoading } from "../../../state/mainState/mainSlice";

const useTable = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const tableClasses = {
    header:
      "px-4 py-4 text-left text-xs font-semibold text-gray-600 capitalize border border-gray-200",
    cell: "px-4 py-4 whitespace-nowrap border border-gray-200",
  };

  const ableToDelete = (author: string) => author === user.email;

  return {
    tableClasses,
    ableToDelete,
    dispatch,
  };
};

export default useTable;
