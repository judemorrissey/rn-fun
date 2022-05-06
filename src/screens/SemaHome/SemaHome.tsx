/* eslint-disable no-console */
import * as React from 'react';
import {useCallback, useState} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

import Button from 'components/Button';

type Props = {};
type Operator = '+' | '-' | '*' | '/';

function SemaHome(props: Props) {
  const [outputText, setOutputText] = useState<number>(0);
  const [leftSide, setLeftSide] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);

  const onPressDigit = useCallback(
    (digit) => () => {
      setOutputText(outputText * 10 + digit);
    },
    [outputText],
  );

  const onPressAsterisk = useCallback(() => {
    setOperator('*');
    setLeftSide(outputText);
    setOutputText(0);
  }, [outputText]);

  const onPressMinus = useCallback(() => {
    setOperator('-');
    setLeftSide(outputText);
    setOutputText(0);
  }, [outputText]);

  const onPressDivide = useCallback(() => {
    setOperator('/');
    setLeftSide(outputText);
    setOutputText(0);
  }, [outputText]);

  const onPressPlus = useCallback(() => {
    setOperator('+');
    setLeftSide(outputText);
    setOutputText(0);
  }, [outputText]);

  const onPress00 = useCallback(() => {
    setOutputText(outputText * 100);
  }, [outputText]);

  const onPressDot = useCallback(() => {
    console.log('.');
  }, []);

  const onPressEqual = useCallback(() => {
    if (leftSide != null) {
      switch (operator) {
        case '+':
          const sum = leftSide + outputText;
          setOutputText(sum);
          break;
        case '-':
          const difference = leftSide - outputText;
          setOutputText(difference);
          break;
        case '/':
          const quotient = leftSide / outputText;
          setOutputText(quotient);
          break;
        case '*':
          const product = leftSide * outputText;
          setOutputText(product);
          break;

        default:
          break;
      }
    }
  }, [leftSide, operator, outputText]);

  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <Text style={styles.text}>{outputText}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRowContainer}>
          <Button
            onPress={onPressDivide}
            style={styles.button}
            title="/"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            onPress={onPressDigit(7)}
            style={styles.button}
            title="7"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressDigit(8)}
            style={styles.button}
            title="8"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressDigit(9)}
            style={styles.button}
            title="9"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressAsterisk}
            style={styles.button}
            title="x"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            onPress={onPressDigit(4)}
            style={styles.button}
            title="4"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressDigit(5)}
            style={styles.button}
            title="5"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressDigit(6)}
            style={styles.button}
            title="6"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressMinus}
            style={styles.button}
            title="-"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            onPress={onPressDigit(1)}
            style={styles.button}
            title="1"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressDigit(2)}
            style={styles.button}
            title="2"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressDigit(3)}
            style={styles.button}
            title="3"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressPlus}
            style={styles.button}
            title="+"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            onPress={onPressDigit(0)}
            style={styles.button}
            title="0"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPress00}
            style={styles.button}
            title="00"
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressDot}
            style={styles.button}
            title="."
            titleStyle={styles.buttonText}
          />
          <Button
            onPress={onPressEqual}
            style={styles.button}
            title="="
            titleStyle={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
}

export default SemaHome;
