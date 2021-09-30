import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';


/*함수형 컴포넌트
export default function App() {
  return (
    <Loading></Loading>
  );
}*/

//클래스형 컴포넌트로 수정
export default class extends React.Component{
  // async-await 기다리라는 의미
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount(){
    this.getLocation(); 
  }
  render(){
    return <Loading></Loading>;
  }
}

