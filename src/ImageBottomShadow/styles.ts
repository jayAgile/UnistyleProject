import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imgContainerStyle: {
    height: 200,
    width: 200,
    zIndex: 1,
    overflow: 'hidden', // Ensures shadow stays within the container
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  titleText: {
    position: 'absolute',
    bottom: 0,
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    zIndex: 1,
  },
  textOverLayContainer: {
    position: 'absolute',
    height: 200,
    width: '100%',
    bottom: 0,
    zIndex: 1,
  },
  shadowOverlay: {
    alignSelf: 'center',
    height: 0,
    opacity: 0.3,
    boxShadow: '5 5 20 80 rgba(0, 0, 0, 0.8)',
    width: '100%',
    zIndex: 1,
  },
});
