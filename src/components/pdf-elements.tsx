import styled from "styled-components";

export const Page = styled.div`
width:${(props: any) => props.width};
height:${(props: any) => props.height};
margin: auto;
`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Table = styled.table`
  width:${(props: any) => props?.width || '100%'};
  height:${(props: any) => props?.height || 'auto'};
  border-collapse: collapse;
  margin:${(props: any) => props?.margin || '0 0 20px 0'};
  page-break-after: auto;
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
    background-color: #fff;
    /* @media print { */
    border: none;
    background-color: #f1f5f7;
  /* } */
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


