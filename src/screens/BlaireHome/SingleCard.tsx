import * as React from 'react';
import {useCallback} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const coverImage = require('./assets/cover.png');

function SingleCard({card, handleChoice}: any) {
  const handleClick = useCallback(() => {
    handleChoice(card);
  }, []);

  return (
    <View>
      <View style={styles.card}>
        <Image source={card.src} style={styles.image} />
        <TouchableOpacity onPress={handleClick}>
          <Image source={coverImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SingleCard;
