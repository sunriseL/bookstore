import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
    render() {
        return (
          <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><NavLink to="/view">书籍库存</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/login">登录/注册</NavLink></Menu.Item>
      </Menu>
    </Header>
          /*<Toolbar style={{backgroundColor:'#03A9F4'}}>
      <ToolbarGroup firstChild={true}>
      <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <Link to="/view"><MenuItem primaryText="商品页面" /></Link>
      <MenuItem primaryText="购物车" />
      <MenuItem primaryText="订单信息" />
      <Link to="/login"><MenuItem primaryText="登录/登出" /></Link>
    </IconMenu>

      </ToolbarGroup>
      <ToolbarGroup>
      <TextField
      hintText="搜索"/>
      </ToolbarGroup>
    </Toolbar>*/
        )
    }
}
