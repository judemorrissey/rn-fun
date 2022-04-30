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
          <Button
            style={styles.button}
            title="/"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            style={styles.button}
            title="7"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="8"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="9"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="x"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            style={styles.button}
            title="4"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="5"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="6"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="-"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            style={styles.button}
            title="1"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="2"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="3"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="+"
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button
            style={styles.button}
            title="0"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="00"
            titleStyle={styles.buttonText}
          />
          <Button
            style={styles.button}
            title="."
            titleStyle={styles.buttonText}
          />
          <Button
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
