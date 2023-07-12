import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Table, Tbody, Th, Thead, Tr } from '../../components/pdf-elements';
import { TableTypes, TdType, TrType } from '../../types/TableTypes';
import { windowPdf_Props } from '../../types/window-pdf.Types';
import ComponentHeader from '../ComponentHeader/index.tsx';
import TableContext from './TableContext';
import TdComponent from './TdComponent';
import ThRowHandler from './ThRowHandler';
export const TableView = ({ doc }: { doc: TableTypes }) => {
    const { body, classNames, width, height, margin, headerLabel } = doc;
    return (
        <TableContext.Provider value={{ table: doc }}>
            <Table {...{ height, width, margin }} className={classNames?.table || ''}>
                <Thead className={classNames?.thead || ''} >
                    {headerLabel && (
                        <Tr>
                            {/* @ts-ignore */}
                            <Th colSpan={'100%'}>
                                {/* this componentheader use multiple page so not work useing context */}
                                <ComponentHeader className={classNames?.headerLabel || ''} titles={headerLabel} />
                            </Th>
                        </Tr>
                    )}
                    <ThRowHandler />
                </Thead>
                <Tbody className={classNames?.tbody || ''}>
                    {body && body.map((trData: TrType) => (
                        <Tr className={classNames?.tbody_tr || ''} key={uuidv4()}>{
                            trData.map((tdData: TdType) => (
                                <TdComponent key={uuidv4()} className={classNames?.tbody_td || ''} tdData={tdData} />
                            ))
                        }</Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContext.Provider>
    )
}

export const addTable = (table: TableTypes, docs: windowPdf_Props[]) => {
    docs.push({
        type: 'table',
        doc: table
    });
}
