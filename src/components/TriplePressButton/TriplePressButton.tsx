import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

type Props = {
  onPress?: () => void;
  title?: string;
};

const ANIMATION_ROTATION_VALUES = [0, 3];
const ANIMATION_SCALE_VALUES = [1, 1.2];
const ANIMATION_INITIAL_GROW_DURATION = 200;
const MIN_NUM_PRESSES = 3;
const RESET_TIMEOUT = 3000;

function TriplePressButton(props: Props) {
  const {onPress, title = ''} = props;

  const [countdown, setCountdown] = useState<number>(3);

  const rotation = useSharedValue(ANIMATION_ROTATION_VALUES[0]);
  const animatedRotationStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  });

  const scale = useSharedValue(ANIMATION_SCALE_VALUES[0]);
  const animatedScaleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | void;
    if (countdown < MIN_NUM_PRESSES) {
      timeoutId = setTimeout(() => {
        setCountdown(MIN_NUM_PRESSES);
        rotation.value = withSequence(
          withTiming(-ANIMATION_ROTATION_VALUES[1], {duration: 50}),
          withRepeat(
            withTiming(ANIMATION_ROTATION_VALUES[1], {duration: 50}),
            6,
            true,
          ),
          withTiming(-ANIMATION_ROTATION_VALUES[0], {duration: 50}),
        );
      }, RESET_TIMEOUT);
    }
    return () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
    };
  }, [countdown]);

  const internalOnPress = useCallback(() => {
    if (countdown !== 1) {
      setCountdown(countdown - 1);
      scale.value = withSequence(
        withTiming(ANIMATION_SCALE_VALUES[1], {
          duration: ANIMATION_INITIAL_GROW_DURATION,
          easing: Easing.out(Easing.exp),
        }),
        withTiming(ANIMATION_SCALE_VALUES[0], {
          duration: RESET_TIMEOUT - ANIMATION_INITIAL_GROW_DURATION,
        }),
      );
      return;
    }
    onPress?.();
  }, [countdown, onPress, scale]);

  return (
    <Pressable onPress={internalOnPress} testID="button">
      <Animated.View
        style={[styles.container, animatedRotationStyles, animatedScaleStyles]}>
        <Text style={styles.text}>{`${countdown} ${title}`}</Text>
      </Animated.View>
    </Pressable>
  );
}

export default TriplePressButton;
