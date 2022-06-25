import * as React from 'react';

export interface IAppProps {
    onClick: () => void;
    queryParams: () => void
}

export default class Component2 extends React.Component<IAppProps> {
    componentDidMount(){
        this.props.queryParams()
    }
    public render() {
        return (
            <view onClick={this.props.onClick}>
                正常组件
            </view>
        );
    }
}
