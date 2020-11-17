import React from 'react';
import {
    FlatList,
} from 'react-native';
import { 
    Card,
    Separator,
    AddressView,
    Title,
    Subtitle
  } from './styled'

// a Simple list render (flatlist) for Practices (we can also change it generic)

const ListRenderer = (props: any) => {
    const {
        data,
        renderSeparator = () => null,
        scrollEnabled = true,
        showsVerticalScrollIndicator = false,
        keyExtractor = (item: any, index: any) => index.toString(),
        onItemSelect,
        ...rest
    } = props;

    const onSelect = (item: any) => {
        onItemSelect(item);
    };

    return (
        <>
            <FlatList
                style={{ flexGrow: 1 }}
                contentContainerStyle={{paddingVertical : 12 }} 
                extraData={data}
                data={data}
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                scrollEnabled={scrollEnabled}
                ItemSeparatorComponent={() => <Separator />}
                keyExtractor={keyExtractor}
                renderItem={({ item }: any) => {
                    const { name, address   } =  item;
                    const { postCode, street, city   } =  address;
                    return (
                        <Card onPress={() => onSelect(item)} activeOpacity={0.7}>
                            <Title>{name}</Title>
                            <AddressView>
                                <Subtitle>{`${street}, ${city}`}</Subtitle>
                                <Subtitle {...{ italic : true}}>{postCode}</Subtitle>
                            </AddressView>
                        </Card>
                    )
                }}
                {...rest} //for the rest of props if want to pass from parent
            />
        </>
    );

};


export default React.memo(ListRenderer);
