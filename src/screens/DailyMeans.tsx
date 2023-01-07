import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import type {RootState} from '../redux/store';
import {useSelector} from 'react-redux';
const fleche = require('../assets/fleche.png');
import moment from 'moment';

const DailyMeans = () => {
  const DATA = useSelector((state: RootState) => state.counter.value);
  console.log('All les reducers sont : ', JSON.stringify(DATA));
  const renderItem = ({item}) => (
    <View style={styles.vie}>
      <View style={styles.circle}>
        <Text style={styles.textCircle}>{moment(item.date).format('LL')}</Text>
      </View>
      <Image style={styles.image} source={fleche} />
      <View style={styles.circle}>
        <Text style={styles.textCircle}>{item.Aliment}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Daily Meals</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View>
        <Text>END</Text>
      </View>
    </SafeAreaView>
  );
};

export default DailyMeans;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#00ADF5',
    height: 50,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    height: 20,
    // marginTop: 20,
    width: 200,
    marginLeft: 5,
    marginRight: 5,
  },
  circle: {
    height: 100,
    width: 100,
    backgroundColor: '#00ADF5',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  vie: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: 10,
  },
  textCircle: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
  },
});
