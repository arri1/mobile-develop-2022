import React from 'react';
import {Text, Image, View, Pressable, FlatList} from 'react-native';
import axios from 'axios';
import Style from '../Style';

const baseUrl =
  'https://api.weatherbit.io/v2.0/current?lat=62.01&lon=129.69&key=0762872ebe07421e938c0a16cc5e2b59';

export const Lab2Screen = () => {
  const [result, setResult] = React.useState([]);
  return (
    <View style={Style.container}>
      <Pressable
        style={({pressed}) => [pressed ? Style.buttonActive : Style.button]}
        onPress={() => {
          axios
            .get(baseUrl)
            .then(response => {
              console.log(JSON.stringify(response.data));
              setResult(response.data);
            })
            .catch(error => {
              console.log(error.message);
              alert(
                'Error, probably API key expired. For more information check console',
              );
            })
            .finally(() => {
              console.log('Finally called');
            });
        }}>
        <Text>Get Weather Data</Text>
      </Pressable>
      <FlatList
        data={result.data}
        renderItem={({item}) => (
          <View>
            <Text>
              Temperature: {item.temp}°C, feels like {item.app_temp}°C
            </Text>
            <Text>City: {item.city_name}</Text>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri: `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};
