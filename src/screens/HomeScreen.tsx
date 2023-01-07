import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {getData} from './AddScreen';
import type {RootState} from '../redux/store';
import moment from 'moment';

const HomeScreen = ({navigation}) => {
  const DATA = useSelector((state: RootState) => state.counter.value);

  let initialValue = 0;

  var nbreManger = DATA.reduce((accumulator, object) => {
    return accumulator + object.nombre_de_fois;
  }, 0);
  var nbreqte_eau = DATA.reduce((accumulator, object) => {
    return accumulator + object.qte_eau;
  }, 0);
  var nbreqte_autreLiquide = DATA.reduce((accumulator, object) => {
    return accumulator + object.qte_autre_Liquide;
  }, 0);

  //   const navivation = useNavigation();

  //   const allReducer = getData();
  //   console.log('All les reducers sont : ', JSON.stringify(DATA));

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemCalendar}
      onPress={() => {
        navigation.navigate('DetailsScreen', {items: item});
      }}>
      <Text style={styles.date}>{moment(item.date).format('LL')}</Text>
      <Text style={styles.aliment}>{item.Aliment}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.titleCalenda}>Nutritional calendar</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            style={styles.flatlist}
          />
        </View>
        <Text style={styles.titleCalenda}>Since 25 November 2022</Text>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={styles.card}>
            <View>
              <Text style={styles.textbold}>{nbreqte_eau} L</Text>
              <Text>EAUX</Text>
            </View>
            <View>
              <Text style={styles.textbold}>{nbreqte_autreLiquide} L</Text>
              <Text>AUTRES LIQUIDES</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
              <Text style={styles.textbold}>12 Fois</Text>
              <Text>SELLES</Text>
            </View>

            <View>
              <Text style={styles.textbold}>{nbreManger} Fois</Text>
              <Text>VOUS AVEZ MANGE</Text>
            </View>
          </View>
        </View>

        <Text style={styles.titleCalenda}>
          Fruits consumed since 25 November 2022
        </Text>

        <View style={{padding: 10}}>
          <Text style={styles.fruit}>Apple</Text>
          <Text style={styles.fruit}>Tomato</Text>
          <Text style={styles.fruit}>Pinaple</Text>
          <Text style={styles.fruit}>Ananas</Text>
          <Text style={styles.fruit}>Orange</Text>
          <Text style={styles.fruit}>Banana</Text>
          <Text style={styles.fruit}>Pear</Text>
        </View>

        <View
          style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HealthyEatingScreen');
            }}>
            <Text style={styles.btn}>Healthy eating</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('dailyMeans');
            }}>
            <Text style={styles.btrn}>Daily Meals</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  flatlist: {
    height: 120,
  },
  itemCalendar: {
    padding: 10,
    height: 100,
    width: 150,
    borderRadius: 30,
    backgroundColor: '#00ADF5',
    margin: 5,
  },
  date: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleCalenda: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  aliment: {
    // marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    width: 200,
    backgroundColor: '#00ADF5',
    height: 200,
    margin: 5,
    borderRadius: 30,
    padding: 10,
  },
  textbold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  fruit: {
    height: 50,
    backgroundColor: '#00ADF5',
    borderRadius: 20,
    padding: 5,
    marginVertical: 10,
    paddingTop: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
  btn: {
    height: 50,
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 5,
    marginVertical: 10,
    paddingTop: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    width: 200,
    alignItems: 'center',
    textAlign: 'center',
    margin: 2,
  },
  btrn: {
    height: 50,
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 5,
    marginVertical: 10,
    paddingTop: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    width: 200,
    alignItems: 'center',
    textAlign: 'center',
    margin: 2,
  },
});

export default HomeScreen;
