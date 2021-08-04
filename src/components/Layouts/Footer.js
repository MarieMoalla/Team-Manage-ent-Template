import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";

const Footer = ({ contained, menuItems, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      
      <Row>
        <Nav>
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink tag={Link} to={item.to}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Row>
    </Container>
  </footer>
);

Footer.propTypes = {
  
  contained: PropTypes.bool,
 
  menuItems: PropTypes.array,
  
  copyright: PropTypes.string
};

Footer.defaultProps = {
  contained: false,
  copyright: "Copyright © 2018 DesignRevision",
  menuItems: [
    {
      title: "Home",
      to: "/userProfile"
    },
    
  ]
};

export default Footer;