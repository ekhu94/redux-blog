import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({userId}) => {

    useEffect(() => {
        props.fetchUser(userId);
    }, []);

    return (
        <div>
            User Header
        </div>
    );
};

export default connect(null, { fetchUser })(UserHeader);