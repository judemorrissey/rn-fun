import * as React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

import Button from 'components/Button';

type Props = {};

const outputText = '1234';

function SemaHome(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <Text style={styles.text}>{outputText}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRowContainer}>
          <Button style={styles.button} title="/" />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button style={styles.button} title="7" />
          <Button style={styles.button} title="8" />
          <Button style={styles.button} title="9" />
          <Button style={styles.button} title="x" />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button style={styles.button} title="4" />
          <Button style={styles.button} title="5" />
          <Button style={styles.button} title="6" />
          <Button style={styles.button} title="-" />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button style={styles.button} title="1" />
          <Button style={styles.button} title="2" />
          <Button style={styles.button} title="3" />
          <Button style={styles.button} title="+" />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button style={styles.button} title="0" />
          <Button style={styles.button} title="00" />
          <Button style={styles.button} title="." />
          <Button style={styles.button} title="=" />
        </View>
      </View>
    </View>
  );
}

export default SemaHome;
