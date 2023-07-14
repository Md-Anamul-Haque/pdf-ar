import { ImageTypes } from "./ImageTypes";
import { TableTypes } from "./TableTypes";

export type gridImageItemProps = {
    type: "image";
    rowSpan?: number;
    colSpan?: number;
} & ImageTypes;

export type gridTableItemProps = {
    type: "table";
    className?: string;
    height?: string;
    width?: string;
    background?: string;
    color?: string;
    rowSpan?: number;
    colSpan?: number;
} & TableTypes;

export type gridTextItemProps = {
    type?: "text";
    className?: string;
    height?: string;
    width?: string;
    background?: string;
    color?: string;
    rowSpan?: number;
    colSpan?: number;
    value: string;
} | string | number;


export type GridItemProps = gridImageItemProps | gridTableItemProps | gridTextItemProps;
export type gridDataProps = {
    items: GridItemProps[];
    rowGap?: number;
    colGap?: number;
    gap?: number;
    className?: string;
    height?: string;
    width?: string;
    background?: string;
    color?: string;
    gridTemplateColumns?: number | string;
    gridTemplateRows?: number | string;
};
export interface gridTypes {
    rowGap?: number;
    className?: string;
    data: gridDataProps[];
}
