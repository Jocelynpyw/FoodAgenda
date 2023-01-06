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
    '2012-05-22': [{text: 'item 1 - any js object'}],
    '2012-05-23': [{text: 'item 2 - any js object'}],
    '2012-05-24': [],
    '2012-05-25': [{text: 'item 3 - any js object'}, {text: 'any js object'}],
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
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <View style={styles.item}>
          <View>
            <Text>{item.name}</Text>
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
