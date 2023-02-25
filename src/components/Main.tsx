import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Routes, Route } from 'react-router-native';
import AppBar from './AppBar';
import LoginPage from './LoginPage';
import RepositoryList from './RepositoryList';
import StyledText from './StyledText';

function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
