import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useState} from 'react';

const App = () => {
  const [data, setdata] = useState('scan something');
  return (
    <QRCodeScanner
      onRead={e => setdata(e.data)}
      reactivate={true}
      reactivateTimeout={5000}
      showMarker={true}
      fadeIn={true}
      topContent={
        <View>
          <Text>{data}</Text>
        </View>
      }
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
