import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';

const ListRenderer = (props: any) => {
    const {
        data,
        renderSeparator = () => null,
        scrollEnabled = false,
        showsVerticalScrollIndicator= false,
        keyExtractor = (item :any, index: any) => index.toString(),
        onItemSelect,
        ...rest
      } = props;

    const onSelect = (item: any) => {
        onItemSelect(item);
    };

    return (
        <>
            <FlatList
                style={{ flex: 1,  }}
                extraData={data}
                data={data}
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                scrollEnabled={scrollEnabled}
                ItemSeparatorComponent={() => null}
                keyExtractor={keyExtractor}
                renderItem={({ item }: any) => {
                    return (
                        <TouchableOpacity onPress={() => onSelect(item)} activeOpacity={0.7}>
                            <Text> Click me</Text>
                        </TouchableOpacity>
                    )
                }}
                {...rest}
            />
        </>
    );

};

export default React.memo(ListRenderer);
