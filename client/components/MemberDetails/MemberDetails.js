import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

class MemberDetails extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='member-details-container'>

                <Paper zDepth={ 3 } className='member-details-paper'>                
                    { this.props.selectedMember }
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
