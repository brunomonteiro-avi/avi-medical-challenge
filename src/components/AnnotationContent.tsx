import React from 'react';
import {
    MarkerView,
    MarkerText
} from './styled'

const AnnotationContent = () => (
    <>
        <MarkerView >
            <MarkerText>P</MarkerText>
        </MarkerView>
    </>


);
export default React.memo(AnnotationContent);
