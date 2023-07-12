import { createContext } from "react";
import { TableTypes } from "../../types/TableTypes";

const TableContext = createContext<{
    table?: TableTypes
}>({})

export default TableContext