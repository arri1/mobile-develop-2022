import axios from 'axios';
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const baseUrl =
  'https://api.weatherbit.io/v2.0/current?lat=62.01&lon=129.69&key=0762872ebe07421e938c0a16cc5e2b59';

export const Lab2Screen = () => {
  const [result, setResult] = React.useState([]);
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          axios
            .get(baseUrl)
            .then(response => {
              console.log(JSON.stringify(response.data));
              setResult(response.data);
            })
            .catch(error => {
              console.log(error.message);
              alert('Error, for more information check console');
            })
            .finally(() => {
              console.log('Finally called');
            });
        }}>
        <Text>Get Weather Data</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.container}
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  buttonStyle: {
    alignItems: 'center',

    backgroundColor: '#DDDDDD',

    padding: 10,

    width: '100%',

    marginTop: 16,
  },
});
