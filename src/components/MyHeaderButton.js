import * as React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
// define IconComponent, color, sizes and OverflowIcon in one place
const IonicHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : Colors.star}
    {...props}
  />
);

export const MyHeaderButton = (props) => {
  return <HeaderButtons HeaderButtonComponent={IonicHeaderButton} {...props} />;
};
