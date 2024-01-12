
import { StyleSheet, View, Image} from 'react-native';
import symbolOff from './assets/pictures/symbol-off.png'
import symbolOn from './assets/pictures/symbol-on.png'


export default function App() {
  const isActive = false
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <Image
      source={isActive ? symbolOn : symbolOff}
      />

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