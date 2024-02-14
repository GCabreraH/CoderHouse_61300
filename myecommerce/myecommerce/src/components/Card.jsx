import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container,...style}}>
      {children}
    </View>
  );
};

export default Card

const styles = StyleSheet.create({
    container:{
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 4,
    },

});