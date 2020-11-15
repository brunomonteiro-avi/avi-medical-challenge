import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPractices, setSelectedPractice } from './actions';
import {
    View,
    Text,
} from 'react-native';
import ListRenderer from '../../components/ListRenderer';

const PracticesListView = (props: any) => {
   
    const dispatch = useDispatch();

    const {
        error,
        loading,
        practices = [],
        selectedPractice = null
    } = useSelector(
        (state: any) => state.practicesReducer
    );

    useEffect(() => {
        dispatch(getPractices());
    }, []);

    const onItemSelect = (item: any) => {
        dispatch(setSelectedPractice(item));
    };

    return (
        <View style={{flex: 1}}>
            <Text>Practices List</Text>
            <ListRenderer 
              data={practices}
              onItemSelect={onItemSelect}
            />
        </View>
    );

};

export default PracticesListView;
