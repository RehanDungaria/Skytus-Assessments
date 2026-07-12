import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem('remembered_username');
    if (savedUsername) {
      setCredentials(prev => ({ ...prev, username: savedUsername }));
      setRememberMe(true);
    }
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    setApiError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!credentials.username) newErrors.username = 'Username is required';
    if (!credentials.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const result = await login(credentials.username, credentials.password);
    
    if (result.success) {
      if (rememberMe) {
        localStorage.setItem('remembered_username', credentials.username);
      } else {
        localStorage.removeItem('remembered_username');
      }
      navigate('/dashboard');
    } else {
      setApiError(result.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="login-card glass">
        <div className="login-left">
          <div className="illustration">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <h2>Welcome Back</h2>
            <p>Connect with the world's most secure authentication system.</p>
          </div>
        </div>
        <div className="login-right">
          <form onSubmit={handleSubmit} className="login-form">
            <h1>Login</h1>
            <p className="subtitle">Please enter your details</p>
            
            {apiError && <div className="api-error-toast">{apiError}</div>}
            
            <Input
              label="Username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter your username"
              icon={FaUser}
              error={errors.username}
            />
            
            <Input
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              icon={FaLock}
              error={errors.password}
            />
            
            <div className="form-options">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  checked={rememberMe} 
                  onChange={(e) => setRememberMe(e.target.checked)} 
                />
                <span>Remember Me</span>
              </label>
              <button type="button" className="forgot-password-btn" onClick={(e) => e.preventDefault()}>Forgot Password?</button>
            </div>
            
            <Button 
              type="submit" 
              loading={isSubmitting} 
              className="login-btn"
            >
              Sign In
            </Button>
            
            <p className="demo-info">Demo: emilys / emilyspass</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
