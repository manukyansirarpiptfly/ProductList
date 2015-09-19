var HeaderContainer = React.createClass({ 

  render: function() {
   
    return (
      <div className="content">
          Hello From React Components
      </div> 
    );
  }
});
React.render(<HeaderContainer />, document.getElementById('container'));




