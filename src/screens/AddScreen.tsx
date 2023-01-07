import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {} from 'react-native-gesture-handler';

export interface IMenu {
  date: Date;
  aliment: String;
  nombre_de_fois: Number;
  qte_eau: Number;
  qte_autre_Liquide: Number;
  fruit: String;
  selle: Number;
  probleme_sante: String;
}
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('MenuItem');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
const AddScreen = () => {
  //   const [text, onChangeText] = React.useState('Useless Text');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const [aliment, setAliment] = useState('');
  const [nombre_de_fois, setNombre_de_fois] = useState('');
  const [qte_eau, setQte_eau] = useState('');
  const [qte_autre_Liquide, setQte_autre_Liquide] = useState('');
  const [fruit, setFruit] = useState('');
  const [probleme_sante, setProbleme_sante] = useState('');
  const [selle, setSelle] = useState('');
  var general: IMenu[] = [];

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('MenuItem', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  // useEffect(() => {
  //   general = getData();
  // }, []);

  const handleSave = () => {
    const menu: IMenu = {
      date,
      aliment,
      nombre_de_fois,
      qte_eau,
      qte_autre_Liquide,
      fruit,
      selle,
      probleme_sante,
    };
    setAliment('');
    setNombre_de_fois('');
    setQte_eau('');
    setQte_autre_Liquide('');
    setSelle('');
    setProbleme_sante('');
    setFruit('');
    // await general.push(menu);
  };

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Date</Text>
          {/* <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
          {/* <DatePicker date={date} onDateChange={setDate} /> */}

          <TextInput
            style={styles.input}
            onChangeText={text => setDate(text)}
            placeholder="2022-12-01"
            keyboardType="default"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Aliment consome</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAliment(text)}
            placeholder="Okok"
            keyboardType="default"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Nombre de fois</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setNombre_de_fois(text)}
            placeholder="2"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Quantite d'eau</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setQte_eau(text)}
            placeholder="2"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Quantite d'autres liquides</Text>
          <TextInput
            onChangeText={text => setQte_autre_Liquide(text)}
            placeholder="2"
            keyboardType="numeric"
            style={styles.input}
            maxLength={5}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Avez vous consome des Fruit?</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setFruit(text)}
            placeholder="useless placeholder"
            keyboardType="default"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Selle?</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setSelle(text)}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>Probleme de Sante ?</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setProbleme_sante(text)}
            placeholder="useless placeholder"
            keyboardType="default"
          />
        </View>
        {/* {modal === true &&
          setTimeout(() => {
            <View style={styles.modal}>
              <View>
                <Text>COMPLETED</Text>
              </View>
            </View>;
          }, 1000)} */}

        <TouchableOpacity onPress={handleSave}>
          <View style={styles.saveContainer}>
            <Text style={styles.saveContainerText}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddScreen;
const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    // borderRadius: 20,
    // borderTopWidth
  },
  textInputContainer: {
    padding: 5,
  },
  datePickerStyle: {
    width: 230,
  },
  label: {
    marginLeft: 15,
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#00ADF5',
  },
  saveContainer: {
    width: '92%',
    height: 50,
    backgroundColor: '#00ADF5',
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveContainerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  modal: {
    width: '100%',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'lime',
    marginTop: 150,
  },
  btn: {
    width: '200',
    height: '30',
  },
});
