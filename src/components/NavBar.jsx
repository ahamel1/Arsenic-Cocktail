import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { activeItem: '' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name });
  }

  render () {
    const { activeItem } = this.state;
    const menuStyle = {
      boxShadow: 'none',
      border: 'none'
    };

    return (
      <Menu borderless icon style={menuStyle}>
        <Menu.Menu position='right'>
          <Link to='/'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              <Icon name='home' />
            </Menu.Item>
          </Link>
          <Link to='/legal'>
            <Menu.Item
              name='info'
              active={activeItem === 'info'}
              onClick={this.handleItemClick}
            >
              <Icon name='info' />
            </Menu.Item>
          </Link>
          <Link to='/about'>
            <Menu.Item
              name='at'
              active={activeItem === 'at'}
              onClick={this.handleItemClick}
            >
              <Icon name='at' />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
