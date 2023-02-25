import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Repository } from '../data/repositories';
import { theme } from '../theme';
import StyledText from './StyledText';

function RepositoryHeader(props: Repository) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      <View style={styles.headerInfo}>
        <StyledText fontWeight="bold">{props.fullName}</StyledText>
        <StyledText color="secondary">{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  headerInfo: {
    paddingHorizontal: 5,
    flex: 1,
  },
  language: {
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    alignSelf: 'flex-start',
    padding: 5,
    marginVertical: 4,
  },
  image: {
    margin: 5,
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryHeader;
