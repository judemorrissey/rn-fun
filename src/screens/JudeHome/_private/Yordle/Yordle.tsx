import * as React from 'react';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';

import Grid from 'lib/Grid';

import Button from 'components/Button';
import CharacterTile from 'components/CharacterTile';

import styles from './styles';

type Props = {};

const BOARD_WIDTH = 5;
const BOARD_HEIGHT = 6;

function Yordle(props: Props) {
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const [theOneGrid, setTheOneGrid] = useState(
    new Grid<string>(BOARD_WIDTH, BOARD_HEIGHT, ''),
  );

  useEffect(() => {
    console.log({
      currentColumnIndex,
      currentRowIndex,
      derp: [...theOneGrid].reduce((c, {value}) => c + value, ''),
    });
  }, [currentColumnIndex, currentRowIndex, theOneGrid]);

  const board = useMemo(() => {
    const rows = [];
    for (let y = 0; y < theOneGrid.getHeight(); ++y) {
      const elements = [];
      for (let x = 0; x < theOneGrid.getWidth(); ++x) {
        const value = theOneGrid.get(x, y);
        elements.push(<CharacterTile character={value} key={`${x}:${y}`} />);
      }
      const row = (
        <View key={y} style={styles.rowContainer}>
          {elements}
        </View>
      );
      rows.push(row);
    }
    return <View style={styles.boardContainer}>{rows}</View>;
    // need to force board recalc when x/y coords change, otherwise letters wont appear on add
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theOneGrid, currentColumnIndex, currentRowIndex]);

  const onPressLetter = useCallback(
    (char) => () => {
      if (currentColumnIndex < theOneGrid.getWidth()) {
        theOneGrid.set(currentColumnIndex, currentRowIndex, char);
        setCurrentColumnIndex(currentColumnIndex + 1);
      }
    },
    [currentColumnIndex, currentRowIndex, theOneGrid],
  );

  const onPressBackspace = useCallback(() => {
    if (currentColumnIndex > 0) {
      theOneGrid.set(currentColumnIndex - 1, currentRowIndex, '');
      setCurrentColumnIndex(currentColumnIndex - 1);
    }
  }, [currentColumnIndex, currentRowIndex, theOneGrid]);

  const onPressSubmit = useCallback(() => {
    if (currentColumnIndex === theOneGrid.getWidth()) {
      setCurrentColumnIndex(0);
      setCurrentRowIndex(currentRowIndex + 1);
    }
  }, [currentColumnIndex, currentRowIndex, theOneGrid]);

  const buttons = useMemo(() => {
    return 'TEEMO'
      .split('')
      .map((char, index) => (
        <Button
          key={`${char}${index}`}
          onPress={onPressLetter(char)}
          title={char}
        />
      ))
      .concat([
        <Button key="backspace" onPress={onPressBackspace} title="Backspace" />,
        <Button key="submit" onPress={onPressSubmit} title="Submit" />,
      ]);
  }, [onPressBackspace, onPressLetter, onPressSubmit]);

  return (
    <View style={styles.container}>
      {board}
      {buttons}
    </View>
  );
}

export default Yordle;
