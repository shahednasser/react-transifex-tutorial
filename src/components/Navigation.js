import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { tx } from '@transifex/native';
import { T, useLanguages, useLocale } from '@transifex/react';

function Navigation () {
  const languages = useLanguages();
  const locale = useLocale();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Transifex React Internationalization</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={!locale || locale === 'en' ? "ms-auto" : "me-auto"}>
            <NavDropdown title={<T _str="Language" />} id="basic-nav-dropdown">
              {languages.map(({code, name}) => (
                <NavDropdown.Item key={code} href="#" onClick={() => tx.setCurrentLocale(code)}>{name}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
