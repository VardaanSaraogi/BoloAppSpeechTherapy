# react-native-microphone-stream
React Native module used for microphone and input audio streams. More options to follow soon.

## Install
```
$ npm i react-native-microphone-stream
```

### iOS
```
$ npx pod-install ios
```

## Usage
```typescript
import MicStream from 'react-native-microphone-stream';

const listener = MicStream.addListener(data => console.log(data));
MicStream.init({
  bufferSize: 4096,
  sampleRate: 44100,
  bitsPerChannel: 16,
  channelsPerFrame: 1,
});
MicStream.start();
MicStream.pause();
MicStream.stop();
listener.remove();
```
