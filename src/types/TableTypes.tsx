import { headerLabelProps } from "./ComponentHeader_Label.Types";


export type ThType = (string | {
    colSpan?: number;
    rowSpan?: number;
    className?: string;
    value: string;
})

export type TdType = (string | {
    colSpan?: number;
    rowSpan?: number;
    className?: string;
    value: string;
})
export type TrType = (string | {
    colSpan?: number;
    rowSpan?: number;
    className?: string;
    value: string;
})[]

export type beforeTheadType = ThType[]
export type TheadType = ThType[]
export type TbodyTypes = TdType[][];
export type TfootType = TdType[];
export interface TypesClassNamesOfTable {
    table?: string;
    headerLabel?: string;
    beforeThead?: string;
    thead?: string;
    thead_tr?: string;
    thead_th?: string;
    tbody?: string;
    tbody_tr?: string;
    tbody_td?: string;
    tfoot?: string;
    tfoot_tr?: string;
    tfoot_td?: string;
}
export interface TableTypes {
    headerLabel?: headerLabelProps;
    beforeThead?: beforeTheadType;
    head: TheadType;
    body: TbodyTypes;
    foot?: TfootType;
    width?: string;
    height?: string;
    margin?: string;
    classNames?: TypesClassNamesOfTable
}


