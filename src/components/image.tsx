import React from 'react';
import styled from 'styled-components';
import { ImageTypes } from '../types/ImageTypes';
import { windowPdf_Props } from '../types/window-pdf.Types';
const ImageContainer = styled.div`
    margin: 5px;
    margin-top:10px;
`;
export const ImageView = ({ doc }: { doc: ImageTypes }) => {

    const Image = styled.img`
            width:${doc?.width || ''};
            height:${doc?.height || ''};
            margin-top: ${doc?.y || ''};
            margin-left:${doc?.y || ''};
        `
    return (
        <ImageContainer>
            <Image className={doc?.className || ''} src={doc.url} alt="prettyPDF-PRINTING" />
        </ImageContainer>
    )
}


export const addImage = (imgData: ImageTypes, docs: windowPdf_Props[]) => {
    docs.push({
        type: 'image',
        doc: imgData,
    });
}
