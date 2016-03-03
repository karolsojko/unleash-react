var React = require('react');

var Main = React.createClass({
  render: function(){
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
});

module.exports = Main;
