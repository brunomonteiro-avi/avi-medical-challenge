import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {
    Alert
} from 'react-native';
import AnnotationContent from '../../components/AnnotationContent';
import {
    Container,
    MapView,
    Footer,
    Button,
    ButtonText,
    MapSelfLocationButton,
    MapSelfLocationButtonText
} from '../../components/styled'
import * as strings from '../../translation/en.json'
import { MAPBOX_TOKEN} from '../../config/constants'
import { Practice } from './types'

// Set token for Mapbox
MapboxGL.setAccessToken(MAPBOX_TOKEN)

const practicesMapView = (props: any) => {

    const dispatch = useDispatch();
    const { goBack } = props.navigation;

    //For user location
    const [showUserLocation, setShowUserLocation] = useState<any>(false);

    const {
        error,
        loading,
        practices = [] as Practice[],
        selectedPractice = null
    } = useSelector(
        (state: any) => state.practicesReducer
    );

    //when user press its location
    const onUserMarkerPress = (): void => {
        Alert.alert('You pressed on the user location annotation');
    };


    //Render Mapbox
    const renderMap = useMemo(() => {
        const { lat, lon, zoom } = selectedPractice ? selectedPractice?.address.geolocation : practices[0].address.geolocation;
        return (
            <MapboxGL.MapView
                style={{ flex: 1 }}
                scrollEnabled={true}
                userTrackingMode={MapboxGL.UserTrackingModes.Follow}
            >
                <MapboxGL.Camera followUserLocation={showUserLocation} zoomLevel={selectedPractice ? zoom : 10} centerCoordinate={[lon, lat]} />
                <MapboxGL.UserLocation
                    visible={showUserLocation}
                    onPress={onUserMarkerPress}
                />

                {selectedPractice ?
                    <MapboxGL.MarkerView coordinate={[lon, lat]} id={String(selectedPractice.practiceId)}>
                        <AnnotationContent />
                    </MapboxGL.MarkerView> :
                    practices.map((item: any, i: any) => {
                        let { lat, lon } = item.address.geolocation
                        return (
                            <MapboxGL.MarkerView key={i} coordinate={[lon, lat]} id={String(item.practiceId)}>
                                <AnnotationContent />
                            </MapboxGL.MarkerView>
                        );
                    })
                }

            </MapboxGL.MapView>
        )
    }, [showUserLocation]);

    return (
        <Container>
            <MapView>
                {renderMap}
                <MapSelfLocationButton {...{ active: showUserLocation }} onPress={() => setShowUserLocation(!showUserLocation)} >
                    <MapSelfLocationButtonText {...{ active: showUserLocation }}>{strings.button.selfLocation}</MapSelfLocationButtonText>
                </MapSelfLocationButton>
            </MapView>
            <Footer>
                <Button activeOpacity={0.7} onPress={() => goBack(null)} >
                    <ButtonText>{strings.button.back}</ButtonText>
                </Button>
            </Footer>
        </Container>
    );

};


export default practicesMapView;
