var React=require('react');
var WeatherChild=require('./WeatherChild');
var myfun=false;
var Weather=React.createClass({

    getInitialState:function(){
      return ({dataArray:[]});
    },

    getDataWithLocation : function(){

      console.log("inside my method");
      $.ajax({
       url: 'http://api.openweathermap.org/data/2.5/weather?q='+this.refs.cityRef.value+'&appid=43c2d9f6d465e908de4866fb00f11185',
       dataType: 'json',
       async:false,
       type: 'GET',
       success: function(data)
       {
         myfun=true;
         console.log("my data passing");
         console.log(data);
         this.setState({dataArray:data});
       }.bind(this),
       error: function(xhr, status, err) {
         console.log("Error Is :"+err);
       }.bind(this)
      });


    },

    render:function(){
      console.log("Hi");
      //console.log(this.state.dataArray);
        var sendingData;
        if(myfun){
          sendingData=<WeatherChild data={this.state.dataArray}/>
        }
        return (
          //<form className="navbar-form navbar-left">
                  <div className="form-group" id="search">
                    <input type="text" className="form-control" ref = "cityRef" placeholder="Search" />
                    <button type="submit" onClick={this.getDataWithLocation} className="btn btn-default">search</button>
                    {sendingData}
                  </div>
        );
  }
});
module.exports=Weather;
