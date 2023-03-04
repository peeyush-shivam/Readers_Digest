import booksContext from "../context/context";
import { useContext } from "react";

function useContextHook() {
    return useContext(booksContext);
}

export default useContextHook;