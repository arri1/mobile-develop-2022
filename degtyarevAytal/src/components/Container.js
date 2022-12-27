import React from 'react';
import {View, Text, Touchable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Svg from 'react-native-svg';
import {SvgProfile} from '../assets/svg/SvgProfile';
import {SvgBack} from '../assets/svg/SvgBack';

export const Container = props => {
  const {children, showArrow = true} = props;

  const navigation = useNavigation();

  return (
    <View>
      <View style={{padding: 12, marginleft: 14}}>
        {}
      </View>
      <View>
        <View style={{paddingHorizontal: 16}}>{children}</View>
      </View>
    </View>
  );
};
