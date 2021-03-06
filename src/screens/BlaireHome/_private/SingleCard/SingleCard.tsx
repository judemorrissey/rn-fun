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

const NUM_COLS = 4;
const WIDTH = Dimensions.get('screen').width;

type Props = {
  cardImageSource: ImageSourcePropType;
  isFlipped: boolean;
  onPress: () => void;
};

function SingleCard(props: Props) {
  const {cardImageSource, onPress, isFlipped} = props;
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [internalFlipped, setInternalFlipped] = useState<boolean>(isFlipped);

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
      rotation.value = withTiming(
        90,
        {
          duration: 300,
        },
        () => {
          runOnJS(setInternalFlipped)(isFlipped);
          rotation.value = withTiming(0, {
            duration: 300,
          });
        },
      );
    } else {
      setIsInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipped, rotation]);

  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <View>
      <Animated.View
        style={[styles.card, {height: WIDTH / NUM_COLS}, animatedStyle]}>
        <Pressable onPress={handlePress}>
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
