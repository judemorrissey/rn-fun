import type {ViewStyle} from 'react-native';

import * as React from 'react';
import {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styles from './styles';

type Props = {
  character?: string | null;
  style?: ViewStyle;
};

function CharacterTile(props: Props) {
  const {character = '', style} = props;

  const safeCharacter = useMemo(() => {
    return character?.slice(0, 1) ?? '';
  }, [character]);

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      <Text style={styles.character}>{safeCharacter}</Text>
    </View>
  );
}

export default CharacterTile;
