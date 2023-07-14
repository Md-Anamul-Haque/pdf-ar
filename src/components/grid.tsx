import React from 'react'
import { GridItemProps, gridDataProps, gridTableItemProps, gridTextItemProps, gridTypes } from '../types/gridTypes'
import { windowPdf_Props } from '../types/window-pdf.Types'
import { ImageView } from './image'
import { GridCol, GridContainer, GridRow } from './pdf-elements'
import { TableView } from './table'
const TextOfGrid = ({ item }: { item: gridTextItemProps }) => {
    if (typeof item == 'object') {
        const { colSpan, className, height, rowSpan, width, value, background, color } = item
        return (<GridCol {...{
            colSpan,
            className,
            height,
            rowSpan,
            width,
            background,
            color
        }}>{value}</GridCol>)
    } else {
        return (
            <p>{item}</p>
        )
    }
}
const TableOfGrid = ({ item }: { item: gridTableItemProps }) => {
    const { body, head, beforeThead, classNames, foot, headerLabel, margin, className, colSpan, height, rowSpan, width, background, color } = item
    return (
        <GridCol {...{
            colSpan,
            className,
            height,
            rowSpan,
            width,
            background,
            color
        }}>
            <TableView doc={{
                body,
                head,
                beforeThead,
                classNames,
                foot,
                headerLabel,
                height,
                margin,
                width
            }} />
        </GridCol>
    )
}
const GridView = ({ doc }: { doc: gridTypes }) => {
    return (
        <GridContainer className={doc?.className || ''} >
            {doc?.data?.map((data: gridDataProps) => {
                const items = data?.items || [];
                return (
                    <GridRow className={data?.className} {...{
                        rowGap: data?.rowGap,
                        colGap: data?.colGap,
                        gap: data?.gap,
                        height: data?.height,
                        width: data?.width,
                        background: data?.background,
                        color: data?.color,
                        gridTemplateColumns: data?.gridTemplateColumns,
                        gridTemplateRows: data?.gridTemplateRows
                    }}
                    >

                        {items?.map((item: GridItemProps) => (
                            <>
                                {typeof item == 'object' && item?.type == 'text' && <TextOfGrid item={item} />}
                                {typeof item == 'string' && <TextOfGrid item={item} />}
                                {typeof item == 'object' && item?.type == 'image' && <ImageView doc={{
                                    url: item.url,
                                    className: item?.className,
                                    height: item?.height,
                                    width: item?.width,
                                    x: item?.x,
                                    y: item?.y
                                }} />}
                                {typeof item == 'object' && item?.type == 'table' && <TableOfGrid item={item} />}

                            </>
                        ))}
                    </GridRow>
                )
            })}
        </GridContainer >
    )
}

export default GridView

export const addgrid = (gridData: gridTypes, docs: windowPdf_Props[]) => {
    docs.push({
        type: 'grid',
        doc: gridData,
    });
}
