
import { StyleSheet, View, Image , TouchableOpacity} from 'react-native';
import symbolOff from './assets/pictures/symbol-off.png'
import symbolOn from './assets/pictures/symbol-on.png'
import React, { useState } from 'react';



export default function App() {

const [isActive, setisActive] = useState(false)

  function handleSymble(){
    setisActive((oldValue:boolean)=>{
      return !oldValue
    })
  } 
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymble}>  
        <Image
      source={isActive ? symbolOn : symbolOff}
      />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  }
});