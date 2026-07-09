import { useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+1 (555) 987-6543",
    location: "San Francisco, CA",
    bio: "Passionate about technology and great user experiences.",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout>
      <div className="profile-page">
        <div className="profile-header-card">
          <div className="profile-cover" />
          <div className="profile-info">
            <div className="profile-avatar-large">{user?.avatar}</div>
            <div className="profile-name-block">
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
              <span className={`role-pill ${user?.role}`}>{user?.role?.toUpperCase()}</span>
            </div>
            <button
              className={`btn-primary ${editing ? "btn-save" : ""}`}
              onClick={editing ? handleSave : () => setEditing(true)}
            >
              {editing ? "💾 Save Changes" : "✏️ Edit Profile"}
            </button>
          </div>
          {saved && <div className="save-toast">✅ Profile saved successfully!</div>}
        </div>

        <div className="profile-grid">
          <div className="card">
            <h3 className="card-title">Personal Information</h3>
            <div className="profile-fields">
              {[
                { label: "Full Name", key: "name", type: "text" },
                { label: "Email", key: "email", type: "email" },
                { label: "Phone", key: "phone", type: "tel" },
                { label: "Location", key: "location", type: "text" },
              ].map(({ label, key, type }) => (
                <div key={key} className="profile-field">
                  <label>{label}</label>
                  {editing ? (
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                  ) : (
                    <p className="field-value">{form[key]}</p>
                  )}
                </div>
              ))}
              <div className="profile-field full-width">
                <label>Bio</label>
                {editing ? (
                  <textarea
                    value={form.bio}
                    onChange={(e) => setForm({ ...form, bio: e.target.value })}
                    rows={3}
                  />
                ) : (
                  <p className="field-value">{form.bio}</p>
                )}
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Account Details</h3>
            <div className="account-details-list">
              <div className="account-detail-item">
                <span className="detail-icon">📅</span>
                <div>
                  <p className="detail-label">Member Since</p>
                  <p className="detail-value">January 2024</p>
                </div>
              </div>
              <div className="account-detail-item">
                <span className="detail-icon">🔐</span>
                <div>
                  <p className="detail-label">Account Role</p>
                  <p className="detail-value" style={{ textTransform: "capitalize" }}>{user?.role}</p>
                </div>
              </div>
              <div className="account-detail-item">
                <span className="detail-icon">🛡️</span>
                <div>
                  <p className="detail-label">Security</p>
                  <p className="detail-value">2FA Enabled</p>
                </div>
              </div>
              <div className="account-detail-item">
                <span className="detail-icon">🌐</span>
                <div>
                  <p className="detail-label">Timezone</p>
                  <p className="detail-value">UTC-8 (PST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
