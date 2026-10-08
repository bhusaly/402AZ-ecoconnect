import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from './Layout';

type NavbarUser = {
  name: string;
  isAdmin?: boolean;
};

type NavbarProps = {
  user?: NavbarUser | null;
  onSignOut?: () => void;
};

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Directory', to: '/directory' },
  { label: 'My Reviews', to: '/my-reviews' },
];

const outlineBtn =
  'border border-gray-400 rounded px-4 py-1.5 text-sm text-gray-800 hover:bg-gray-100';
const greenBtn =
  'bg-green-700 border border-green-700 rounded px-4 py-1.5 text-sm text-white hover:bg-green-800';

export const Navbar: React.FC<NavbarProps> = ({ user, onSignOut }) => {
  return (
    <nav className="bg-white border-b border-gray-300">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-green-700">
            EcoConnect
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? 'text-green-700 font-semibold'
                      : 'text-gray-800 hover:text-green-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {!user ? (
              <>
                <Link to="/login" className={outlineBtn}>
                  Log in
                </Link>
                <Link to="/signup" className={greenBtn}>
                  Sign up
                </Link>
              </>
            ) : (
              <>
                {user.isAdmin ? (
                  <Link to="/admin" className={outlineBtn}>
                    Admin
                  </Link>
                ) : (
                  <span className={outlineBtn}>{user.name || 'User'}</span>
                )}
                <button type="button" onClick={onSignOut} className={outlineBtn}>
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;