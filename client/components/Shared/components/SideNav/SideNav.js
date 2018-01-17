import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import toggleSideNav from '../../actions/toggleSideNav';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import CloseIcon from 'material-ui/svg-icons/navigation/close';
import MemberIcon from 'material-ui/svg-icons/social/person';


class SideNav extends PureComponent {
    constructor(props) {
        super(props);
    }

    handleClick(e, val) {
        switch (val) {
            case 0:
                this.props.history.push('/huey');
                this.props.toggleSideNav(false);
                return;
            case 1:
                this.props.history.push('/luey');
                this.props.toggleSideNav(false);
                return;
            case 2:
                this.props.history.push('/duey');
                this.props.toggleSideNav(false);
                return;
        }
    }

    render() {
        return (
            <Drawer className='side-nav-container'
                    docked={ false }
                    width={ $(window).width() }
                    open={ this.props.sideNavOpen }
                    style={{ position: 'absolute', zIndex: 9999 }}
                    onRequestChange={ () => this.props.toggleSideNav() }>
                <Menu className='side-nav-menu' style={{ padding: 0, margin: 0, width: $(window).width() }} onChange={ this.handleClick.bind(this) }>
                    <MenuItem primaryText='Close' 
                              className='menu-item'
                              onClick={ () => this.props.toggleSideNav() }
                              leftIcon={ <CloseIcon style={{ fill: 'rgb(255,255,255)' }} /> } />

                    <MenuItem primaryText='Huey'
                              value={ 0 }
                              className={ 'menu-item' }
                              leftIcon={ <MemberIcon style={{ fill: 'rgb(255,255,255)' }} /> } />
                   
                    <MenuItem primaryText='Luey'
                              value={ 1 }
                              className={ 'menu-item' }
                              leftIcon={ <MemberIcon style={{ fill: 'rgb(255,255,255)' }} /> } />                          

                    <MenuItem primaryText='Duey'
                              value={ 2 }
                              className={ 'menu-item' }
                              leftIcon={ <MemberIcon style={{ fill: 'rgb(255,255,255)' }} /> } />                          
                </Menu>
            </Drawer>
        );
    }
}

function mapStateToProps(state) {
    return {
        sideNavOpen: state.sideNav.sideNavOpen
    };
}

export default withRouter(connect(mapStateToProps, { toggleSideNav })(SideNav));