var Pagination = React.createClass({ 

   render: function() {

      return (
       <ul className="pagination">
			    <li className="disabled"><a href="#">&laquo;</a></li>
			    <li className="active"><a href="#">1</a></li>
			    <li><a href="#">2</a></li>
			    <li><a href="#">3</a></li>
			    <li><a href="#">4</a></li>
			    <li><a href="#">5</a></li>
			    <li><a href="#">&raquo;</a></li>
			</ul>     
      );
  }
});

