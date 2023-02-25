import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from './StyledText';

interface RepositoryStatProps {
  title: string;
  value: number | string;
}
function RepositoryStat({ value, title }: RepositoryStatProps) {
  if (value >= 1000) {
    value = `${Math.round(Number(value) / 100) / 10}k`;
  }

  return (
    <View>
      <StyledText
        style={styles.centerAligned}
        fontWeight="bold"
        fontSize="subheading"
      >
        {value}
      </StyledText>
      <StyledText style={styles.centerAligned}>{title}</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  centerAligned: {
    textAlign: 'center',
  },
});

export default RepositoryStat;
