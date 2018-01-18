import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { HOST } from '../../helpers/host';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MemberIcon from 'material-ui/svg-icons/action/face';
import BTCAddressIcon from 'material-ui/svg-icons/action/fingerprint';
import CoinIcon from 'material-ui/svg-icons/editor/attach-money';
import Paper from 'material-ui/Paper';

class MemberDetails extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            memberDetails: {}
        };
    }

    fetchUser(props) {
        axios.get(`${HOST}/api/members/${props.selectedMember}`)
             .then((member) => {
                 if (!member.err) {
                     this.setState({ memberDetails: member.data })
                 } else {
                     console.log('err fetching member', member.err);
                 }
             })
             .catch((err) => {
                 console.log('err fetching member', err);
             });
    }

    componentDidMount() {
        this.fetchUser(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchUser(nextProps);
    }

    fmtPreferredCoin() {
        if(this.state.memberDetails.preferredCoin) {
            const capFirstL = this.state.memberDetails.preferredCoin[0].toUpperCase();
            const rest = this.state.memberDetails.preferredCoin.slice(1);
            return capFirstL + rest;
        } else {
            return '';
        }
    }

    renderDetails() {
        return (
            <List>
                <ListItem disabled={ true }
                          style={{ color: 'rgb(255,255,255)' }}
                          leftAvatar={
                              <Avatar icon={ <MemberIcon style={{ fill: 'rgb(255,255,255)' }} /> }
                                      backgroundColor='rgb(0, 218, 179)' />
                          }>
                    <h4 className='inline'>Member Name:</h4>&nbsp;    
                    <h4 className='inline mint-text'>{ this.state.memberDetails.name }</h4>    
                </ListItem>

                <ListItem disabled={ true }
                          style={{ color: 'rgb(255,255,255)' }}
                          leftAvatar={
                              <Avatar icon={ <CoinIcon style={{ fill: 'rgb(255,255,255)' }} /> } 
                                      backgroundColor='rgb(0, 218, 179)' />
                          }>
                    <h4 className='inline'>Preferred Coin:</h4>&nbsp;
                    <h4 className='inline mint-text'>{ this.fmtPreferredCoin() }</h4>    
                </ListItem>
                
                <ListItem disabled={ true }
                          style={{ color: 'rgb(255,255,255)' }}
                          leftAvatar={
                              <Avatar icon={ <BTCAddressIcon style={{ fill: 'rgb(255,255,255)' }} /> } 
                                      backgroundColor='rgb(0, 218, 179)'/>
                          }>
                    <h4 className='inline'>BTC Wallet:</h4>&nbsp;
                    <h4 className='inline mint-text'>{ this.state.memberDetails.btcWalletAddress }</h4>    
                </ListItem>
            </List>
            );
    }

    render() {
        const style = { margin: 5 };

        return (
            <div className='member-details-container'>

                <Paper zDepth={ 3 } className='member-details-paper'>                
                    { this.renderDetails() }
                </Paper>

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        selectedMember: state.members.selectedMember
    };
}

export default connect(mapStateToProps)(MemberDetails);
