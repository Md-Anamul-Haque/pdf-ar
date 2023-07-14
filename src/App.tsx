import { addgrid } from "./components/grid";
import { addImage } from "./components/image";
import { addTable } from "./components/table";
import { addText } from "./components/text";
import PDFReander from "./PDFReander";
import { headerLabelProps } from "./types/ComponentHeader_Label.Types";
import { gridTypes } from "./types/gridTypes";
import { ImageTypes } from "./types/ImageTypes";
import { TableTypes } from "./types/TableTypes";
import { TextTypes } from "./types/TextTypes";
import { windowPdf_Props } from "./types/window-pdf.Types";

export interface windowPDF_dataProps {
    head: headerLabelProps;
    body: windowPdf_Props[];
}

export class PDF {
    private docs: windowPDF_dataProps;

    constructor() {
        this.docs = {
            head: {
                name: '',
            },
            body: [],
        };
    }
    setPageHead(head: headerLabelProps): void {
        this.docs.head = head;
    }
    text(text: TextTypes): void {
        addText(text, this.docs.body)
    }
    image(image: ImageTypes): void {
        addImage(image, this.docs.body)
    }
    table(table: TableTypes): void {
        addTable(table, this.docs.body)
    }
    grid(data: gridTypes): void {
        addgrid(data, this.docs.body)
    }
    addPage(): void {
        this.docs.body.push({
            type: 'new-page',
            doc: { text: '' }
        });
    }
    get(): any {
        return this.docs
    }
    print({ margin, width, height, ...props }: { margin?: string; width?: string; height?: string }): any {
        PDFReander({ docs: this.docs, margin, width, height, ...props })
    }
}
