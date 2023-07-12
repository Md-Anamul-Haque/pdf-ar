import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Th } from '../../components/pdf-elements';
import td_th_textAlign from '../../lib/td_th_textAlign';
import { ThType } from '../../types/TableTypes';
const ThComponent = ({ className, thData, textAlign }: { className: string; thData: ThType, textAlign?: string }) => {
    if (typeof thData == 'object') {
        const className2 = thData?.className || '';
        const colSpan = thData?.colSpan || 1;
        const rowSpan = thData?.rowSpan || 1;
        return (
            <Th text-align={textAlign || td_th_textAlign(thData)} colSpan={colSpan} rowSpan={rowSpan} className={`${className} ${className2}`} key={uuidv4()}>{thData.value}</Th>
        )

    } else {
        return (
            <Th text-align={textAlign || td_th_textAlign(thData)} className={className} key={uuidv4()}>{thData}</Th>
        )
    }
}

export default ThComponent