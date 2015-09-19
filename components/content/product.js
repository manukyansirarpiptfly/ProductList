var Product = React.createClass({ 

   render: function() {
      var product = this.props.productData;
      return (
        <div className="col-md-4">
          <div className="box box-solid box-default">
            <div className="box-header">
              <h3 className="box-title">{product.name}  </h3>
            </div>
            <div className="box-body">
              <div> quantity <b>{product.quantity} </b> </div>
              <div> Reorder level <b>{product.reorder_level} </b> </div>
              <div> Safety stock <b>{product.safety_stock} </b> </div>
              <div> Gross price <b>{product.gross_price} </b> </div>
            </div>
          </div>
        </div>           
      );
  }
});