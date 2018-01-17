import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import updateDimensions from './components/Shared/actions/updateDimensions';
import toggleSideNav from './components/Shared/actions/toggleSideNav';
import updateCoins from './components/Shared/actions/updateCoins';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';

// use asynComponent for components that will be rendered
// as a Route component's component={} attribute
// in order for webpack to use code splitting and create better browser load times
const Layout = asyncComponent({
    resolve: () => import('./components/Layout/Layout')
});

// components that don't need to be code-split by webpack because they aren't loaded by a react-router route
import TopNav from './components/Shared/components/TopNav/TopNav';
import SideNav from './components/Shared/components/SideNav/SideNav';

class Router extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.updateDimensions({
            width: $(window).width(),
            height: $(window).height()
        });

        $(window).on('resize', () => {
            this.props.updateDimensions({
                width: $(window).width(),
                height: $(window).height()
            });

            this.props.toggleSideNav(false);
        });
    }

    componentDidMount() {
        // when app loads populate coins once
        axios.get('/api/coins')
             .then((coins) => this.props.updateCoins(coins.data));

        // whenever new coin data socket events are sent, 
        // update coins in redux      
        window.___SOCKET___.on('update-coins', (coins) => {
            this.props.updateCoins(coins);
        });
    }

    render() {
        // if side nav is open, adjust position of main app content 
        // to accomodate for side nav being open
        let mainContentClass = '';

        if(this.props.sideNavOpen) {
            mainContentClass += 'main-content-container-left-open';
        }

        return (
            <BrowserRouter>
                <div>
                    <TopNav />
                    { this.props.windowWidth < 585 ? <SideNav /> : <span></span> }
                    
                    <div className={ `main-content-container ${ mainContentClass }` }>
                        <Switch>
                            <Route exact path='/huey' component={ Layout } />
                            <Route exact path='/luey' component={ Layout } />
                            <Route exact path='/duey' component={ Layout } />
                            <Redirect from='*' to='/huey' />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        sideNavOpen: state.sideNav.sideNavOpen,
        windowWidth: state.dimensions.width
    };
}

export default connect(mapStateToProps, { updateDimensions, toggleSideNav, updateCoins })(Router);