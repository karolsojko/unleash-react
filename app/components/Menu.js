import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <header>
          <div>
            <h1><Link to="/">Unleash</Link></h1>
            <nav>
              <ul>
                <li>
                  <Link to="/paths">All paths</Link>
                </li>
                <li>
                  <Link to="/">Your public path</Link>
                </li>
                <li>
                  <Link to="/templates">Edit Templates</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    )
  }
}

export default Menu;
