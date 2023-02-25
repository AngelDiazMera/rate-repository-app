import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Repository } from '../data/repositories';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';

function RepositoryItem(props: Repository) {
  return (
    <View style={styles.container} key={props.id}>
      <RepositoryHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default RepositoryItem;
