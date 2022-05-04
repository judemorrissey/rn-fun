import type {ImageSourcePropType} from 'react-native';

import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Dimensions, Image, Pressable, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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

  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [internalFlipped, setInternalFlipped] = useState<boolean>(flipped);

  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${rotation.value}deg`,
        },
      ],
    };
  });

  useEffect(() => {
    if (isInitialized) {
      rotation.value =
        // "hide" the card's back
        withTiming(
          90,
          {
            duration: 500,
          },
          () => {
            // swap image here?
            runOnJS(setInternalFlipped)(flipped);

            // now "show" the card front
            rotation.value = withTiming(0, {
              duration: 500,
            });
          },
        );
    } else {
      setIsInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped, rotation]);

  const handleClick = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <View>
      <Animated.View
        style={[styles.card, {height: WIDTH / numCols}, animatedStyle]}>
        <Pressable onPress={handleClick}>
          <Image
            source={internalFlipped ? cardImageSource : coverImage}
            style={styles.image}
          />
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default SingleCard;
