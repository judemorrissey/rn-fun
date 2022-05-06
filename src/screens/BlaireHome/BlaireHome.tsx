import type {ImageSourcePropType, ListRenderItem} from 'react-native';

import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {FlatList, Linking, Text, View} from 'react-native';
import Button from 'components/Button';
import SingleCard from './_private/SingleCard';
import styles from './styles';

const numCols = 4;

const cardImages: Card[] = [
  {matched: false, src: require('./assets/blue.png')},
  {matched: false, src: require('./assets/red.png')},
  {matched: false, src: require('./assets/orange.png')},
  {matched: false, src: require('./assets/green.png')},
  {matched: false, src: require('./assets/yellow.png')},
  {matched: false, src: require('./assets/purple.png')},
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

  const onPressDinTaiFung = useCallback(() => {
    Linking.openURL('https://dintaifungusa.com/');
  }, []);

  const shuffleCards = useCallback(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));

    setCards(shuffledCards);
    setTurns(0);
  }, []);

  const resetChoices = useCallback(() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  }, []);

  useEffect(() => {
    if (choiceOne != null && choiceTwo != null) {
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
        setTimeout(() => {
          resetChoices();
        }, 2000);
      }
    }
  }, [choiceOne, choiceTwo, resetChoices]);

  const onPressCard = useCallback(
    (card) => () => {
      choiceOne == null ? setChoiceOne(card) : setChoiceTwo(card);
    },
    [choiceOne],
  );

  const renderItem: ListRenderItem<Card> = useCallback(
    ({item, index}) => {
      return (
        <SingleCard
          cardImageSource={item.src}
          flipped={item === choiceOne || item === choiceTwo || item.matched}
          key={item.id}
          onPress={onPressCard(item)}
        />
      );
    },
    [choiceOne, choiceTwo, onPressCard],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`B L A I R E`}</Text>
      <Button
        onPress={onPressDinTaiFung}
        style={{marginTop: 20}}
        title="Press me"
      />
      <Button
        onPress={shuffleCards}
        style={{marginTop: 20, marginBottom: 20}}
        title="New Game"
      />
      <Text style={styles.text}>{`Turns: ${turns}`}</Text>
      <FlatList
        data={cards}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numCols}
        renderItem={renderItem}
      />
    </View>
  );
}

export default BlaireHome;
