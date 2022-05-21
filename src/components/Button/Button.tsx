import type {StyleProp, ViewStyle} from 'react-native';

import * as React from 'react';
import {useCallback} from 'react';
import {ActivityIndicator, Pressable, StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import styles from './styles';

type Props = {
  onPress?: () => void;
  showActivityIndicator?: boolean;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

const ANIMATION_SCALE_VALUES = [1, 1.2];

function Button(props: Props) {
  const {onPress, style, showActivityIndicator = false, title = ''} = props;

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
        {showActivityIndicator ? (
          <ActivityIndicator style={styles.activityIndicator} />
        ) : null}
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

export default Button;
