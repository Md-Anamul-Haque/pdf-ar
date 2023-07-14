import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GridItemProps, gridDataProps, gridImageItemProps, gridTableItemProps, gridTextItemProps, gridTypes } from '../types/gridTypes'
import { windowPdf_Props } from '../types/window-pdf.Types'
import { ImageView } from './image'
import { GridCol, GridContainer, GridRow } from './pdf-elements'
import { TableView } from './table'
const TextOfGrid = ({ item }: { item: gridTextItemProps }) => {
    if (typeof item == 'object') {
        const { colSpan, className, height, rowSpan, width, value, background, color } = item
        return (<GridCol {...{
            colSpan,
            className: `text-of-grid ${className}`,
            height,
            rowSpan,
            width,
            background,
            color
        }}>{value}</GridCol>)
    } else {
        return (
            <p className='text-of-grid'>{item}</p>
        )
    }
}
const ImageOfGrid = ({ item }: { item: gridImageItemProps }) => {
    const { colSpan, className, height, rowSpan, width } = item
    return (
        <ImageView key={uuidv4()} doc={{
            url: item.url,
            className: `image-of-grid ${className}`,
            height,
            width,
            x: item?.x,
            y: item?.y,
            colSpan,
            rowSpan,
        }} />)
}
const TableOfGrid = ({ item }: { item: gridTableItemProps }) => {
    const { body, head, beforeThead, classNames, foot, headerLabel, margin, className, colSpan, height, rowSpan, width, background, color } = item
    return (
        <GridCol {...{
            colSpan,
            className: `table-of-grid ${className}`,
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
        <GridContainer className={`grid-of-container ${doc?.className}` || ''} >
            {doc?.data?.map((data: gridDataProps) => {
                const items = data?.items || [];
                return (
                    <GridRow key={uuidv4()} className={`grid-of-row ${data?.className}`} {...{
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

                        {/* {items?.map((item: GridItemProps) => (
                            <>
                                {typeof item == 'object' && item?.type == 'text' && <TextOfGrid key={uuidv4()} item={item} />}
                                {(typeof item == 'string' || typeof item == 'number') && <TextOfGrid key={uuidv4()} item={item} />}
                                {typeof item == 'object' && item?.type == 'image' && <ImageView key={uuidv4()} doc={{
                                    url: item.url,
                                    className: `image-of-grid ${item?.className}`,
                                    height: item?.height,
                                    width: item?.width,
                                    x: item?.x,
                                    y: item?.y
                                }} />}
                                {typeof item == 'object' && item?.type == 'table' && <TableOfGrid item={item} />}

                            </>
                        ))} */}

                        {
                            items?.map((item: GridItemProps) => {
                                if (typeof item == 'object') {
                                    if (item?.type == 'image') {
                                        return (<ImageOfGrid key={uuidv4()} item={item} />)
                                    } else if (item?.type == 'table') {
                                        return (<TableOfGrid key={uuidv4()} item={item} />)
                                    } else {
                                        return (<TextOfGrid key={uuidv4()} item={item} />)
                                    }
                                } else {
                                    return (<TextOfGrid key={uuidv4()} item={item} />)
                                }
                            })
                        }
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
