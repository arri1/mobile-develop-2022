import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, Image  } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';


const baseUrl = 'https://newsapi.org/v2/';
const query = 'top-headlines?country=us&apiKey=48b84474695446a78893afea51523ce6';
const { width, height } = Dimensions.get('window')

export const secondTaskSolution = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);
  const getNews = () => {
    axios.create({
      baseURL: baseUrl
    }).get(query)
    .then(async function (res) {
      setNews(res.data);
    })
    .catch(error => {
      alert(error);
    });
  }
  return (
    <View>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <View style={styles.cardView}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Image style={styles.image} source={{uri:item.urlToImage}}/>
          <Text style={styles.description}>{item.description}</Text>
      </View>
      }}
      />
    </View>
    );
  };

  const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'

    }
});