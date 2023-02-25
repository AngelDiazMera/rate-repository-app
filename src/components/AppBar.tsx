import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';
import { theme } from '../theme';
import { Link, useLocation } from 'react-router-native';

function AppBar() {
  return (
    <View style={styles.container}>
      <StyledText style={{ color: theme.colors.white }}>Default</StyledText>
      <ScrollView horizontal style={styles.tabs}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
}

interface AppBarTabProps {
  children: ReactNode;
  to: string;
}
function AppBarTab({ children, to }: AppBarTabProps) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  const textStyles = [styles.tab, isActive && styles.activeTab];

  return (
    <Link to={to}>
      <StyledText style={textStyles} fontSize="subheading" fontWeight="bold">
        {children}
      </StyledText>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 10,
  },
  tab: {
    marginHorizontal: 5,
    color: theme.appBar.textSecondary,
  },
  activeTab: {
    color: theme.appBar.textPrimary,
  },
  tabs: {
    paddingBottom: 10,
  },
});

export default AppBar;
