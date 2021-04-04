import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ userId, user }) => {

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

export default connect(mapStateToProps)(UserHeader);