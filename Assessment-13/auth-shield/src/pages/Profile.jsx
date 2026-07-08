import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <div className="profile-container">

        <div className="profile-header">
          <div className="avatar">
            {user?.email?.charAt(0).toUpperCase()}
          </div>

          <h1>My Profile</h1>
          <p>Manage your account information</p>
        </div>

        <div className="profile-grid">

          <div className="profile-card">
            <h2>Account Details</h2>

            <div className="profile-info">
              <p>
                <strong>Email:</strong>
                {user?.email}
              </p>

              <p>
                <strong>Status:</strong>
                Active
              </p>

              <p>
                <strong>Role:</strong>
                Developer
              </p>

              <p>
                <strong>Plan:</strong>
                Premium
              </p>
            </div>

            <button className="profile-btn">
              Edit Profile
            </button>
          </div>

          <div className="profile-card">
            <h2>Profile Completion</h2>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

            <p>85% Complete</p>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>NodeJS</span>
              <span>UI Design</span>
            </div>
          </div>

          <div className="profile-card">
            <h2>Statistics</h2>

            <div className="stats-profile">
              <div>
                <h3>12</h3>
                <p>Projects</p>
              </div>

              <div>
                <h3>45</h3>
                <p>Tasks</p>
              </div>

              <div>
                <h3>98%</h3>
                <p>Success</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;