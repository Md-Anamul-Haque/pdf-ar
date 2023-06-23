import React from "react";
import { TextTypes } from "../types/TextTypes";
import { windowPdf_Props } from "../types/window-pdf.Types";

export const TextView = ({ doc }: { doc: TextTypes }) => {
    if (typeof doc == 'string') {
        return (
            <p>{doc}</p>
        )
    } else {
        return (
            <p className={doc?.className || ''}> {doc.text}</p>
        )
    }
}

export const addText = (doc: TextTypes, docs: windowPdf_Props[]) => {
    docs.push({
        type: 'text',
        doc,
    });
}

