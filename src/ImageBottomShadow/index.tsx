import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export const ImageBottomShadow = () => {
  return (
    <View style={styles.imgContainerStyle}>
      <Image
        source={{
          uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        }}
        style={styles.imageStyle}
      />
      <View style={styles.shadowOverlay} />
      <Text style={styles.titleText}>Gilbert Dom</Text>
    </View>
  );
};
