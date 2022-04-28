import * as React from 'react';
import {useCallback, useMemo, useState} from 'react';
import {Alert, View} from 'react-native';

import TriplePressButton from 'components/TriplePressButton';

import Yordle from './_private/Yordle';

import styles from './styles';

type Props = {};

function JudeHome(props: Props) {
  const [isYordleTime, setIsYordleTime] = useState(false);

  const onPressTriple = useCallback(() => {
    setIsYordleTime(true);
    Alert.alert(`It's Yordle Time!`, 'Aw yisskskskskssk');
  }, []);

  const content = useMemo(() => {
    if (!isYordleTime) {
      return <TriplePressButton onPress={onPressTriple} title="Yordle?" />;
    }
    return <Yordle />;
  }, [isYordleTime, onPressTriple]);

  return <View style={styles.container}>{content}</View>;
}

export default JudeHome;
