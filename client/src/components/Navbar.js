import React from 'react';

/*
  TODOS:
    use react-router for links
*/

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="messages-events">
        <button>Message Board</button>
        <button>My Events</button>
      </span>
      <span className="signup-login">
        <button>Sign Up</button>
        <button>Log In</button>
      </span>
    </div>
  );
};

export default Navbar;
