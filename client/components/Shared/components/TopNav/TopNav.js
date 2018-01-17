import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MemberIcon from 'material-ui/svg-icons/social/person';

import toggleSideNav from '../../actions/toggleSideNav';
import updateSelectedMember from '../../actions/updateSelectedMember';

import AppBar from 'material-ui/AppBar';

class TopNav extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        };
    }

    updateCurrentTab() {
        switch (this.props.history.location.pathname) {
            case '/huey':
                this.setState({
                    currentTab: 0
                });

                this.props.updateSelectedMember(this.props.history.location.pathname.slice(1));
                break;
            case '/luey':
                this.setState({
                    currentTab: 1
                });

                this.props.updateSelectedMember(this.props.history.location.pathname.slice(1));
                break;
            case '/duey':
                this.setState({
                    currentTab: 2
                });

                this.props.updateSelectedMember(this.props.history.location.pathname.slice(1));
                break;
        }
    }
    
    componentDidMount() {
        this.updateCurrentTab();

        this.props.history.listen(() => {
            this.updateCurrentTab();
        });
    }

    handleChange(tab) {
        switch (tab) {
            case 0:
                this.props.history.push('/huey');
                break;

            case 1:
                this.props.history.push('/luey');
                break;
      
            case 2:
                this.props.history.push('/duey');
                break;
        }
    }

    render() {
        const tabStyle = {
            height: 65,
            minWidth: 130
        };

        return (
            <div className='top-nav-container'>
                <AppBar iconElementLeft={ this.props.windowWidth < 585 ? <IconButton><MenuIcon /></IconButton> : <span></span> }
                        onLeftIconButtonTouchTap={ () => this.props.toggleSideNav() }
                        title={ <div className='top-nav-title'><Link to='/'><h2>Crypto Crew</h2></Link></div> }
                        children={ this.props.windowWidth < 585 ? [] : [
                            <Tabs key='1' 
                                  className='top-nav-tabs' 
                                  onChange={ this.handleChange.bind(this) }
                                  value={ this.state.currentTab } 
                                  inkBarStyle={{ color: 'rgb(0, 218, 179)', backgroundColor: 'rgb(0, 218, 179)' }}>
                                
                                <Tab label='Huey' icon={ <MemberIcon /> } value={ 0 } style={ tabStyle } />
                                <Tab label='Luey' icon={ <MemberIcon /> } value={ 1 } style={ tabStyle } />
                                <Tab label='Duey' icon={ <MemberIcon /> } value={ 2 } style={ tabStyle } />
                            </Tabs>   
                        ]} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        windowWidth: state.dimensions.width
    };
}

export default withRouter(connect(mapStateToProps, { toggleSideNav, updateSelectedMember })(TopNav));