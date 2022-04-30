import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Linking, Text, View} from 'react-native';
import Button from 'components/Button';

import styles from './styles';
import SingleCard from './SingleCard';

const blue = require('./assets/blue.png');
const red = require('./assets/red.png');
const orange = require('./assets/orange.png');
const green = require('./assets/green.png');
const yellow = require('./assets/yellow.png');
const purple = require('./assets/purple.png');

const cardImages = [
  {src: blue},
  {src: red},
  {src: orange},
  {src: green},
  {src: yellow},
  {src: purple},
];

type Props = {};

function BlaireHome(props: Props) {
  const [cards, setCards] = useState<any[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<any>(null);
  const [choiceTwo, setChoiceTwo] = useState<any>(null);

  const shuffleCards = useCallback(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));

    setCards(shuffledCards);
    setTurns(0);
  }, []);

  const handleChoice = useCallback((card) => {
    console.log(`choice 1: ${choiceOne} choice 1: ${choiceTwo}`);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }, []);

  const resetChoices = useCallback(() => {
    console.log('resetting choices');
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      console.log('we have both choices');
      if (choiceOne.src === choiceTwo.src) {
        console.log('we have a match!');
        resetChoices();
      } else {
        console.log('cards do not match');
        resetChoices();
      }
    } else {
      console.log('both choices are null');
    }
  }, [choiceOne, choiceTwo]);

  const onPress = useCallback(() => {
    Linking.openURL('https://dintaifungusa.com/');
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`B L A I R E`}</Text>
      <Button onPress={onPress} title="Press me" />
      <Button onPress={shuffleCards} title="New Game" />
      <View style={styles.gameContainer}>
        {cards.map((card) => (
          <SingleCard card={card} handleChoice={handleChoice} key={card.id} />
        ))}
      </View>
    </View>
  );
}

export default BlaireHome;
