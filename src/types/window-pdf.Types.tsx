import { headerLabelProps } from "./ComponentHeader_Label.Types";
import { ImageTypes } from "./ImageTypes";
import { TableTypes } from "./TableTypes";
import { TextTypes } from "./TextTypes";

export type windowPdf_Props = { type: string; doc: TextTypes | ImageTypes | TableTypes | headerLabelProps };
