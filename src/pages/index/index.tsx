import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  handleCustomClick = (...args) => {
    console.log('child custom component clicked',...args)
  }
  setRef = (node) => {
    console.log('element ref:', node)
  }
  render() {
    return (
      <View className='index'>
        {/* 三方原生组件 */}
        <custom-comp1
          onComponentClick={this.handleCustomClick}
          onComponentClick1={this.handleCustomClick}
          onComponentClick2={this.handleCustomClick}
          onComponentClick23={this.handleCustomClick}
          onComponentClick4={this.handleCustomClick}
          onComponentClick5={this.handleCustomClick}
          componentClick={this.handleCustomClick}
          someAttr='1'
        ></custom-comp1>
        <Text>Hello world!</Text>
        <view onTap={this.handleCustomClick}>内置原生组件</view>
      </View>
    )
  }
}
