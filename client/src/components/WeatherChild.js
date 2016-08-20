var React=require('react');
var obj={};
var WeatherChild=React.createClass({

  componentDidMount : function(){
    console.log("This is my WeatherChild");
    console.log(this.props.data);
    obj.lat=this.props.data.coord.lat;
    obj.lon=this.props.data.coord.lon;
    obj.humidity=this.props.data.main.humidity;
    obj.pressure=this.props.data.main.pressure;
    obj.sunset=this.props.data.sys.sunset;
    obj.sunrise=this.props.data.sys.sunrise;
    obj.cloud=this.props.data.weather[0].description;
    obj.deg=this.props.data.wind.deg;
    obj.speed=this.props.data.wind.speed;
    console.log(obj);
    $.ajax({
     url: 'http://localhost:8080/data',
     dataType: 'json',
     async:false,
     type: 'POST',
     data:obj,
     success: function(data)
     {
       console.log("second ajax");
       console.log(data);
       this.setState({dataArray:data});
     }.bind(this),
     error: function(xhr, status, err) {
       console.log(err.toString());
     }.bind(this)
    });

  },

  render : function(){

    return (
      <div>
      <table className="table table-inverse table-bordered">
        <tr>
          <th>Latitude</th>
          <td>{this.props.data.coord.lat}</td>
        </tr>
        <tr>
          <th>Longitude</th>
          <td>{this.props.data.coord.lon}</td>
        </tr>
        <tr>
          <th>Humidity</th>
          <td>{this.props.data.main.humidity}</td>
        </tr>
        <tr>
          <th>Pressure</th>
          <td>{pressure=this.props.data.main.pressure}</td>
        </tr>
        <tr>
          <th>Sunset</th>
          <td>{this.props.data.sys.sunset}</td>
        </tr>
        <tr>
          <th>Sunrise</th>
          <td>{this.props.data.sys.sunrise}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{this.props.data.weather[0].description}</td>
        </tr>
        <tr>
          <th>Degree</th>
          <td>{this.props.data.wind.deg}</td>
        </tr>
        <tr>
          <th>Speed</th>
          <td>{this.props.data.wind.speed}</td>
        </tr>
      </table>
      </div>
    );

  }

});
module.exports=WeatherChild;
