import React from 'react';
import {AppLoading} from 'expo'
import * as Font from 'expo-font' 
import AppNavigator from './src/navigations/Navigator'

export default class App extends React.Component{
  state={
    isFontLoaded:true
  }
  async componentDidMount(){
      await Font.loadAsync({
        "Bold":require('./src/fonts/Montserrat-ExtraBold.otf'),
        "Medium":require('./src/fonts/Montserrat-Medium.otf'),
        "Regular":require('./src/fonts/Montserrat-Regular.otf'),
      })
      this.setState({isFontLoaded:true})
  }
  render(){
    return (
            (this.state.isFontLoaded === true)?
                (<AppNavigator/>):(<AppLoading/>)
      );
  }
 
}
