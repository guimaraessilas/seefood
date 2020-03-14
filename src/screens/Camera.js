import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View style={styles.pendingView}>
    <Text>Waiting</Text>
  </View>
);

// async function getBase64(imageUri) {
//   const filepath = imageUri.split('//')[1];
//   const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
//   return `data:image/jpeg;base64,${imageUriBase64}`;
// }

const takePicture = function(camera) {
  const options = {
    quality: 0.8,
    base64: true,
    skipProcessing: true,
  };
  camera.takePictureAsync(options).then(data => {
    //TODO: Enviar JSON.stringify(data.base64) para um server
    console.log('Base64: ' + JSON.stringify(data.base64));
  });
  //   const base64 = await getBase64(data.uri);
  //   console.log('base64: ', base64);
};

const Camera = ({navigation}) => {
  const [text, setText] = useState('');
  const [read, setRead] = useState(true);

  const textRecognized = ({textBlocks}) => {
    textBlocks.map(b => {
      let texto = '';
      texto += b.value;
      setText(texto);
      setRead(!read);
    });
  };

  const showText = () => {
    alert(text);
  };

  return (
    <View style={styles.camContainer}>
      <RNCamera
        style={styles.preview}
        flashMode={RNCamera.Constants.FlashMode.off}
        onFacesDetected={null}
        onGoogleVisionBarcodesDetected={null}
        onTextRecognized={read ? textRecognized : showText}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Nós precisamos que vc nos dê permissão para usar a câmera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') {
            return <PendingView />;
          }

          return (
            <TouchableOpacity
              onPress={() => takePicture(camera)}
              style={styles.picButtonContainer}>
              <Text style={styles.buttonText}> SNAP </Text>
            </TouchableOpacity>
          );
        }}
      </RNCamera>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: 'center',
    fontSize: 35,
    color: '#000',
    fontWeight: '700',
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
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
