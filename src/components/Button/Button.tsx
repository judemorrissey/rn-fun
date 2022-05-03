import type {StyleProp, ViewStyle} from 'react-native';

import * as React from 'react';
import {useCallback} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import styles from './styles';

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

const ANIMATION_SCALE_VALUES = [1, 1.2];

function Button(props: Props) {
  const {onPress, style, title = ''} = props;

  const scale = useSharedValue(ANIMATION_SCALE_VALUES[0]);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(scale.value),
        },
      ],
    };
  });

  const onPressIn = useCallback(() => {
    scale.value = ANIMATION_SCALE_VALUES[1];
  }, [scale]);

  const onPressOut = useCallback(() => {
    scale.value = ANIMATION_SCALE_VALUES[0];
  }, [scale]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      testID="button">
      <Animated.View
        style={[StyleSheet.compose(styles.container, style), animatedStyles]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

export default Button;
