var Product = React.createClass({ 

   render: function() {
   
    return (
      <div className="col-md-4">
        <div className="box box-solid box-default">
          <div className="box-header">
            <h3 className="box-title">Product title</h3>
          </div>
          <div className="box-body">
            Product description
          </div>
        </div>
      </div>           
    );
  }
});