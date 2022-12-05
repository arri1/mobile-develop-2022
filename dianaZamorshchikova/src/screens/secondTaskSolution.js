import React, { useCallback } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  Dimensions, 
  Text, 
  Image,
  RefreshControl
} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const baseUrl = 'https://newsapi.org/v2/';
const query = 'top-headlines?country=us&category=science&apiKey=48b84474695446a78893afea51523ce6';
const { width, height } = Dimensions.get('window')

export const secondTaskSolution = () => {
  const {background, tabColor} = useSelector(state => state.colorReducer); 
  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios.create({
      baseURL: baseUrl
    }).get(query)
    .then((res) => {
      setNews(res.data);
    })
    .catch(error => {
      alert(error);
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    axios.create({
      baseURL: baseUrl
    }).get(query)
    .then((res) => {
      setNews(res.data);
      setRefreshing(false);
    })
    .catch(error => {
      alert(error);
    });
  }, []);

  return (
      <FlatList style={{backgroundColor: background}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
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
    );
  };

  const styles = StyleSheet.create({
    scrollView: {
      paddingHorizontal: 10,
    },
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


