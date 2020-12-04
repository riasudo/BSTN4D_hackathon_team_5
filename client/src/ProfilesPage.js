import './ProfilesPage.scss';

import React from 'react';

function ProfilesPage(props) {
    return (
        <div className="profiles-page">
            {/* <img src="./assets/icons/walmart-main-logo.png" alt="walmart logo" className="logo-profiles"/> */}
            <div className="logo-profiles"></div>
            <h1 className="welcome">Welcome back,</h1>
            <p className="welcome-question">Who are we shopping for today?</p>
            <div className="profile-cards">
                <div className="profile-cards__peter">
                    <div className="peter-image"></div>
                    <p className="name">Peter</p>
                </div>
                <div className="profile-cards__jenny">
                    <div className="jenny-image"></div>
                    <p className="name">Jenny</p>
                </div>
                <div className="add">
                    <div className="add-symbol">
                        <div className="v-cross">
                            
                        </div>
                        <div className="h-cross"></div>
                    </div>
                    <p className="add-profile">Add profile</p>
                </div>
            </div>
            
        </div>
    );
}

export default ProfilesPage;