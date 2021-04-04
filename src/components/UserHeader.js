import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ userId, fetchUser, users }) => {

    useEffect(() => {
        fetchUser(userId);
    }, []);

    const getUser = () => {
        const user = users.find(u => u.id === userId);
        if (!user) return null;
        return user.name;
    }

    return (
        <div className="header">
            {getUser()}
        </div>
    );
};

const mapStateToProps = state => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);