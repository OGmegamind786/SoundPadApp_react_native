import React, { Component } from 'react';
import Sound, { MAIN_BUNDLE } from 'react-native-sound';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

//import components

import Pad from './components/Pad';



Sound.setCategory('Playback');

const appSounds ={};
class App extends Component {


  componentDidMount() {
    
    appSounds.sound1 = new Sound('a1.wav' , Sound.MAIN_BUNDLE , (error)=>{
      if(error){
        console.log('failed to load sound' , error);
        return;
      }
    })
    appSounds.sound2 = new Sound('a2.wav' , Sound.MAIN_BUNDLE , (error)=>{
      if(error){
        console.log('failed to load sound' , error);
        return;
      }
    })
    appSounds.sound3 = new Sound('a3.wav' , Sound.MAIN_BUNDLE , (error)=>{
      if(error){
        console.log('failed to load sound' , error);
        return;
      }
    })
    appSounds.sound4 = new Sound('a4.wav' , Sound.MAIN_BUNDLE , (error)=>{
      if(error){
        console.log('failed to load sound' , error);
        return;
      }
    })
    appSounds.sound5 = new Sound('a5.wav' , Sound.MAIN_BUNDLE , (error)=>{
      if(error){
        console.log('failed to load sound' , error);
        return;
      }
    })
    appSounds.sound6 = new Sound('a6.wav' , Sound.MAIN_BUNDLE , (error)=>{
      if(error){
        console.log('failed to load sound' , error);
        return;
      }
    })
  }

  onPressButtonPlay1( ){
      appSounds.sound1.play();
  }
  onPressButtonPlay2( ){
    appSounds.sound2.play();
  }
  onPressButtonPlay3( ){
    appSounds.sound3.play();
  }
  onPressButtonPlay4( ){
    appSounds.sound4.play();
  }
  onPressButtonPlay5( ){
    appSounds.sound5.play();
  }
  onPressButtonPlay6( ){
    appSounds.sound6.play();
  }

  render(){

    return (
      <>
        <ScrollView style={styles.body}>
        <Text style={styles.text}> SoundPad App</Text>
        <View style={styles.position}>
          <Pad num={1} onPressPad = {this.onPressButtonPlay1} ></Pad>
          <Pad num={2} onPressPad = {this.onPressButtonPlay2} ></Pad>
          <Pad num={3} onPressPad = {this.onPressButtonPlay3} ></Pad>
          <Pad num={4} onPressPad = {this.onPressButtonPlay4} ></Pad>
          <Pad num={5} onPressPad = {this.onPressButtonPlay5} ></Pad>
          <Pad num={6} onPressPad = {this.onPressButtonPlay6} ></Pad>
        </View>
        </ScrollView>
          
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'blue',
    fontFamily: '',
  },
  text: {
    color: 'red',
    display: 'flex',
    textAlign: "center",
    fontSize: 40,
    margin: 20,
  },
  position: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;
