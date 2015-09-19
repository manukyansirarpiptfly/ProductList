var ProductsContainer = React.createClass({ 

  render: function() {
   
    return (
      <div className="content">
        <div className="row">
           <Product />
           <Product />
           <Product />
        </div>
      </div> 
    );
  }
});

React.render(<ProductsContainer />, document.getElementById('container'));




