import React, { PureComponent } from 'react';
import Chart from '../Chart/Chart';
import MemberDetails from '../MemberDetails/MemberDetails';

class Layout extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='layout-container'>
                <MemberDetails/>
                <Chart/>
            </div>
        );
    }

}

export default Layout;
