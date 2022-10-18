import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Post } from '../components/Post';
import axios from 'axios';

export const LabTwo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://6327075fba4a9c47532f416c.mockapi.io/articles')
      .then(({ data }) => {
        setItems(data)
      }).catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      }).finally(() => {
        setIsLoading(false)
      });
  }

  useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View style={[styles.loading]}>
        <ActivityIndicator size='large' />
        <Text style={{ marginTop: 15 }}>Идет загрузка</Text>
      </View>

    )
  }

  return (
    <View style={[styles.container]}>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            createdAt={item.createdAt}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
