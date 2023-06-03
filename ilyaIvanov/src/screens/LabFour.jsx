import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const LabFour = () => {
  const value = useSelector(state => state.test.valueDirection);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default LabFour;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f8ff',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});
