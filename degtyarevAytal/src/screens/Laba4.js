// import {useNavigation} from '@react-navigation/native';
// import React from 'react';
// import {Text, View, TouchableOpacity} from 'react-native';
// import {Container} from '../components/Container';

// export const Laba4 = () => {
//   const navigation = useNavigation();

//   return (
//     <Container showArrow={true}>
//       <TouchableOpacity>
//         <Text>Тут скоро будет лаба 4</Text>
//       </TouchableOpacity>
//     </Container>
//   );
// };

// import React, {Component} from 'react';
// import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
// import ListItem from '../Laba4/Components/ListItem';
// import {connect} from 'react-redux';
// import {addPlace} from '../Laba4/Actions/place';
// import {resolveDirective} from 'vue';

// export const Laba4 = () => {
//   state = {
//     placeName: '',
//     places: [],
//   };

//   placeSubmitHandler = () => {
//     if (this.state.placeName.trim() === '') {
//       return;
//     }
//     this.props.add(this.state.placeName);
//   };

//   placeNameChangeHandler = value => {
//     this.setState({
//       placeName: value,
//     });
//   };

//   placesOutput = () => {
//     return (
//       <FlatList
//         style={styles.listContainer}
//         data={this.props.places}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={info => <ListItem placeName={info.item.value} />}
//       />
//     );
//   };

//   render = () => {
//     return (
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Seach Places"
//             style={styles.placeInput}
//             value={this.state.placeName}
//             onChangeText={this.placeNameChangeHandler}></TextInput>
//           <Button
//             title="Add"
//             style={styles.placeButton}
//             onPress={this.placeSubmitHandler}
//           />
//         </View>
//         <View style={styles.listContainer}>{this.placesOutput()}</View>
//       </View>
//     );
//   };
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//   },
//   placeInput: {
//     width: '70%',
//   },
//   placeButton: {
//     width: '30%',
//   },
//   listContainer: {
//     width: '100%',
//   },
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     add: name => {
//       dispatch(addPlace(name));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Laba4);

import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {increaseBurgerAction, decreaseBurgerAction} from '../redux/index';

export const Laba4 = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={{marginVertical: 50}}>
        <Text> Number of burger  </Text>
        <Button title="Increase Burger" onPress={() => {}} />
      </View>
      <View style={{marginVertical: 50}}>
        <Button title="Decrease Burger" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Laba4;
