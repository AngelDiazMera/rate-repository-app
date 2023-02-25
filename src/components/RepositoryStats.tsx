import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Repository } from '../data/repositories';
import RepositoryStat from './RepositoryStat';

function RepositoryStats(props: Repository) {
  return (
    <View style={styles.stats}>
      <RepositoryStat title="Stars" value={props.stargazersCount} />
      <RepositoryStat title="Forks" value={props.forksCount} />
      <RepositoryStat title="Review" value={props.reviewCount} />
      <RepositoryStat title="Rating" value={props.ratingAverage} />
    </View>
  );
}

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default RepositoryStats;
