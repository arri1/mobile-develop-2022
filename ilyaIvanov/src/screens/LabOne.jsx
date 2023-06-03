import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {testSlice} from '../store';

export const LabOne = () => {
  //const [valueDirection, setValueDirection] = React.useState(0);
  const valueDirection = useSelector(state => state.test.valueDirection);
  const dispatch = useDispatch();

  const testDirection = ({value}) => {
    if (value === 0) {
      return 'row';
    } else if (value === 1) {
      return 'row Reverse';
    } else if (value === 2) {
      return 'column';
    } else if (value === 3) {
      return 'column Reverse';
    }
  };

  return (
    <View
      style={[
        styles.container,
        valueDirection === 0 && styles.row,
        valueDirection === 1 && styles.rowReverse,
        valueDirection === 2 && styles.column,
        valueDirection === 3 && styles.columnReverse,
      ]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(
            testSlice.actions.setValueDirection((valueDirection + 1) % 4),
          );
        }}>
        <Text style={styles.buttonText}>
          1. {testDirection({value: valueDirection})}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(
            testSlice.actions.setValueDirection((valueDirection + 1) % 4),
          );
        }}>
        <Text style={styles.buttonText}>
          2. {testDirection({value: valueDirection})}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: '#6495ed',
    borderRadius: 10,
    width: 175,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexWrap: 'wrap',
    backgroundColor: '#f0f8ff',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
});
