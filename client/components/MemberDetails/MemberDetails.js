import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Paper from 'material-ui/Paper';

class MemberDetails extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            memberDetails: {}
        };
    }

    fetchUser() {
        axios.get(`/api/members/${this.props.selectedMember}`)
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
        this.fetchUser();
    }

    componentWillReceiveProps(props) {
        this.fetchUser();
    }

    render() {
        return (
            <div className='member-details-container'>

                <Paper zDepth={ 3 } className='member-details-paper'>                
                    { JSON.stringify(this.state.memberDetails) }
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
