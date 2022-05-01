import * as React from 'react';
import {useCallback} from 'react';
import type {ImageSourcePropType} from 'react-native';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from '../../styles';

const coverImage = require('screens/BlaireHome/assets/cover.png');

type Props = {
  cardImageSource: ImageSourcePropType;
  onPress: () => void;
};

function SingleCard(props: Props) {
  const {cardImageSource, onPress} = props;

  const handleClick = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <View>
      <View style={styles.card}>
        <Image source={cardImageSource} style={styles.image} />
        <TouchableOpacity onPress={handleClick}>
          <Image source={coverImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SingleCard;
