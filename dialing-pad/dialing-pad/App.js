import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Pressable,
  onPress,
  TouchableOpacity,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [number, setNumber] = React.useState('');

  function DialPadNumber(props) {
    function onPressNumber() {
      props.onPress(props.number);
    }
    return (
      <TouchableOpacity style={props.style} onPress={onPressNumber}>
        <Text style={styles.txt}>{props.number}</Text>
      </TouchableOpacity>
    );
  }

  const pressed = (digit) => {
    setNumber((previousNumber) => {
      return previousNumber + digit;
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text></Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.display}>{number}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.pad}>
          <DialPadNumber style={styles.dial} number={'1'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'2'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'3'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'4'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'5'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'6'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'7'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'8'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'9'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'*'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'0'} onPress={pressed} />
          <DialPadNumber style={styles.dial} number={'#'} onPress={pressed} />
          <View style={[styles.dial, { backgroundColor: 'green' }]}>
            <Pressable onPress={onPress}>
              <Text style={[styles.txt1, { fontsize: 20 }, { color: 'white' }]}>
                Call
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  display: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 700,
  },
  header: {
    flex: 1,
    backgroundColor: '',
  },
  body: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
  },
  footer: {
    flex: 4,
    //backgroundColor:'white'
  },
  pad: {
    margin: 5,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  dial: {
    height: 50,
    width: 50,
    margin: 20,
    marginTop: 5,
    //backgroundColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 35,
    color: 'white',
    fontWeight: 700,
  },
});
