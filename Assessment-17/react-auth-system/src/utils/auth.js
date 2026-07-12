export const TOKEN_KEY = 'auth_token';
export const USER_KEY = 'auth_user';
export const EXPIRY_KEY = 'auth_expiry';

export const setAuthData = (token, user) => {
  const expiryTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour from now
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(EXPIRY_KEY, expiryTime.toString());
};

export const clearAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(EXPIRY_KEY);
};

export const getAuthData = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  const expiry = localStorage.getItem(EXPIRY_KEY);

  return { token, user, expiry };
};

export const isTokenExpired = () => {
  const expiry = localStorage.getItem(EXPIRY_KEY);
  if (!expiry) return true;
  return new Date().getTime() > parseInt(expiry);
};
