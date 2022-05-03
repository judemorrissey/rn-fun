import * as React from 'react';
import {useCallback} from 'react';
import type {ImageSourcePropType} from 'react-native';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const coverImage = require('screens/BlaireHome/assets/cover.png');

const numCols = 4;
const WIDTH = Dimensions.get('screen').width;

type Props = {
  cardImageSource: ImageSourcePropType;
  onPress: () => void;
  flipped: boolean;
};

function SingleCard(props: Props) {
  const {cardImageSource, onPress, flipped} = props;

  const handleClick = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <View>
      <View style={[styles.card, {height: WIDTH / numCols}]}>
        <View>
          <Image
            source={cardImageSource}
            style={
              flipped
                ? [styles.image, styles.flipped]
                : [styles.image, styles.unflipped]
            }
          />
          <TouchableOpacity onPress={handleClick}>
            <Image
              source={coverImage}
              style={flipped ? styles.unflipped : styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SingleCard;
