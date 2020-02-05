import * as React from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-bootstrap.css";
import { ICatodcolumnDefs, ICattodGridProps, ICattodGridState } from "./Models";
import { GridApi, ColumnApi } from '@ag-grid-community/core';
import "../styles/GridStyle.scss";
export default class Grid<T> extends React.Component<ICattodGridProps<T>, ICattodGridState<T>> {
    gridApi: GridApi | null | undefined;
    gridColumnApi: ColumnApi | null | undefined;
    constructor(props: ICattodGridProps<T>);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ICattodGridProps<T>): void;
    fixColumnDef: (data: ICatodcolumnDefs<T>[] | undefined, direction: string) => void;
    onGridReady: (event: any) => void;
    fixRendered: () => {} | {
        [key: string]: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | React.FunctionComponent<{}> | null | undefined;
    } | undefined;
    render(): JSX.Element;
}
