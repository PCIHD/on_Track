import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const TracklistScreen = ({navigation}) =>{
    return <><Text style = {{fontSize:48}}> Tracklistceen</Text>
        <Button title = 'goto track detail' onPress={() => navigation.navigate('TrackDetail')}/></>
};

const styles = StyleSheet.create({});
export default TracklistScreen;
