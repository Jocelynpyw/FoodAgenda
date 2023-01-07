import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';

const DetailsFoodScreen = ({route, navigation}) => {
  const {items} = route.params;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          My {moment(items.date).format('LL')} Foods
        </Text>
      </View>
      <View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 18, color: '#00ADF5'}}>{items.Aliment}</Text>
          <Text>Nombre de fois : {items.nombre_de_fois}</Text>
          <Text>Quantite d'eau : {items.qte_eau}L</Text>
          <Text>Quantite d'autres liquide : {items.qte_autre_Liquide}L</Text>
          <Text>Fruits : {items.fruit}</Text>
          <Text>Selles : {items.selle ? '1' : '2'}</Text>
          <Text>
            Probleme de sante :
            <Text style={{fontSize: 18, color: '#00ADF5'}}>
              {items.probleme_sante}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsFoodScreen;

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
});
