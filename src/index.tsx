import * as React from "react";
import Grid from "./Grid/Grid"
import {ICattodGridProps, IMessage,ICatodcolumnDefs , ICatodActions} from "./Grid/Models"
// import cn from 'classnames/bind';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
// import "@ag-grid-community/all-modules/dist/styles/ag-theme-bootstrap.css";
 import  "./GridStyle.scss"
//import './style.css'

// const cx = cn.bind(styles);

export interface CattodGridProps<T> extends ICattodGridProps<T>{}
export interface Message extends IMessage{}
export interface Cattodcolumn<T> extends ICatodcolumnDefs<T>{}
export interface CattodActions<T> extends ICatodActions<T>{}


export class CattodGrid<T> extends React.Component<ICattodGridProps<T>> {
  render() {
   

    return (
      // <div className={cx(styles.Alert)}>
<Grid 
    columnDef = {this.props.columnDef}
    dataRow = {this.props.dataRow}
    actions = {this.props.actions}
    rowNumber = {this.props.rowNumber}
    height = {this.props.height}
    message = {this.props.message}
    />
      // </div>
    ) ;
  }
}