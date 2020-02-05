import * as React from "react";
import { ICattodGridProps, IMessage, ICatodcolumnDefs, ICatodActions } from "./Grid/Models";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-bootstrap.css";
import "./styles/GridStyle.scss";
export interface CattodGridProps<T> extends ICattodGridProps<T> {
}
export interface Message extends IMessage {
}
export interface Cattodcolumn<T> extends ICatodcolumnDefs<T> {
}
export interface CattodActions<T> extends ICatodActions<T> {
}
export declare class CattodGrid<T> extends React.Component<ICattodGridProps<T>> {
    render(): JSX.Element;
}
