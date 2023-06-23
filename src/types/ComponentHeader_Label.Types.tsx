
export interface headerLabelStyleProps {
    fontSize?: string;
    aligh?: 'center' | 'left' | 'right';
    color?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
}
export type headerLabelNameProps = string | { value: string; className: string; }
export type headerLabelLineProp = string | {
    value: string; className: string;
}
export interface headerLabelProps {
    name: headerLabelNameProps;
    lines?: headerLabelLineProp[];
    style?: headerLabelStyleProps;
    className?: string;
};
