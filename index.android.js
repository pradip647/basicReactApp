/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import a library to help create a component
import React from 'react';
import {AppRegistry,Text, View} from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/albumList';


//create a compontent
const App = () =>(
    <View style={{flex:1}}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);


//render it to the device
AppRegistry.registerComponent('reactNativeTest',()=>App);