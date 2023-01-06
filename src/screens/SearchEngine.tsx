import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const questions = [
  {
    question: 'Quel est le capital de la France?',
    answer: 'Paris',
  },
  {
    question: 'Quel est le drapeau national du Canada?',
    answer:
      'Le drapeau canadien est composé de deux bandes rouges et une bande blanche au milieu.',
  },
  {
    question: 'Quel est le nom de la monnaie au Japon?',
    answer: 'Le yen',
  },
  {
    question: "Quel est le plus haut sommet d'Afrique?",
    answer: 'Le mont Kilimandjaro',
  },
  {
    question: "Combien de pays font partie de l'Union européenne?",
    answer: "Il y a 27 pays membres de l'Union européenne.",
  },
  {
    question:
      "Quelles sont les nourritures à éviter pour ne pas contracter l'obésité ",
    answer: '',
  },
  {
    question:
      'Quelles sont les nourritures à éviter pour ne pas contracter le diabète?',
    answer: '',
  },
  {
    question:
      'Quelles sont les nourritures à éviter pour ne pas contracter la constipation ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les nourritures à éviter pour ne pas avoir de maux de ventre?',
    answer: '',
  },

  {
    question:
      ' Quelles sont les nourritures à éviter pour ne pas avoir de gaz ?',
    answer: '',
  },

  {
    question:
      "Quels aliments dois-je éviter pour ne pas contracter l'obésité en mangeant du koki ?",
    answer: '',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas contracter le diabète en mangeant du riz',
    answer: '',
  },
  {
    question:
      "Quels aliments dois-je éviter pour ne pas contracter la diarrhée en mangeant de l'eru ",
    answer: '',
  },
  {
    question:
      "Quels aliments dois-je éviter pour ne pas contracter la constipation en mangeant de l'okok ?",
    answer: '',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas avoir de maux de ventre en mangeant des spaghettis ?',
    answer: '',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas avoir de ballonnement de ventre en mangeant de la sauce tomate ?',
    answer: '',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas avoir de gaz en mangeant du couscous ?',
    answer: '',
  },
  {
    question: "Quelles sont les nourritures qui peuvent causer de l'obésité ?",
    answer: '',
  },
  {
    question: 'Quelles sont les nourritures qui peuvent causer du diabète ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les nourritures qui peuvent causer de la constipation ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les nourritures qui peuvent causer des maux de ventre ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les nourritures qui peuvent causer de ballonnement de ventre ?',
    answer: '',
  },
  {
    question: 'Quelles sont les nourritures qui peuvent causer des gaz ?',
    answer: '',
  },
  {
    question:
      "Quels aliments peuvent causer de l'obésité lorsqu'on mange du koki ?",
    answer: '',
  },
  {
    question:
      "Quels aliments peuvent causer du diabète lorsqu'on mange du riz ?",
    answer: '',
  },
  {
    question:
      "Quels aliments peuvent causer de la diarrhée lorsqu'on mange de l'eru ?",
    answer: '',
  },
  {
    question:
      "Quels aliments peuvent causer de la constipation lorsqu'on mange de l'okok ?",
    answer: '',
  },
  {
    question:
      "Quels aliments peuvent causer des maux de ventre lorsqu'on mange des spaghettis ?",
    answer: '',
  },
  {
    question: 'Quels aliments peuvent causer de ballon',
    answer: '',
  },

  // // // // // Debut des questions basees sur les nourritures et les maladies

  {
    question: "Que faire pour éviter l'obésité ?",
    answer: '',
  },
  {
    question: 'Que faire pour éviter le diabète ?',
    answer: '',
  },
  {
    question: 'Que faire pour éviter la diarrhée ?',
    answer: '',
  },
  {
    question: 'Que faire pour éviter la constipation ?',
    answer: '',
  },
  {
    question: 'Que faire pour éviter les maux de ventre ?',
    answer: '',
  },
  {
    question: 'Que faire pour éviter le ballonnement de ventre ?',
    answer: '',
  },
  {
    question: 'Que faire pour éviter les gaz ?',
    answer: '',
  },
  {
    question: "Comment puis-je éviter l'obésité en mangeant du koki ?",
    answer: '',
  },
  {
    question: 'Comment puis-je éviter le diabète en mangeant du riz ?',
    answer: '',
  },
  {
    question: "Comment puis-je éviter la diarrhée en mangeant de l'eru ?",
    answer: '',
  },
  {
    question: "Comment puis-je éviter la constipation en mangeant de l'okok ?",
    answer: '',
  },
  {
    question:
      'Comment puis-je éviter les maux de ventre en mangeant des spaghettis ?',
    answer: '',
  },
  {
    question:
      'Comment puis-je éviter le ballonnement de ventre en mangeant de la sauce tomate ?',
    answer: '',
  },
  {
    question: 'Comment puis-je éviter les gaz en mangeant du couscous ?',
    answer: '',
  },
  {
    question:
      "Quelles sont les habitudes alimentaires saines pour éviter l'obésité ?",
    answer: '',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter le diabète ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter la diarrhée ?',
    answer: '',
  },
  {
    question:
      ' Quelles sont les habitudes alimentaires saines pour éviter la constipation ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter les maux de ventre ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter le ballonnement de ventre ?',
    answer: '',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter les gaz ?',
    answer: '',
  },
  {
    question:
      'Quels sont les aliments sains à inclure dans mon alimentation pour éviter le diabète ?',
    answer: '',
  },

  // ///// . // // // // Questions sur une bonne alimentation

  {
    question: "Qu'est-ce qu'une alimentation équilibrée?",
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange assez de fruits et légumes?',
    answer: '',
  },
  {
    question:
      'Comment puis-je intégrer plus de protéines dans mon alimentation?',
    answer: '',
  },
  {
    question: 'Comment puis-je réduire ma consommation de sucres ajoutés?',
    answer: '',
  },
  {
    question:
      'Quels sont les bienfaits de manger des aliments entiers plutôt que des aliments transformés?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir combien de calories je dois consommer chaque jour?',
    answer: '',
  },
  {
    question:
      'Comment puis-je limiter ma consommation de graisses saturées et trans?',
    answer: '',
  },
  {
    question:
      'Quels sont les aliments les plus nutritifs que je devrais inclure dans mon alimentation?',
    answer: '',
  },
  {
    question:
      "Comment puis-je m'assurer de manger suffisamment de minéraux et de vitamines?omment puis-je savoir si je mange suffisamment de fibres?",
    answer: '',
  },
  {
    question: 'Quels sont les risques liés à une alimentation déséquilibrée?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si je suis en train de manger trop ou pas assez?',
    answer: '',
  },
  {
    question: 'Comment puis-je éviter de grignoter entre les repas?',
    answer: '',
  },
  {
    question:
      'Comment puis-je intégrer des légumineuses dans mon alimentation?',
    answer: '',
  },
  {
    question:
      "Comment puis-je m'assurer de varier mon alimentation pour obtenir une variété de nutriments?",
    answer: '',
  },
  {
    question: "Comment puis-je savoir si j'ai des carences en nutriments?",
    answer: '',
  },
  {
    question: 'Comment puis-je inclure plus de légumes dans mon alimentation?',
    answer: '',
  },
  {
    question:
      'Quelle est la meilleure façon de manger pour prévenir certaines maladies chroniques?',
    answer: '',
  },
  {
    question: 'Quels sont les avantages de manger des aliments fermentés?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de graisses saines?',
    answer: '',
  },
  {
    question:
      'Comment puis-je inclure des grains entiers dans mon alimentation?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si mon alimentation est suffisamment diversifiée?',
    answer: '',
  },
  {
    question: 'Comment puis-je limiter ma consommation de sel?',
    answer: '',
  },
  {
    question: ' Quels sont les avantages de manger des aliments crus?',
    answer: '',
  },

  {
    question:
      "Comment puis-je m'assurer de manger suffisamment de protéines de qualité?",
    answer: '',
  },
  {
    question:
      'Comment puis-je intégrer des aliments riches en oméga-3 dans mon alimentation?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si je suis en train de manger trop de sucre?',
    answer: '',
  },
  {
    question: "Comment puis-je savoir si je mange assez d'aliments riches en",
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange assez de fruits et légumes?',
    answer: '',
  },
  {
    question:
      'Quelle est la meilleure façon de manger pour maintenir un poids santé?',
    answer: '',
  },
  {
    question: "Qu'est-ce qu'une alimentation équilibrée?",
    answer: '',
  },
  {
    question:
      'Comment puis-je intégrer plus de protéines dans mon alimentation?',
    answer: '',
  },
  {
    question:
      "Comment puis-je m'assurer de varier mon alimentation pour obtenir une variété de nutriments?",
    answer: '',
  },

  // // // // // // // /// // //  Plua de questions

  {
    question:
      'Quels sont les aliments à éviter ou à limiter pour une alimentation saine?',
    answer: '',
  },
  {
    question:
      "Comment puis-je savoir si j'ai besoin de compléments alimentaires?",
    answer: '',
  },
  {
    question:
      "Comment puis-je éviter de tomber dans l'excès de restriction alimentaire?",
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si je suis en train de manger trop de graisses?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de graisses saines?',
    answer: '',
  },
  {
    question: 'Comment puis-je éviter de manger trop de sucres cachés?',
    answer: '',
  },
  {
    question:
      'Comment puis-je intégrer plus de légumes dans mon alimentation au quotidien?',
    answer: '',
  },
  {
    question:
      'Comment puis-je inclure plus de protéines végétales dans mon alimentation?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de graisses insaturées?',
    answer: '',
  },
  {
    question:
      "Comment puis-je savoir si j'ai des problèmes de digestion et comment y remédier?",
    answer: '',
  },
  {
    question:
      "Comment puis-je savoir si j'ai des problèmes de digestion et comment y remédier?",
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de calcium?',
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine D?',
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine E?',
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine K?',
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine A?',
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine C?',
    answer: '',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine B6?',
    answer: '',
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de vitamine B12?',
    answer: '',
  },
];

export default function SearchEngine() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = () => {
    console.log('ce aui esr recherche est : ', query);

    setResults(
      questions.filter(item =>
        item.question.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <TextInput
          value={query}
          onChangeText={text => setQuery(text)}
          style={styles.textInput}
          placeholder="Search thing..."
        />
        <Button title="Search" onPress={search} color="#00ADF5" />
        {results.map((item, index) => (
          <View key={index} style={{marginVertical: 10}}>
            <Text>{item.question}</Text>
            <Text style={styles.answer}>Rep: {item.answer}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  answer: {
    backgroundColor: 'green',
    height: 30,
    borderLeftWidth: 5,
    borderLeftColor: '#00ADF5',
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    color: '#fff',
  },
  textInput: {
    borderWidth: 2,
    marginBottom: 5,
    borderColor: '#00ADF5',
  },
});
