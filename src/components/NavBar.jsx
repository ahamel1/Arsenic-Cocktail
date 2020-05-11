import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

const NavBar = () => {
  const menuStyle = {
    boxShadow: 'none',
    border: 'none',
  };

  return (
    <Menu id="menu" borderless icon style={menuStyle}>
      <Menu.Menu position="right">
        <Link to="/">
          <Menu.Item name="home">
            <Icon size="large" circular bordered name="home" />
          </Menu.Item>
        </Link>
        <Link to="/favori">
          <Menu.Item name="star outline">
            <Icon size="large" circular bordered name="star outline" />
          </Menu.Item>
        </Link>
        <Link to="/legal">
          <Menu.Item name="info">
            <Icon size="large" circular bordered name="info" />
          </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item name="at">
            <Icon size="large" circular bordered name="at" />
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
