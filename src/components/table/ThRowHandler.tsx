import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import td_th_textAlign from "../../lib/td_th_textAlign";
import { TdType, ThType } from "../../types/TableTypes";
import { Tr } from "../pdf-elements";
import TableContext from "./TableContext";
import ThComponent from "./ThComponent";
const ThRowHandler = () => {
    const { table } = useContext(TableContext)
    if (table == undefined) {
        return (
            <></>
        )
    }
    const { head, body, classNames, beforeThead } = table;

    const body0: TdType[] = body?.[0] || []
    const getAlign = (thData: ThType) => {
        const headConls = head.map(h => typeof h == 'object' ? h.value : h)
        const tdValue: string | number = typeof thData == 'object' ? thData.value : thData
        const idof = headConls.indexOf(tdValue);
        if (idof == -1) {
            return ''
        } else {
            return td_th_textAlign(body0[idof])
        }
    }
    return (
        <>
            {
                beforeThead && <Tr className={classNames?.beforeThead || ''}>
                    {beforeThead.map((thData: ThType) => (
                        <ThComponent textAlign={getAlign(thData)} className={classNames?.thead_th || ''} key={uuidv4()} thData={thData} />
                    ))}
                </Tr>
            }
            {
                head && <Tr className={classNames?.thead_tr || ''}>
                    {head.map((thData: ThType) => (
                        <ThComponent textAlign={getAlign(thData)} className={classNames?.thead_th || ''} key={uuidv4()} thData={thData} />
                    ))
                    }
                </Tr>
            }
        </>

    )
}

export default ThRowHandler