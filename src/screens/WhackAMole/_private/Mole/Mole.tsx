import {MoleState} from './types';

import * as React from 'react';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';

import utils from 'lib/utils';

import styles from './styles';

type Props = {};

const TIME_UNTIL_SURFACE_RANGE = [1000, 10000] as const;
const TIME_UNTIL_BURROW_RANGE = [500, 1500] as const;

function Mole(props: Props) {
  const [moleState, setMoleState] = useState<MoleState>(MoleState.Burrowed);
  const [currentTimeoutId, setCurrentTimeoutId] =
    useState<NodeJS.Timeout | null>(null);

  const setBurrowTimeout = useCallback(() => {
    const timeoutMs = Math.round(
      utils.randomNumberFromRange(...TIME_UNTIL_BURROW_RANGE),
    );
    console.log('burrowing in', timeoutMs);
    const timeoutId = setTimeout(() => {
      setMoleState(MoleState.Burrowed);
      setCurrentTimeoutId(null);
    }, timeoutMs);
    setCurrentTimeoutId(timeoutId);
  }, []);

  const setSurfaceTimeout = useCallback(() => {
    const timeoutMs = Math.round(
      utils.randomNumberFromRange(...TIME_UNTIL_SURFACE_RANGE),
    );
    console.log('waiting to surface in', timeoutMs);
    const timeoutId = setTimeout(() => {
      setMoleState(MoleState.Surfaced);
      setCurrentTimeoutId(null);
    }, timeoutMs);
    setCurrentTimeoutId(timeoutId);
  }, []);

  useEffect(() => {
    if (currentTimeoutId == null) {
      switch (moleState) {
        case MoleState.Burrowed:
          setSurfaceTimeout();
          break;
        case MoleState.Surfaced:
          setBurrowTimeout();
          break;
        default:
      }
    }
  }, [currentTimeoutId, moleState, setBurrowTimeout, setSurfaceTimeout]);

  useEffect(() => {
    return () => {
      if (currentTimeoutId != null) {
        clearTimeout(currentTimeoutId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPress = useCallback(() => {
    if (moleState === MoleState.Surfaced) {
      setMoleState(MoleState.Whacked);
    }
  }, [moleState]);

  const backgroundColor = useMemo(() => {
    switch (moleState) {
      case MoleState.Burrowed:
        return 'gray';
      case MoleState.Surfaced:
        return 'steelblue';
      case MoleState.Missed:
        return 'red';
      case MoleState.Whacked:
        return 'green';
      default:
        return 'gray';
    }
  }, [moleState]);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={{
          borderColor: 'white',
          borderWidth: 2,
          height: 100,
          width: 100,
          backgroundColor,
        }}
      />
    </Pressable>
  );
}

export default Mole;
