import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useRepositories } from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import StyledText from './StyledText';

function RepositoryList() {
  const { repositories, loading } = useRepositories();

  if (loading)
    return (
      <View style={{ flexDirection: 'row' }}>
        <ActivityIndicator />
        <StyledText> Loading repos ... </StyledText>
      </View>
    );

  if (repositories.length === 0)
    return (
      <View style={{ margin: 25, justifyContent: 'center' }}>
        <StyledText>No data available</StyledText>
      </View>
    );

  return (
    <FlatList
      data={repositories}
      renderItem={({ item, index }) => <RepositoryItem {...item} />}
    />
  );
}

export default RepositoryList;
