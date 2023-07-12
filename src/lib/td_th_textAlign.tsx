import { TdType, ThType } from "../types/TableTypes"

const td_th_textAlign = (value: TdType | ThType) => {
    if (typeof value == 'object') {
        return value.value ? 'right' : ''
    }
    return value ? 'right' : ''
}

export default td_th_textAlign