import {Text, Pressable, View, ImageBackground} from 'react-native';
import Style from '../Style';

const image = '../Media/Background.png';

export const NestedHomeScreen = ({navigation}) => {
  return (
    <View style={Style.containerWithImageBackground}>
      <ImageBackground
        style={Style.imageBackground}
        source={require(image)}>
        <Pressable
          style={({pressed}) => [pressed ? Style.buttonActive : Style.button]}
          onPress={() => navigation.navigate('Laboratory 1')}>
          <Text>Laboratory 1</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [pressed ? Style.buttonActive : Style.button]}
          onPress={() => navigation.navigate('Laboratory 2')}>
          <Text>Laboratory 2</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [pressed ? Style.buttonActive : Style.button]}
          onPress={() => navigation.navigate('Laboratory 3')}>
          <Text>Laboratory 3</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
