import { View, Text } from 'react-native'
import React from 'react';
import {Button, Layout } from "@ui-kitten/components";


const CustomButton = ({onPress, text}) => {
  return (

        <Layout>
        <Button
          onPress={onPress}
          >
            {text}
          </Button>
        </Layout>


  )
}

export default CustomButton