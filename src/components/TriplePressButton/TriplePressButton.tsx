import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';

type Props = {
  onPress?: () => void;
  title?: string;
};

const MIN_NUM_PRESSES = 3;

function TriplePressButton(props: Props) {
  const {onPress, title = ''} = props;

  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | void;
    if (countdown < MIN_NUM_PRESSES) {
      timeoutId = setTimeout(() => {
        setCountdown(MIN_NUM_PRESSES);
      }, 3000);
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
      return;
    }
    onPress?.();
  }, [countdown, onPress]);

  return (
    <Pressable
      onPress={internalOnPress}
      style={styles.container}
      testID="button">
      <Text style={styles.text}>{`${countdown} ${title}`}</Text>
    </Pressable>
  );
}

export default TriplePressButton;
