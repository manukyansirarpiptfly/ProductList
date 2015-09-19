var ProductsContainer = React.createClass({ 

  getInitialState: function() {
    return {data: []};
  },

  render: function() {
   var products =  this.state.data || [];
   var productNodes = products.map(function (product, index) {
      return <div key={index} className='product'>
                <Product productData = {product}/>
             </div>           
    });

    return (
      <div className="content">
        <div className="row">
          {productNodes}
        </div>

        <Pagination />
      </div> 
    );
  },

  componentDidMount: function() {

    $.ajax({
      type:"get",
      url: 'https://app.inventorum.net/api/products/?limit=20&page=1',
      beforeSend: function (request) {
        request.setRequestHeader("Authorization", "Bearer WSspLPc6TkD61Blx9Ft35G1jYpqW6p");
        request.setRequestHeader("X-Api-Version", "10");
      },
      dataType: 'json',
      contentType: "application/json",
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        // Hard code the data : 
        this.setState({data: ProductData.data}); 

      }.bind(this)
    });
  }
});

React.render(<ProductsContainer />, document.getElementById('container'));




