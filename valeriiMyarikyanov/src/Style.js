import {BottomTabBarHeightCallbackContext} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f2',
    alignItems: 'center',
    padding: 10
  },
  containerWithImageBackground: {
    flex: 1,
    backgroundColor: '#f2f3f2'
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    width: '80%',
    maxHeight: 40,
    borderRadius: 8,
    borderBottomWidth: 2,
    backgroundColor: '#fffeff',
  },
  button: {
    flex: 1,
    backgroundColor: '#fffeff',
    width: '80%',
    maxHeight: 36,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
  },
  buttonActive: {
    flex: 1,
    backgroundColor: '#ff6347',
    width: '80%',
    maxHeight: 36,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
  },
  dontClickButton: {
    backgroundColor: '#fffeff',
    width: 120,
    maxHeight: 36,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
