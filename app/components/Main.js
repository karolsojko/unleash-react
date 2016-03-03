var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <nav>
          <div>
            MENU
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
