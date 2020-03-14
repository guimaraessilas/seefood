import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      nativeID="container"
      source={require('../../assets/wallpaper.jpg')}>
      <View nativeID="header">
        <View style={styles.headerTitle}>
          <Text style={styles.title}>SEEFOOD</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subTitle}>"The Shazam for food"</Text>
        </View>
      </View>
      <View nativeID="body" style={styles.body}>
        <Text style={styles.getStartedText}>Let's get started</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Camera')}
        />
        <Text style={styles.buttonText}>Touch to SEEFOOD</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 35,
    color: '#000',
    fontWeight: '700',
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#FF2200',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#888',
    borderWidth: 5,
  },
  getStartedText: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 30,
    fontWeight: '700',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000044',
  },
  subTitle: {
    fontSize: 30,
    color: '#FF2200',
    alignSelf: 'center',
    fontWeight: '700',
  },
  subHeader: {
    backgroundColor: '#FFF',
    height: 70,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 40,
    color: '#FFF',
    fontWeight: '700',
    borderColor: '#000',
  },
  headerTitle: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#FF2200BB',
    borderBottomColor: '#000',
    borderBottomWidth: 4,
  },
  pendingView: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  picButtonContainer: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
