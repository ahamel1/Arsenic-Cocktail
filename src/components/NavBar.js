import React from 'react';
import { Icon, Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const menuStyle = {
      boxShadow : "none",
      border : 'none'
    }

    return (
      <Menu borderless icon style= {menuStyle}>
        <Menu.Menu position= "right">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='home' />
        </Menu.Item>

        <Menu.Item
          name='info'
          active={activeItem === 'info'}
          onClick={this.handleItemClick}
        >
          <Icon name='info' />
        </Menu.Item>

        <Menu.Item
          name='at'
          active={activeItem === 'at'}
          onClick={this.handleItemClick}
        >
          <Icon name='at' />
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
