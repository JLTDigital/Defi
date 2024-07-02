import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
  <Navbar className="nav-text p-2 mt-3" variant='dark' expand="lg" collapseOnSelect="true">
    <Container className='px-3'>
      <LinkContainer to='/'>
        <Navbar.Brand className='nav-brand'>Blockchain & DeFi <br/> Resources</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ml-auto">
          <LinkContainer to='/blockchain'>
            <Nav.Link>Blockchain</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/defi'>
          <Nav.Link>DeFi</Nav.Link>
          </LinkContainer>      

          <NavDropdown title="Ethereum" id="basic-nav-dropdown">
          <LinkContainer to='/ethereum'>
            <NavDropdown.Item>Ethereum</NavDropdown.Item>
          </LinkContainer>
            <LinkContainer to='/dapps'>
              <NavDropdown.Item>Dapps</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/nft'>
              <NavDropdown.Item>NFT</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/games'>
              <NavDropdown.Item>Games</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <LinkContainer to='/exchanges'>
              <NavDropdown.Item>Exchanges</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/links'>
              <NavDropdown.Item>Links</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/literature'>
              <NavDropdown.Item>Literature</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/developer'>
              <NavDropdown.Item href="#link">Developer</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/wallets'>
              <NavDropdown.Item>Wallets</NavDropdown.Item>
            </LinkContainer>

          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
