import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Agenda, AgendaSchedule} from 'react-native-calendars';
// import {Card, Avatar} from 'react-native-paper';

const AgendaScreens = () => {
  // const [items, setItems] = useState([{id: '1233', name: 'jocelyn'}]);
  items = {
    '2023-01-06': [
      {
        Aliment: 'Koki',
        nombre_de_fois: 2,
        qte_eau: 2,
        qte_autre_Liquide: 0,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Je n ai pas de eu de problemes de sante',
      },
    ],
    '2023-01-05': [
      {
        Aliment: 'Okok Sucre',
        nombre_de_fois: 3,
        qte_eau: 1,
        qte_autre_Liquide: 2,
        fruit: 'apple',
        selle: true,
        probleme_sante: 'Je n ai pas de eu de problemes de sante',
      },
    ],
    '2023-01-04': [
      {
        Aliment: 'Riz sauce arachide',
        nombre_de_fois: 1,
        qte_eau: 3,
        qte_autre_Liquide: 0,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Boutons au visage',
      },
    ],
    '2023-01-03': [
      {
        Aliment: 'Riz sauce tomate',
        nombre_de_fois: 1,
        qte_eau: 1,
        qte_autre_Liquide: 2,
        fruit: 'apple',
        selle: true,
        probleme_sante: 'aucun',
      },
    ],
    '2023-01-02': [
      {
        Aliment: 'Mets de Pistache',
        nombre_de_fois: 2,
        qte_eau: 1,
        qte_autre_Liquide: 2,
        fruit: 'orange',
        selle: true,
        probleme_sante: 'aucun',
      },
    ],
    '2023-01-01': [
      {
        Aliment: 'Ndole avec Plantain mur',
        nombre_de_fois: 1,
        qte_eau: 1,
        qte_autre_Liquide: 0,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'aucun',
      },
    ],
    '2022-12-31': [
      {
        Aliment: 'Ndole avec Plantain mur',
        nombre_de_fois: 1,
        qte_eau: 1,
        qte_autre_Liquide: 0,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'aucun',
      },
    ],
    '2022-12-30': [
      {
        Aliment: 'Sanga',
        nombre_de_fois: 4,
        qte_eau: 2,
        qte_autre_Liquide: 0,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'aucun',
      },
    ],
    '2022-12-29': [
      {
        Aliment: 'Poisson Braise',
        nombre_de_fois: 2,
        qte_eau: 0,
        qte_autre_Liquide: 3,
        fruit: 'orange',
        selle: true,
        probleme_sante: "j'ai beaucoup urine",
      },
    ],
    '2022-12-28': [
      {
        Aliment: 'Koki plantain mure',
        nombre_de_fois: 2,
        qte_eau: 0,
        qte_autre_Liquide: 3,
        fruit: 'orange',
        selle: true,
        probleme_sante: "j'ai beaucoup urine",
      },
    ],
    '2022-12-27': [
      {
        Aliment: 'Kondre',
        nombre_de_fois: 3,
        qte_eau: 2,
        qte_autre_Liquide: 1,
        fruit: 'banana',
        selle: true,
        probleme_sante: "j'ai beaucoup urine",
      },
    ],
    '2022-12-26': [
      {
        Aliment: 'Taro',
        nombre_de_fois: 3,
        qte_eau: 3,
        qte_autre_Liquide: 0,
        fruit: 'pinaple',
        selle: true,
        probleme_sante: "j'ai beaucoup urine",
      },
    ],
    '2022-12-25': [
      {
        Aliment: 'Eru',
        nombre_de_fois: 3,
        qte_eau: 2,
        qte_autre_Liquide: 1,
        fruit: 'apple',
        selle: true,
        probleme_sante: 'aucun probleme',
      },
    ],
    '2022-12-24': [
      {
        Aliment: 'Pattes sautes',
        nombre_de_fois: 3,
        qte_eau: 3,
        qte_autre_Liquide: 0,
        fruit: 'banana',
        selle: true,
        probleme_sante: "j'ai beaucoup urine",
      },
    ],
    '2022-12-23': [
      {
        Aliment: 'Riz saute',
        nombre_de_fois: 1,
        qte_eau: 1,
        qte_autre_Liquide: 1,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-12-22': [
      {
        Aliment: 'Couscous sauce Gombo',
        nombre_de_fois: 1,
        qte_eau: 2,
        qte_autre_Liquide: 1,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-12-21': [
      {
        Aliment: 'Haricots Plantain',
        nombre_de_fois: 1,
        qte_eau: 2,
        qte_autre_Liquide: 1,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-12-20': [
      {
        Aliment: 'Okok',
        nombre_de_fois: 1,
        qte_eau: 2,
        qte_autre_Liquide: 1,
        fruit: 'carrote',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-12-19': [
      {
        Aliment: 'Pommes sautes',
        nombre_de_fois: 4,
        qte_eau: 3,
        qte_autre_Liquide: 1,
        fruit: 'tomato',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-12-18': [
      {
        Aliment: 'Riz sauce arachide',
        nombre_de_fois: 2,
        qte_eau: 3,
        qte_autre_Liquide: 1,
        fruit: ' pinaple',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-18': [
      {
        Aliment: 'Riz sauce arachide',
        nombre_de_fois: 2,
        qte_eau: 3,
        qte_autre_Liquide: 1,
        fruit: ' pinaple',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-19': [
      {
        Aliment: 'Riz sauce Blanche',
        nombre_de_fois: 3,
        qte_eau: 3,
        qte_autre_Liquide: 1,
        fruit: 'babana , pinaple',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-20': [
      {
        Aliment: 'Riz sauce Blanche',
        nombre_de_fois: 3,
        qte_eau: 3,
        qte_autre_Liquide: 1,
        fruit: 'babana,apple pinaple',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-21': [
      {
        Aliment: 'Sanga',
        nombre_de_fois: 3,
        qte_eau: 1,
        qte_autre_Liquide: 1,
        fruit: false,
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-22': [
      {
        Aliment: 'Okok',
        nombre_de_fois: 4,
        qte_eau: 1,
        qte_autre_Liquide: 2,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-23': [
      {
        Aliment: 'Haricot plantain mure',
        nombre_de_fois: 2,
        qte_eau: 3,
        qte_autre_Liquide: 1,
        fruit: 'apple',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-24': [
      {
        Aliment: 'Pommes pile',
        nombre_de_fois: 2,
        qte_eau: 1,
        qte_autre_Liquide: 1,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
    '2022-11-25': [
      {
        Aliment: 'Sanga',
        nombre_de_fois: 3,
        qte_eau: 3,
        qte_autre_Liquide: 1,
        fruit: 'nothing',
        selle: true,
        probleme_sante: 'Aucun probleme',
      },
    ],
  };
  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = day => {
    // const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      //   setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <View style={styles.item}>
          <View>
            <Text style={{fontSize: 18, color: '#00ADF5'}}>{item.Aliment}</Text>
            <Text>Nombre de fois : {item.nombre_de_fois}</Text>
            <Text>Quantite d'eau : {item.qte_eau}L</Text>
            <Text>Quantite d'autres liquide : {item.qte_autre_Liquide}L</Text>
            <Text>Fruits : {item.fruit}</Text>
            <Text>Selles : {item.selle ? '1' : '2'}</Text>
            <Text>
              Probleme de sante :{' '}
              <Text style={{fontSize: 18, color: '#00ADF5'}}>
                {item.probleme_sante}
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-01-05'}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    // backgroundColor: 'lime',
    // height: 80,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 15,
    marginRight: 10,
    marginTop: 17,
  },
});

export default AgendaScreens;
