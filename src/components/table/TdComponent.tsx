import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import td_th_textAlign from '../../lib/td_th_textAlign';
import { TdType } from '../../types/TableTypes';
import { Td } from '../pdf-elements';

const TdComponent = ({ className, tdData }: { className: string; tdData: TdType }) => {
    if (typeof tdData == 'string') {
        return (
            <Td className={className} text-align={td_th_textAlign(tdData)} key={uuidv4()}>{tdData}</Td>
        )
    } else {
        const className2 = tdData?.className || '';
        const colSpan = tdData?.colSpan || 1;
        const rowSpan = tdData?.rowSpan || 1;
        return (
            <Td colSpan={colSpan} text-align={td_th_textAlign(tdData.value)} rowSpan={rowSpan} className={`${className} ${className2}`} key={uuidv4()}>{tdData.value}</Td>
        )
    }
}

export default TdComponent