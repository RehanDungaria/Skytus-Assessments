# TODO - Auth System (CRA)

## Auth & Routing
- [x] Update `src/context/AuthContext.jsx` to use real JWT decoding (no fake JWT)
- [x] Implement JWT exp-based expiry check + auto logout
- [x] Restore auth state after refresh from `localStorage`
- [x] Ensure context exposes `login`, `logout`, `isAuthenticated`, `user`, `token`, `loading`


## Axios
- [x] Update `src/api/axios.js` interceptor to attach JWT and handle 401 by clearing storage + redirecting to `/login`

## Pages
- [x] Implement `src/pages/Dashboard.jsx` (cards, recent activity, token display, logout)
- [x] Implement `src/pages/Profile.jsx` (profile card, avatar, logout)

## Styling
- [x] Extend `src/App.css` with dashboard/profile layouts and modern glassmorphism UI

## Env
- [x] Add `react-auth-system/.env` with required environment variables


## Quick Run Check
- [ ] `npm install`
- [ ] `npm start`
- [ ] Verify redirects, protected routes, expiry auto logout, and 401 interceptor behavior

