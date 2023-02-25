import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { theme } from '../theme';

interface StyledTextProps extends TextProps {
  color?: 'primary' | 'secondary';
  fontWeight?: 'normal' | 'bold';
  fontSize?: 'subheading' | 'body';
}

function StyledText({ style, children, ...props }: StyledTextProps) {
  const textStyle = [
    styles.text,
    props.color === 'primary' && styles.primaryColor,
    props.color === 'secondary' && styles.secondaryColor,
    props.fontWeight === 'bold' && styles.fontWeightBold,
    props.fontWeight === 'normal' && styles.fontWeightNormal,
    props.fontSize === 'subheading' && styles.fontSizeSubheading,
    props.fontSize === 'body' && styles.fontSizeBody,
    style,
  ];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal as any,
  },
  primaryColor: {
    color: theme.colors.textPrimary,
  },
  secondaryColor: {
    color: theme.colors.textSecondary,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold as any,
  },
  fontWeightNormal: {
    fontWeight: theme.fontWeights.normal as any,
  },

  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeBody: {
    fontSize: theme.fontSizes.body,
  },
});

export default StyledText;
