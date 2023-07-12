import { TdType, ThType } from "../types/TableTypes"

const td_th_textAlign = (value: TdType | ThType) => {
    if (typeof value == 'object') {
        return typeof value.value === 'number' ? 'right' : ''
    }
    return typeof value === 'number' ? 'right' : ''
}

export default td_th_textAlign