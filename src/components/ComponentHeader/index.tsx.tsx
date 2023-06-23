import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { headerLabelLineProp, headerLabelNameProps, headerLabelProps } from "../../types/ComponentHeader_Label.Types";

const getName = (name: headerLabelNameProps) => typeof name == 'string' ? name : name.value;
const getClassName = (name: headerLabelNameProps) => typeof name == 'string' ? '' : name.className;

const ComponentHeader = ({ titles, className }: { titles: headerLabelProps; className?: string }) => {
    const HeaderDiv = styled.div`
    width: 100%;
    font-size:${titles?.style?.fontSize || 'auto'};
    text-align:${titles?.style?.aligh || 'center'};
    color:${titles?.style?.color || ''};
    background-color:${titles?.style?.backgroundColor || ''}; ;
    padding: ${titles?.style?.padding || ''};
    margin: ${titles?.style?.margin || ''};
`
    return (
        <HeaderDiv className={className || ''}>
            <h1 className={getClassName(titles.name)}>{getName(titles.name)}</h1>
            {titles?.lines && titles.lines.map((line: headerLabelLineProp) => (
                <p key={uuidv4()} className={typeof line == 'string' ? 'line' : line.className}>{typeof line == 'string' ? line : line.value}</p>
            ))}
        </HeaderDiv>
    )
}

export default ComponentHeader


