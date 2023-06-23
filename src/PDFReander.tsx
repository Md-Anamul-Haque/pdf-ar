import { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { v4 as uuidv4 } from 'uuid'
import ComponentHeader from './components/ComponentHeader/index.tsx'
import { ImageView } from './components/image'
import NewPage from "./components/newPage"
import { Table, Tbody, Td, Th, Thead, Tr } from './components/pdf-elements'
import { TableView } from './components/table'
import { TextView } from './components/text'
// import { windowPDF_dataProps } from './pdf'
// import { windowPdf_Props } from "./types/window-pdf.Types"
import React from 'react'
import { windowPDF_dataProps } from './App'
import { windowPdf_Props } from './types/window-pdf.Types'

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
const PDFReander = ({ docs, margin, width, height, ...props }: viewProps) => {


    const PdfPage = () => {
        const TableRef = useRef(null)
        return (
            <Table ref={TableRef} {...{ width, height, margin, props }}>
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
    const node = document.createElement("div");
    node.setAttribute("id", "WindwoPDFReander");
    // document.documentElement.appendChild(node);
    // ReactDOM.createRoot(document.getElementById('WindwoPDFReander') as HTMLElement).render(
    //     <PdfPage />
    // )
    try {
        const WindwoPDFReander = document.getElementById('WindwoPDFReander')
        WindwoPDFReander?.remove()
    } catch (error) {

    }
    ReactDOM.createRoot(node as HTMLElement).render(
        <PdfPage />
    )
    document.documentElement.appendChild(node);

}

export default PDFReander