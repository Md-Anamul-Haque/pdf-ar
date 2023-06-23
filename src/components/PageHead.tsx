import React from 'react';
import { headerLabelProps } from '../types/ComponentHeader_Label.Types.js';
import ComponentHeader from './ComponentHeader/index.tsx.js';
import { Th, Thead, Tr } from './pdf-elements.js';
interface pageHead_props {
    headLabel?: headerLabelProps;
    headLabelComponent?: React.ReactNode;
    className: string;
}
const PageHead = ({ headLabel, headLabelComponent, className }: pageHead_props) => {
    if (headLabelComponent || headLabel) {
        return (
            <Thead className={className}>
                <Tr>{headLabelComponent ? <Th>
                    {headLabelComponent}
                </Th>
                    : <Th>
                        {headLabel && <ComponentHeader titles={headLabel} />}
                    </Th>}
                </Tr>
            </Thead>
        )
    } else {
        return (
            <Thead className={className}>

            </Thead>
        )
    }
}

export default PageHead