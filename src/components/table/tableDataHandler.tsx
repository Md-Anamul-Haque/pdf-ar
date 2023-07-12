// import { TableTypes, TdType } from "../../types/TableTypes"

// const tableDataHandler = (table: TableTypes) => {
//   let newTalbe = table.body.map(row => {
//     let newRow = row.map((col: TdType, i) => {
//       if (typeof col == 'string' && typeof table.head?.[i] == 'string') {
//         return col
//       } else {
//         if (typeof col == 'string') {
//           return {
//             value: col,
//             // @ts-ignore
//             colSpan: typeof table.head?.[i] == 'string' ? 1 : table.head?.[i]?.colSpan
//           }
//         } else {
//           return {
//             ...col,
//             // @ts-ignore
//             colSpan: typeof table.head?.[i] == 'string' ? 1 : table.head?.[i]?.colSpan
//           }
//         }
//       }
//     })
//   })
//   return newTalbe
// }

// export default tableDataHandler