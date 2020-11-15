import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    View,
    Text,
} from 'react-native';

const practicesMapView = (props: any) => {
    
    const dispatch = useDispatch();

    const {
        error,
        loading,
    } = useSelector(
        (state: any) => state.practicesReducer
    );

    useEffect(() => {
    }, []);

    return (
        <View>
            <Text>Practices Map</Text>
        </View>
    );



};

export default practicesMapView;
