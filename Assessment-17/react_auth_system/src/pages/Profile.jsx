import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="profile-container">

        {/* Profile Header */}

        <div className="profile-header">

          <div className="profile-avatar">
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
          </div>

          <div className="profile-info">
            <h1>
              {user?.firstName} {user?.lastName}
            </h1>

            <p>@{user?.username}</p>

            <span className="status">
              🟢 Active Account
            </span>
          </div>

        </div>

        {/* Profile Details */}

        <div className="profile-grid">

          <div className="info-card">
            <h4>First Name</h4>
            <p>{user?.firstName}</p>
          </div>

          <div className="info-card">
            <h4>Last Name</h4>
            <p>{user?.lastName}</p>
          </div>

          <div className="info-card">
            <h4>Email</h4>
            <p>{user?.email}</p>
          </div>

          <div className="info-card">
            <h4>Username</h4>
            <p>{user?.username}</p>
          </div>

          <div className="info-card">
            <h4>Gender</h4>
            <p>{user?.gender}</p>
          </div>

          <div className="info-card">
            <h4>Role</h4>
            <p>{user?.role || "User"}</p>
          </div>

        </div>

        {/* Account Summary */}

        <div className="summary-card">

          <h2>Account Summary</h2>

          <div className="summary-row">
            <span>Authentication</span>
            <strong>JWT Protected ✅</strong>
          </div>

          <div className="summary-row">
            <span>Login Status</span>
            <strong>Logged In</strong>
          </div>

          <div className="summary-row">
            <span>Protected Routes</span>
            <strong>Dashboard & Profile</strong>
          </div>

          <div className="summary-row">
            <span>Storage</span>
            <strong>LocalStorage</strong>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}