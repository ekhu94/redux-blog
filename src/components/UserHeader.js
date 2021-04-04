import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ userId, fetchUser, user }) => {

    useEffect(() => {
        fetchUser(userId);
    }, []);

    const renderUser = () => {
        if (!user) return null;
        return user.name;
    };

    return (
        <div className="header">
            {renderUser()}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);