import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './components/Greeting';
import Navigation from './components/Navigation';
import Text from './components/Text';
import { tx } from '@transifex/native';
import { useLocale } from '@transifex/react';

tx.init({
  token: process.env.REACT_APP_TRANSIFEX_TOKEN,
});

function App() {
  const locale = useLocale();

  useEffect(() => {
    if (locale) {
      document.body.style.direction = locale === 'en' ? 'ltr' : 'rtl';
    }
  }, [locale])
  return (
    <>
      <Navigation />
      <Container>
      	<Greeting />
      	<Text />
      </Container>
    </>
  );
}

export default App;