var React = require('react');

var HeaderContainer = React.createClass({ 
  render: function() {
   
    return (
        <div className="content">
            Hello From React CComponents !! 
        </div> 
    );
  }
});
React.render(<HeaderContainer />, document.getElementById('header-container'));

module.exports = HeaderContainer;


