import React from "react";
import { v4 as uuidv4 } from "uuid";
import td_th_textAlign from "../../lib/td_th_textAlign";
import { TbodyTypes, TdType, ThType, TheadType, TypesClassNamesOfTable, beforeTheadType } from "../../types/TableTypes";
import { Tr } from "../pdf-elements";
import ThComponent from "./ThComponent";
const ThRowHandler = ({ head, body, classNames, beforeThead }: { head: TheadType; body: TbodyTypes; classNames?: TypesClassNamesOfTable; beforeThead?: beforeTheadType }) => {
    const body0: TdType[] = body?.[0] || []
    const getAlign = (thData: ThType) => {
        const headConls = head.map(h => typeof h == 'object' ? h.value : h)
        const str: string = String(typeof thData == 'object' ? thData.value : thData)
        const idof = headConls.indexOf(str);
        console.log({ headConls, str })
        if (idof == -1) {
            return ''
        } else {
            return td_th_textAlign(String(body0[idof]))
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