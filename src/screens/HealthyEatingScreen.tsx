import {StyleSheet, SafeAreaView, FlatList, Text, View} from 'react-native';
import React from 'react';
import type {RootState} from '../redux/store';
import {useSelector} from 'react-redux';

const HealthyEatingScreen = () => {
  const DATA = useSelector((state: RootState) => state.counter);

  const HeartData = DATA.filter(
    item => item.selle < 3 && item.probleme_sante === 'aucun',
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.Aliment}</Text>
      <Text style={styles.text}>As fruit : {item.fruit}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Healthy Eating</Text>
      </View>

      <View
        style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 22}}>To have a healthy diet I can eat : </Text>
        <FlatList
          data={HeartData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HealthyEatingScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#00ADF5',
    height: 50,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    width: 400,
    height: 80,
    backgroundColor: '#00ADF5',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
