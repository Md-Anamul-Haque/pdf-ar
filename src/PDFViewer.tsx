import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { windowPDF_dataProps } from './App'
import ComponentHeader from './components/ComponentHeader/index.tsx'
import GridView from './components/grid'
import { ImageView } from './components/image'
import NewPage from "./components/newPage"
import { Table, Tbody, Td, Th, Thead, Tr } from './components/pdf-elements'
import { TableView } from './components/table'
import { TextView } from './components/text'
import { windowPdf_Props } from "./types/window-pdf.Types"

// interface viewProps{ docs: windowPDF_dataProps, width?: string; height?: string; }
export interface viewProps
    extends React.TableHTMLAttributes<HTMLTableElement> {
    //   asChild?: boolean;
    //   status?: statusType
    docs: windowPDF_dataProps;
    width?: string;
    height?: string;
    margin?: string;
}
export const PDFViewer: FC<viewProps> = ({ docs, margin, width, height, ...props }: viewProps) => {
    return (
        <Table  {...{ width, height, margin, props }}>
            {docs?.head && (
                <Thead>
                    <Tr>
                        <Th>
                            <ComponentHeader titles={docs.head} />
                        </Th>
                    </Tr>
                </Thead>
            )}
            <Tbody>
                <Tr>
                    {/* @ts-ignore */}
                    <Td colSpan={'100%'}>
                        {
                            // @ts-ignore
                            docs?.body && docs.body.map((doc: windowPdf_Props) => {
                                if (doc.type == 'text') {
                                    return (
                                        // @ts-ignore
                                        <TextView key={uuidv4()} doc={doc.doc} />
                                    )
                                } else if (doc.type == 'image') {
                                    return (
                                        // @ts-ignore
                                        <ImageView key={uuidv4()} doc={doc.doc} />
                                    )
                                } else if (doc.type == 'table') {
                                    return (
                                        // @ts-ignore
                                        <TableView key={uuidv4()} doc={doc.doc} />
                                    )
                                } else if (doc.type == 'grid') {
                                    return (
                                        // @ts-ignore
                                        <GridView key={uuidv4()} doc={doc.doc} />
                                    )
                                } else if (doc.type == 'new-page') {
                                    return (
                                        <NewPage key={uuidv4()} />
                                    )
                                }
                            })
                        }
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    )
}

