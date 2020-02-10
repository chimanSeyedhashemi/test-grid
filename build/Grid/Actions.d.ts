import * as React from "react";
import { ICatodActions, IAgColumnDefs } from "./Models";
interface IProps<T> {
    colDef: IAgColumnDefs<T>;
    data: T;
}
interface IState<T> {
    actions: ICatodActions<T>[];
}
export declare class Actions<T> extends React.Component<IProps<T>, IState<T>> {
    constructor(props: IProps<T>);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
