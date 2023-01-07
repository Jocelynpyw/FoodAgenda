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
    answer: 'akachi , dumpa ',
  },
  {
    question:
      'Quelles sont les nourritures à éviter pour ne pas contracter le diabète?',
    answer: 'akachi , dumpa',
  },
  {
    question:
      'Quelles sont les nourritures à éviter pour ne pas contracter la constipation ?',
    answer: 'Maddessou , muambe ,makayabou,',
  },
  {
    question: 'Quels sont les nutriments du muambe',
    answer: 'Maddessou , muambe ,makayabou,',
  },

  {
    question: 'comment manger saint ?',
    answer:
      '1) Réduire sa consommation de produits transformés 2) Consommer des aliments sains et naturels.  3) Composer des repas équilibrés 4) Réduire le sucre (5% ou moins de l apport calorique journalier 5) Consommer des céréales complètes. 6) Manger plus de protéines végétales.7) S hydrater suffisamment en buvant de leau',
  },
  {
    question:
      'Quelles sont les nourritures à éviter pour ne pas avoir de maux de ventre?',
    answer: 'boeuf sauce bloque au karibout',
  },
  {
    question:
      'Quelles sont les nourritures à éviter pour ne pas avoir de maux de ventre?',
    answer: 'boeuf sauce bloque au karibout',
  },

  {
    question:
      ' Quelles sont les nourritures à éviter pour ne pas avoir de gaz ?',
    answer: 'kiwi , niboke',
  },

  {
    question:
      "Quels aliments dois-je éviter pour ne pas contracter l'obésité en mangeant du koki ?",
    answer: 'les jus gazeux',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas contracter le diabète en mangeant du riz',
    answer: 'les jus gazeux',
  },
  {
    question:
      "Quels aliments dois-je éviter pour ne pas contracter la diarrhée en mangeant de l'eru ",
    answer: 'Évitez les fruits secs et oléagineux',
  },
  {
    question:
      "Quels aliments dois-je éviter pour ne pas contracter la constipation en mangeant de l'okok ?",
    answer:
      'les coings, les bananes, les produits sucrés comme les bonbons, les pâtisseries',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas avoir de maux de ventre en mangeant des spaghettis ?',
    answer: 'avocat, asperge verte, épinards, pissenlit',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas avoir de ballonnement de ventre en mangeant de la sauce tomate ?',
    answer: 'La peau des légumes et les pépins/grains',
  },
  {
    question:
      'Quels aliments dois-je éviter pour ne pas avoir de gaz en mangeant du couscous ?',
    answer:
      'haricots secs (haricots blancs, rouges, pintos, noirs), des lentilles, des fèves, des pois, des pois chiches, des graines de soja',
  },
  {
    question: "Quelles sont les nourritures qui peuvent causer de l'obésité ?",
    answer: 'une alimentation riche en gras, en sel et en sucre',
  },
  {
    question: 'Quelles sont les nourritures qui peuvent causer du diabète ?',
    answer:
      'Les sucres, les confitures, le miel et évidemment tous les sodas, les boissons sucrées et les jus de fruits',
  },
  {
    question:
      'Quelles sont les nourritures qui peuvent causer de la constipation ?',
    answer:
      'Le riz blanc, La viande rouge, La pomme de terre, Les pâtisseries, Les boissons sucrées et gazeuses.',
  },
  {
    question:
      'Quelles sont les nourritures qui peuvent causer des maux de ventre ?',
    answer:
      'Les produits laitiers. Le yaourt, le beurre, la crème fraiche et les autres produits provenant du lait de vache',
  },
  {
    question:
      'Quelles sont les nourritures qui peuvent causer de ballonnement de ventre ?',
    answer: 'Les aliments riches en glucides',
  },
  {
    question: 'Quelles sont les nourritures qui peuvent causer des gaz ?',
    answer:
      'haricots secs (haricots blancs, rouges, pintos, noirs), des lentilles, des fèves, des pois, des pois chiches, des graines de soja',
  },
  {
    question:
      "Quels aliments peuvent causer de l'obésité lorsqu'on mange du koki ?",
    answer:
      ' La consommation excessive de matières grasses (huile, beurre), de boissons sucrées ou alcoolisées, de confiseries ou salaisons industrielles',
  },
  {
    question:
      "Quels aliments peuvent causer du diabète lorsqu'on mange du riz ?",
    answer:
      'Le riz rapide, la purée de pomme de terre, les frites (à consommer une fois par semaine au maximum), les chips, les plats cuisinés du commerce, les viennoiseries, pâtisseries et les céréales du petit déjeuner chocolatées ou au miel ou fourrées',
  },
  {
    question:
      "Quels aliments peuvent causer de la diarrhée lorsqu'on mange de l'eru ?",
    answer: 'Les légumes',
  },
  {
    question:
      "Quels aliments peuvent causer de la constipation lorsqu'on mange de l'okok ?",
    answer: 'Le manioc',
  },
  {
    question:
      "Quels aliments peuvent causer des maux de ventre lorsqu'on mange des spaghettis ?",
    answer: 'Le piments',
  },
  {
    question: 'Quels aliments peuvent causer de ballon',
    answer: 'Les crudités',
  },

  // // // // // Debut des questions basees sur les nourritures et les maladies

  {
    question: "Que faire pour éviter l'obésité ?",
    answer:
      'Limiter sa consommation de sucres et de sel ; Consommer des fruits et des légumes quotidiennement ; Augmenter la consommation de calcium chez les enfants',
  },
  {
    question: 'Que faire pour éviter le diabète ?',
    answer:
      "Augmentez votre consommation de fibres, Diminuez votre consommation de gras et de sel, Limitez votre consommation d'alcool",
  },
  {
    question: 'Que faire pour éviter la diarrhée ?',
    answer:
      "Eviter les produits laitiers, et les aliments épicés ou riches en fibres alimentaires (maïs, son, les fruits et jus d'agrumes, les légumes crus)",
  },
  {
    question: 'Que faire pour éviter la constipation ?',
    answer:
      'Consommez des aliments riches en fibres alimentaires pour augmenter la fréquence des selles et améliorer leur consistance',
  },
  {
    question: 'Que faire pour éviter les maux de ventre ?',
    answer:
      'Prendre les repas à heure régulière et manger assis lentement dans le calme en prenant bien le temps de mastiquer les aliments',
  },
  {
    question: 'Que faire pour éviter le ballonnement de ventre ?',
    answer:
      'Evitez de consommer régulièrement des chewing-gums, des boissons gazeuses ou utilisez des pailles pour boire',
  },
  {
    question: 'Que faire pour éviter les gaz ?',
    answer:
      'Éviter la bière et les boissons gazéifiées, Éviter de parler en mangeant, Éviter de boire en mangeant',
  },
  {
    question: "Comment puis-je éviter l'obésité en mangeant du koki ?",
    answer: "En mangeant moin d'huile",
  },
  {
    question: 'Comment puis-je éviter le diabète en mangeant du riz ?',
    answer: 'En limitant sa consommation en riz blanc',
  },
  {
    question: "Comment puis-je éviter la diarrhée en mangeant de l'eru ?",
    answer: "En limitant sa consommation de légume et en buvant beaucoup d'eau",
  },
  {
    question: "Comment puis-je éviter la constipation en mangeant de l'okok ?",
    answer: 'Manger moins de manioc',
  },
  {
    question:
      'Comment puis-je éviter les maux de ventre en mangeant des spaghettis ?',
    answer: "Manger moin d'épices",
  },
  {
    question:
      'Comment puis-je éviter le ballonnement de ventre en mangeant de la sauce tomate ?',
    answer: 'Ne pas grignoter avant ou après les repas',
  },
  {
    question: 'Comment puis-je éviter les gaz en mangeant du couscous ?',
    answer: "Eviter de boire de l'eau pendant le repas",
  },
  {
    question:
      "Quelles sont les habitudes alimentaires saines pour éviter l'obésité ?",
    answer:
      'manger des légumes à tous les repas, diversifier les fruits et les légumes consommés',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter le diabète ?',
    answer:
      'Ayez un horaire de repas régulier, Prenez trois repas équilibrés par jour et, au besoin, des collations',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter la diarrhée ?',
    answer:
      "Privilégiez les féculents raffinés, c'est-à-dire les pâtes, le pain blanc, le riz et la semoule",
  },
  {
    question:
      ' Quelles sont les habitudes alimentaires saines pour éviter la constipation ?',
    answer:
      'Intégrez dans votre alimentation de nombreux aliments riches en fibres, notamment les haricots, les légumineuses, les légumes, les fruits et les céréales complètes',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter les maux de ventre ?',
    answer:
      'Manger Les légumes cuits : carottes, endives, courgettes, haricots verts, aubergines, épinards',
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter le ballonnement de ventre ?',
    answer:
      "Il suffit de les faire tremper dans l'eau la veille et de les rincer avant de les faire cuire pour éviter les ballonnements",
  },
  {
    question:
      'Quelles sont les habitudes alimentaires saines pour éviter les gaz ?',
    answer:
      'il est recommandé de manger lentement, de bien mâcher, de manger plus de protéines et moins de glucides',
  },
  {
    question:
      'Quels sont les aliments sains à inclure dans mon alimentation pour éviter le diabète ?',
    answer:
      'Les lentilles, les pois chiches, les haricots rouges, les pâtes, le riz complet, le boulghour, le pain au son, le pain complet',
  },

  // ///// . // // // // Questions sur une bonne alimentation

  {
    question: "Qu'est-ce qu'une alimentation équilibrée?",
    answer:
      'Une alimentation équilibrée est avant tout une alimentation qui apporte à notre corps tous les nutriments dont il a besoin pour mieux assurer ses fonctions',
  },
  {
    question: 'Comment puis-je savoir si je mange assez de fruits et légumes?',
    answer:
      'manger très peu de fruits et de légumes, voire pas du tout, peut entraîner des problèmes de santé. Le premier est la constipation',
  },
  {
    question:
      'Comment puis-je intégrer plus de protéines dans mon alimentation?',
    answer:
      'Œufs, jambon de dinde, thon en boite, protéine en poudre ou substitut de repas',
  },
  {
    question: 'Comment puis-je réduire ma consommation de sucres ajoutés?',
    answer:
      "Optez pour des aliments entiers, Cuisinez plus souvent à la maison, Évitez d'ingérer des calories liquides",
  },
  {
    question:
      'Quels sont les bienfaits de manger des aliments entiers plutôt que des aliments transformés?',
    answer:
      "pour fournir à votre organisme, des fibres, antioxydants, gras de source végétale et grains entiers – autant d'éléments qui vous aideront à vous sentir énergique, tout en préservant votre santé générale.",
  },
  {
    question:
      'Comment puis-je savoir combien de calories je dois consommer chaque jour?',
    answer:
      'Une femme active aura besoin de 2200 calories. Une femme très sportive aura besoin de plus de 2500 calories. Un homme de taille moyenne de 25 à 45 ans a besoin de 2600 calories par jour. Un homme actif 3000 calories',
  },
  {
    question:
      'Comment puis-je limiter ma consommation de graisses saturées et trans?',
    answer:
      'Évitez des coupes grasses, de consommer la peau, les charcuteries et des produits laitiers riches. Changez votre mode de cuisson des aliments',
  },
  {
    question:
      'Quels sont les aliments les plus nutritifs que je devrais inclure dans mon alimentation?',
    answer:
      'Les principaux aliments les plus nutritifs ; Les glucides, Féculents (pâtes, riz, quinoa, boulgour…), patate douce, fruits ; Les lipides, Beurre',
  },
  {
    question:
      "Comment puis-je m'assurer de manger suffisamment de minéraux et de vitamines? Comment puis-je savoir si je mange suffisamment de fibres?",
    answer:
      "Les symptômes d'une carence nutritionnelle : pâleur, fatigue, affaiblissement, sensibilité aux infections, douleurs musculaires et des membres, maux de tête, difficultés de concentration, nervosité",
  },
  {
    question: 'Quels sont les risques liés à une alimentation déséquilibrée?',
    answer:
      "Une multitude de troubles peuvent être causés ou aggravés par ces dérèglements physiologiques, dont le diabète de type 2, les maladies cardiovasculaires, l'hypertension, le risque de cancers (sein, utérus, foie), les troubles hormonaux, les problèmes articulatoires, les problèmes respiratoires",
  },
  {
    question:
      'Comment puis-je savoir si je suis en train de manger trop ou pas assez?',
    answer:
      "Après un repas, vous sentez un inconfort au niveau de l'abdomen; Vous terminez souvent ou toujours vos assiettes; Suite à un repas, vous ne pourriez pas aller vous entraîner car vous vous sentez un peu trop lourd(e); Il vous arrive régulièrement d'être affamé(e) avant un repas (et donc de manger rapidement et trop)",
  },
  {
    question: 'Comment puis-je éviter de grignoter entre les repas?',
    answer: 'Manger complet',
  },
  {
    question:
      'Comment puis-je intégrer des légumineuses dans mon alimentation?',
    answer: 'Preparer plus de légumes',
  },
  {
    question:
      "Comment puis-je m'assurer de varier mon alimentation pour obtenir une variété de nutriments?",
    answer: "Manger différents types d'aliments recommandés et fruits",
  },
  {
    question: "Comment puis-je savoir si j'ai des carences en nutriments?",
    answer:
      "Les signes non spécifiques d'une carence nutritionnelle possible sont la fatigue, les ongles cassants et les maux de tête. D'autres symptômes tels que la pâleur, les vertiges ou la perte de cheveux peuvent également indiquer une carence nutritionnelle",
  },
  {
    question: 'Comment puis-je inclure plus de légumes dans mon alimentation?',
    answer: 'Preparer plus de légumes',
  },
  {
    question:
      'Quelle est la meilleure façon de manger pour prévenir certaines maladies chroniques?',
    answer:
      "La consommation d'au moins 400 g, soit cinq portions, de fruits et légumes par jour réduit le risque de maladies non transmissibles et permet de garantir un apport quotidien suffisant en fibres alimentaires",
  },
  {
    question: 'Quels sont les avantages de manger des aliments fermentés?',
    answer:
      "Le processus de fermentation peut produire des vitamines, des anti-oxydants et des molécules qui réduisent la pression artérielle et l'inflammation",
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de graisses saines?',
    answer:
      "Sinon : Tu as besoin de café ++ pour démarrer ta journée, Tu as des fringales en fin de matinée, Ton humeur est changeante, tu t'énerves facilement",
  },
  {
    question:
      'Comment puis-je inclure des grains entiers dans mon alimentation?',
    answer:
      "de l'orge, du boulgour et du quinoa dans les soupes, les salades et les sautés",
  },
  {
    question:
      'Comment puis-je savoir si mon alimentation est suffisamment diversifiée?',
    answer: "Manger différents types d'aliments",
  },
  {
    question: 'Comment puis-je limiter ma consommation de sel?',
    answer:
      'Pour manger moins salé, apprenez à regarder les étiquettes et comparez les teneurs en sel des produits',
  },
  {
    question: ' Quels sont les avantages de manger des aliments crus?',
    answer:
      "Manger cru facilite les digestions grâce aux enzymes. Les ingrédients assimilés permettent aussi de détoxifier l'organisme et d'épurer les toxines",
  },

  {
    question:
      "Comment puis-je m'assurer de manger suffisamment de protéines de qualité?",
    answer:
      "En cas de sous-alimentation, de sous-nutrition ou d'un apport faible en protéine, l'organisme doit dégrader une partie de sa masse musculaire",
  },
  {
    question:
      'Comment puis-je intégrer des aliments riches en oméga-3 dans mon alimentation?',
    answer:
      'En adoptant une alimentation variée, alternant des protéines animales (poisson, viande) et végétales (légumineuses et céréales)',
  },
  {
    question:
      'Comment puis-je savoir si je suis en train de manger trop de sucre?',
    answer:
      "Si le sucre contient des endorphines et qu'il active les circuits du plaisir, il provoque aussi des variations de glycémie qui jouent à leur tour sur l'humeur",
  },
  {
    question: "Comment puis-je savoir si je mange assez d'aliments riches ?",
    answer: 'Bonne forme',
  },
  {
    question: 'Comment puis-je savoir si je mange assez de fruits et légumes?',
    answer:
      "À l'inverse, manger très peu de fruits et de légumes, voire pas du tout, peut entraîner des problèmes de santé. Le premier est la constipation",
  },
  {
    question:
      'Quelle est la meilleure façon de manger pour maintenir un poids santé?',
    answer:
      'Mangez beaucoup de légumes et fruits, en comblant la moitié de tous vos repas et toutes vos collations avec ceux-ci',
  },
  {
    question: "Qu'est-ce qu'une alimentation équilibrée?",
    answer:
      'Une alimentation équilibrée est avant tout une alimentation qui apporte à notre corps tous les nutriments dont il a besoin pour mieux assurer ses fonctions',
  },
  {
    question:
      'Comment puis-je intégrer plus de protéines dans mon alimentation?',
    answer: 'Viande blanche, viande rouge maigre, poisson, oeufs',
  },
  {
    question:
      "Comment puis-je m'assurer de varier mon alimentation pour obtenir une variété de nutriments?",
    answer:
      "Manger : Les légumes et les fruits (la moitié de l'assiette), les produits céréaliers (le quart de l'assiette), les viandes et les substituts",
  },

  // // // // // // // /// // //  Plus de questions

  {
    question:
      'Quels sont les aliments à éviter ou à limiter pour une alimentation saine?',
    answer:
      "limiter la consommation d'aliments cuits au four et frits, ainsi que d'en‑cas et d'aliments préemballés (par exemple des beignets, des gâteaux, des tartes, des cookies, des biscuits et des gaufres) qui contiennent des acides gras trans industriels",
  },
  {
    question:
      "Comment puis-je savoir si j'ai besoin de compléments alimentaires?",
    answer:
      'Les compléments alimentaires correspondent à un terme générique qui englobe généralement les vitamines et les minéraux classiques',
  },
  {
    question:
      "Comment puis-je éviter de tomber dans l'excès de restriction alimentaire?",
    answer:
      "L'idéal consiste à manger dès lors qu'on a modérément faim : attendre davantage ne fait que nous affamer et nous faire manger en excès au repas",
  },
  {
    question:
      'Comment puis-je savoir si je suis en train de manger trop de graisses?',
    answer: "Changement d'humeur",
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de graisses saines?',
    answer:
      "Sinon : Tu as besoin de café ++ pour démarrer ta journée, Tu as des fringales en fin de matinée, Ton humeur est changeante, tu t'énerves facilement",
  },
  {
    question: 'Comment puis-je éviter de manger trop de sucres cachés?',
    answer:
      "Divisez par 2 les produits sucrés (bonbons, gâteaux, sodas) que vous avez l'habitude de consommer quotidiennement durant 1 semaine. Passez à une consommation de produits sucrés 1 jour sur 2 durant 1 semaine également. Tenez 3 jours sans produits sucrés. Réduisez à 1 fois par semaine votre plaisir sucré",
  },
  {
    question:
      'Comment puis-je intégrer plus de légumes dans mon alimentation au quotidien?',
    answer: 'Preparer beacoup de légumes',
  },
  {
    question:
      'Comment puis-je inclure plus de protéines végétales dans mon alimentation?',
    answer:
      'Commencez la journée avec des céréales à grains entiers ou un bol de gruau, Ajoutez des pois chiches, des lentilles ou des haricots noirs à votre soupe ou à votre salade au dîner',
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de graisses insaturées?',
    answer:
      "Sinon : Tu as besoin de café ++ pour démarrer ta journée, Tu as des fringales en fin de matinée, Ton humeur est changeante, tu t'énerves facilement",
  },
  {
    question:
      "Comment puis-je savoir si j'ai des problèmes de digestion et comment y remédier?",
    answer:
      " En cas de troubles digestifs fréquents, essayez d'arrêter la cigarette si vous êtes fumeur, et réduisez votre consommation d'alcool et de café",
  },
  {
    question:
      "Comment puis-je savoir si j'ai des problèmes de digestion et comment y remédier?",
    answer:
      " En cas de troubles digestifs fréquents, essayez d'arrêter la cigarette si vous êtes fumeur, et réduisez votre consommation d'alcool et de café",
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de calcium?',
    answer: 'Robustesse des os',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine D?',
    answer:
      'Une carence en vitamine D influe sur la capacité du système immunitaire à nous protéger des infections',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine E?',
    answer:
      "Les principaux symptômes sont l'anémie hémolytique et des troubles neurologiques.",
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine K?',
    answer:
      "Le symptôme principal de la carence en vitamine K consiste en des saignements (hémorragies) sous-cutanés (provoquant des ecchymoses), du nez, d'une blessure",
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine A?',
    answer:
      "La carence en vitamine A peut être due à un régime pauvre en vitamine A ou à un trouble de l'absorption ou hépatique",
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine C?',
    answer:
      'une carence en vitamine C peut également se traduire par une perte de poids plus ou moins significative',
  },
  {
    question: 'Comment puis-je savoir si je mange suffisamment de vitamine B6?',
    answer:
      'la carence en vitamine B6 peut provoquer une inflammation de la peau (dermatite) et une éruption cutanée rouge, huileuse et squameuse. Un engourdissement et une sensation de fourmillement semblable à des piqûres peuvent apparaître dans les mains et les pieds',
  },
  {
    question:
      'Comment puis-je savoir si je mange suffisamment de vitamine B12?',
    answer:
      "Le diagnostic de la carence en vitamine B12 est basé sur les analyses de sang. En prenant des suppléments de vitamine B12 à hautes doses, les symptômes de l'anémie ont tendance à disparaître.",
  },
];
export default function SearchEngine() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = () => {
    console.log('ce qui est recherche est : ', query);

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
    minHeight: 30,
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
