import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    username: 'username',
    email: 'email',
    profilePicture: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleSaveClick = () => {
    if (!newUsername || !newEmail) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setUser({
        ...user,
        username: newUsername,
        email: newEmail,
        profilePicture: newProfilePicture || user.profilePicture,
      });
      setIsEditing(false);
      setIsLoading(false);
    }, 1000);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Profile</h1>
      <p style={styles.subtitle}>Manage your preferences here.</p>

      <div style={styles.profilePictureContainer}>
        <img
          src={newProfilePicture || user.profilePicture}
          alt="Profile"
          style={styles.profilePicture}
        />
        {isEditing && (
          <div style={styles.uploadButtonContainer}>
            <label style={styles.uploadLabel}>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                style={styles.uploadInput}
              />
              Change Picture
            </label>
          </div>
        )}
      </div>

      <div style={styles.userDetails}>
        <div style={styles.field}>
          <h2 style={styles.fieldTitle}>Username</h2>
          {isEditing ? (
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              style={styles.input}
            />
          ) : (
            <p style={styles.fieldValue}>{user.username}</p>
          )}
        </div>
        <div style={styles.field}>
          <h2 style={styles.fieldTitle}>Email</h2>
          {isEditing ? (
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              style={styles.input}
            />
          ) : (
            <p style={styles.fieldValue}>{user.email}</p>
          )}
        </div>
      </div>

      <div style={styles.buttonsContainer}>
        {isLoading ? (
          <button style={styles.loadingButton} disabled>
            Saving...
          </button>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              style={isEditing ? styles.cancelButton : styles.editButton}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
            {isEditing && (
              <button onClick={handleSaveClick} style={styles.saveButton}>
                Save Changes
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '100px 30px',
    maxWidth: '700px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#333',
    fontWeight: '700',
  },
  subtitle: {
    color: '#777',
    fontSize: '1rem',
    marginBottom: '30px',
  },
  profilePictureContainer: {
    marginBottom: '20px',
    position: 'relative',
  },
  profilePicture: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #ddd',
    transition: 'transform 0.3s ease',
  },
  uploadButtonContainer: {
    marginTop: '10px',
    textAlign: 'center',
    
  },
  uploadLabel: {
    padding: '8px 15px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: '#fff',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease',
  },
  uploadInput: {
    display: 'none',
  },
  userDetails: {
    textAlign: 'left',
    marginBottom: '1px',
  },
  field: {
    marginBottom: '20px',
  },
  fieldTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '5px',
  },
  fieldValue: {
    fontSize: '1rem',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px 0px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  editButton: {
    padding: '10px 20px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  cancelButton: {
    padding: '10px 20px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  saveButton: {
    padding: '10px 20px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  loadingButton: {
    padding: '10px 20px',
    backgroundColor: '#bbb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'not-allowed',
  },
};

export default Profile;
