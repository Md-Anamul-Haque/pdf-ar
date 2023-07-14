import styled from "styled-components";

export const Page = styled.div`
width:${(props: any) => props.width};
height:${(props: any) => props.height};
margin: auto;
background-color: #ffffff;
color: #000;
`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  color: #000;
`;
export const Table = styled.table`
  width:${(props: any) => props?.width || '100%'};
  height:${(props: any) => props?.height || 'auto'};
  border-collapse: collapse;
  margin:${(props: any) => props?.margin || '0 0 20px 0'};
  page-break-after: auto;
  background-color: #ffffff;
  color: #000;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  font-weight: bold;
  padding: 8px;
  border: 1px solid #e1e1e1;
  text-align:${(props: any) => props?.['text-align'] || 'left'};
`;

export const Td = styled.td`
  padding: 8px;
  border: 1px solid #e1e1e1;
  text-align:${(props: any) => props?.['text-align'] || 'left'};
  `;

export const Tr = styled.tr`
  page-break-inside: avoid;
  page-break-after: auto;
  page-break-before: auto;

  &:nth-child(even) {
    border: none;
    background-color: #f1f5f7;
  }


`;

export const Thead = styled.thead`
  ${Tr} {
    ${Th} {
      /* background-color: #eee8f086;
      font-weight: bold;
      padding: 8px;
      text-align: left; */
    }
  }
`;

export const Tbody = styled.tbody`
${Table}{
  border:1px solid #e1e1e1 ;
}
  ${Tr} {
    ${Td} {
      padding: 8px;
    }
  }
`;

export const Tfoot = styled.tfoot`
  ${Tr} {
    ${Td} {
      padding: 8px;
    }
  }
`;


// -------------------------------------------------------------------------------
export const GridContainer = styled.div`
  display: grid;
  row-gap:${(props: any) => props?.rowGap};
`;
export const GridRow = styled.div`
  display: grid;
  grid-template-columns:${(props: any) => typeof props?.gridTemplateColumns == 'number' ? `repeat(${props?.gridTemplateColumns}, minmax(0, auto))` : props?.gridTemplateColumns || 'repeat(12, minmax(0, auto))'};
  grid-template-rows:${(props: any) => typeof props?.gridTemplateRows == 'number' ? `repeat(${props?.gridTemplateRows}, minmax(0, auto))` : props?.gridTemplateRows || 'repeat(30, minmax(0, auto))'};
  gap: ${(props: any) => typeof props?.gap == 'number' ? `${props?.gap}px` : props?.gap || '0px'};
  row-gap:${(props: any) => props?.rowGap};
  column-gap:${(props: any) => props?.colGap};
  height:${(props: any) => props?.height};
  width:${(props: any) => props?.width};
  background:${(props: any) => props?.background};
  color:${(props: any) => props?.color};
`;

export const GridCol = styled.div`
  display: grid;
  /* gap: ${(props: any) => typeof props?.gap == 'number' ? `${props?.gap}px` : props?.gap || '0px'}; */
  row-gap:${(props: any) => props?.rowGap};
  column-gap:${(props: any) => props?.colGap};
  height:${(props: any) => props?.height};
  width:${(props: any) => props?.width};
  background:${(props: any) => props?.background};
  color:${(props: any) => props?.color};
  grid-column:${(props: any) => props?.colSpan};
  grid-row:${(props: any) => props?.rowSpan};
  border:1px solid pink;
  padding:7px 10px;
  border-radius:8px;
`;