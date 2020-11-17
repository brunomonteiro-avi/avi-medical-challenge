import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPractices, setSelectedPractice } from './actions';
import ListRenderer from '../../components/ListRenderer';
import Logo from '../../components/Logo';
import * as Routes from '../../config/routes';
import {
  Container,
  Header,
  Body,
  LogoText,
  Footer,
  Button,
  ButtonText,
  Loader,
  ErrorMessage
} from '../../components/styled'
import * as strings from '../../translation/en.json'


const PracticesListView = (props: any) => {

  const dispatch = useDispatch();
  const { navigate } = props.navigation;

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
    navigate(Routes.ROUTE_PRACTICES_MAP)
  };

  const showAll = () => {
    dispatch(setSelectedPractice(null));
    navigate(Routes.ROUTE_PRACTICES_MAP)
  };

  return (
    <Container >
      <Header>
        <Logo />
        <LogoText>{strings.logoText}</LogoText>
      </Header>
      <Body>
        {loading &&
          <Loader size="large" color = '#3a0c3e'/>
        }
        {error &&
           <ErrorMessage>
               {error}
           </ErrorMessage>
        }
        <ListRenderer
          data={practices}
          onItemSelect={onItemSelect}
        />
      </Body>
      <Footer>
        <Button activeOpacity={0.7} onPress={() => showAll()} disabled={loading || error}>
          <ButtonText>{strings.button.showAll}</ButtonText>
        </Button>
      </Footer>
    </Container>
  );

};


export default PracticesListView;

