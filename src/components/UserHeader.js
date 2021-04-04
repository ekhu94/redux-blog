import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ userId, fetchUser }) => {

    useEffect(() => {
        fetchUser(userId);
    }, []);

    return (
        <div>
            User Header
        </div>
    );
};

const mapStateToProps = state => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);