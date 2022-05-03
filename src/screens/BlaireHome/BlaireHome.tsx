import type {ImageSourcePropType} from 'react-native';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Dimensions, FlatList, Linking, Text, View} from 'react-native';
import Button from 'components/Button';

import SingleCard from './_private/SingleCard';

import {styles} from './styles';

// const dataList = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];

const numCols = 4;
const WIDTH = Dimensions.get('screen').width;

const cardImages: Card[] = [
  {src: require('./assets/blue.png'), matched: false},
  {src: require('./assets/red.png'), matched: false},
  {src: require('./assets/orange.png'), matched: false},
  {src: require('./assets/green.png'), matched: false},
  {src: require('./assets/yellow.png'), matched: false},
  {src: require('./assets/purple.png'), matched: false},
];

type Card = {
  id?: number;
  src: ImageSourcePropType;
  matched: boolean;
};

type Props = {};

function BlaireHome(props: Props) {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

  const shuffleCards = useCallback(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));

    setCards(shuffledCards);
    setTurns(0);
  }, []);

  const onPressCard = useCallback(
    (card) => () => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    },
    [choiceOne, choiceTwo],
  );

  const resetChoices = useCallback(() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true};
            }
            return card;
          });
        });
        resetChoices();
      } else {
        resetChoices();
      }
    }
  }, [choiceOne, choiceTwo, resetChoices]);

  const onPress = useCallback(() => {
    Linking.openURL('https://dintaifungusa.com/');
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles(WIDTH, numCols).item}>
        <SingleCard
          cardImageSource={item.src}
          flipped={item === choiceOne || item === choiceTwo || item.matched}
          key={item.id}
          onPress={onPressCard(item)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`B L A I R E`}</Text>
      <Button onPress={onPress} title="Press me" />
      <Button onPress={shuffleCards} title="New Game" />
      <View style={styles.gameContainer}>
        <View>
          <FlatList
            data={cards}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numCols}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
}

export default BlaireHome;
