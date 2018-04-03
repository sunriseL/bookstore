import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
import Login from 'pages/Login/Login';
import View from 'pages/View/View';
import Register from 'pages/Register/Register'
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import MyHeader from 'component/Header/Header';
import { Layout } from 'antd';

import 'antd/lib/layout/style';
import 'antd/lib/menu/style';
const { Header, Content, Footer } = Layout;
const getRouter = () => (
    <Router>
        <Layout>
            <MyHeader></MyHeader>
             <Content style={{ padding: '0 50px' }}>


                <Route componet exact path="/login" component={Login}/>
                <Route componet exact path="/view" component={View}/>
                <Route componet exact path="/register" component={Register}/>
                <Route path="*" component={Login} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
      Bookstore Created by Sunrise
    </Footer>
        </Layout>
    </Router>
);

export default getRouter;
