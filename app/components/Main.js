import React from 'react';

class Main extends React.Component {
  render(){
    return (
      <div>
        <div>
          <h1>Unleash</h1>
          <nav>
            <ul>
              <li>
                <a>All paths</a>
              </li>
              <li>
                <a>
                  Your public path
                </a>
              </li>
              <li>
                <a>Edit templates</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
