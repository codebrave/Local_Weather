
$(document).ready(function(){

  // la,lo are for the latitude and
  // longitude while cicon is for the
  // current weather icon.
  var la;
  var lo;
  var cicon;
  //Create a temp object for t.
  var t= new temp();

  //This is for attaching the links of 
  //pictures for each weather.
  var wht={
    "bclouds_d": "https://s25.postimg.cc/un502c17z/broken_clouds_d.jpg",
    "bclouds_n": "https://s25.postimg.cc/9ripr350v/broken_n_clouds.jpg",
    "csky_d": "https://s25.postimg.cc/5nmccbygf/sky_clear_d.jpg",
    "csky_n":"https://s25.postimg.cc/qtbjt6jvz/clear_sky_n.jpg",
    "cold_d":"https://s25.postimg.cc/5xp9hxnov/cold_d.jpg",
    "cold_n":"https://s25.postimg.cc/4jxmmmofj/cold_n.jpg",
    "dust":"https://s25.postimg.cc/k4e74ndbj/duststorm.jpg",
    "fclouds_d":"https://s25.postimg.cc/utip5facv/few_clouds_d.jpg",
    "fclouds_n":"https://s25.postimg.cc/goqo8u5gv/few_clouds_n.jpg",
    "fog_d":"https://s25.postimg.cc/hqrnzw9in/foggy_d.jpg",
    "fog_n": "https://s25.postimg.cc/6tzj2m1in/foggy_n.jpg",
    "gale_d":"https://s25.postimg.cc/aotqdp5wv/gale_d.jpg",
    "hail":"https://s25.postimg.cc/ywni9q8mn/hail.jpg",
    "haze":"https://s25.postimg.cc/4dxporjfz/haze.jpg",
    "hot_d":"https://s25.postimg.cc/l0636cxm7/hot_d.jpg",
    "hurricane":"https://s25.postimg.cc/65hhs6o1b/hurricane_tropical_storm.jpg",
    "mist":"https://s25.postimg.cc/vcsdsfr5b/mist_d.jpg",
    "rain_d":"https://s25.postimg.cc/a4epb0cof/raining_d.jpg",
    "rain_n":"https://s25.postimg.cc/yyy752xin/raining_n.jpg",
    "rain_s":"https://s25.postimg.cc/yddtmpru7/rain_snow.jpg",
    "sclouds_d":"https://s25.postimg.cc/tot8dsd9r/scattered_d_clouds.jpg",
    "sclouds_n":"https://s25.postimg.cc/glxluin1r/scattered_n_clouds.jpg",
    "sleet":"https://s25.postimg.cc/6m7asd167/sleet.jpg",
    "smoke":"https://s25.postimg.cc/fwjevwbvz/smoke_d.jpg", 
    "snow_d":"https://s25.postimg.cc/8kdyqctnz/snow_storm.jpg",
    "snow_n":"https://s25.postimg.cc/k880kwisv/snow_n.jpg",
    "thunder_d":"https://s25.postimg.cc/huq2tw4dr/thunderstorm_d.jpg",
    "thunder_n":"https://s25.postimg.cc/6tuxovc4v/thunderstorm.jpg",
    "tornado":"https://s25.postimg.cc/o9p3qkb3j/tornado.jpg",
    "volcano":"https://s25.postimg.cc/x10pykjsf/volcano.jpg",
    "windy":"https://s25.postimg.cc/do58ek4rz/windy_d.jpg"  
  };
  
  // These id numbers are based on the
  // Open Weather Map API for each 
  // weather.
  var wtable={
    "500":{des:"light rain",ic:"rain"},
    "501":{des:"moderate rain", ic:"rain"},
    "502":{des:"heavy intensity rain",
           ic:"rain"},
    "503":{des:"very heavy rain",     
           ic:"rain"},
    "504":{des:"extreme rain",ic:"rain"},
    "511":{des:"freezing rain",
           ic:"rain-mix"},
    "520":{des:"light intensity shower rain",
           ic:"showers"},
    "521":{des:"shower rain",
           ic:"showers"},
    "522":{des:"heavy intensity shower rain",
           ic: "showers"},
    "531":{des:"ragged shower rain",
           ic:"showers"},
    "600":{des:"light snow",ic:"snow"},
    "601":{des:"snow",ic:"snow"},
    "602":{des:"heavy snow",ic:"snow"},
    "611":{des:"sleet",ic:"sleet"},
    "612":{des:"shower sleet",ic:"sleet"},
    "615":{des:"light rain and snow",
           ic:"rain-mix"},
    "616":{des:"rain and snow",
           ic:"rain-mix"},
    "620":{des:"light shower snow",
           ic:"rain-mix"},
    "621":{des:"shower snow",    
           ic:"rain-mix"},
    "622":{des:"heavy shower snow",
           ic:"rain-mix"},
    "701":{des:"mist",ic:"sprinkle"},
    "711":{des:"smoke",ic:"smoke"},
    "721":{des:"haze",ic:"day-haze"},
    "731":{des:"sand, dust whirls",
           ic:"cloudy-gusts"},
    "741":{des:"fog",ic:"fog"},
    "751":{des:"sand",ic:"cloudy-gusts"},
    "761":{des:"dust",ic:"dust"},
    "762":{des:"volcanic ash",
           ic:"volcano"},
    "771":{des:"squalls",ic:"windy"},
    "781":{des:"tornado",ic:"tornado"},
    "800":{des:"clear sky",ic:"sunny"},
    "801":{des:"few clouds",ic:"cloudy"},
    "802":{des:"scattered clouds",
           ic:"cloudy"},
    "803":{des:"broken clouds",
           ic:"cloudy"},
    "804":{des:"overcast clouds",
           ic:"cloudy"},
    "900":{des:"tornado",ic:"tornado"},
    "901":{des:"tropical storm",
           ic:"hurricane"},
    "902":{des:"hurricane",
           ic:"hurricane"},
    "903":{des:"cold",
           ic:"snowflake-cold"},
    "904":{des:"hot",ic:"hot"},
    "905":{des:"windy",ic:"windy"},
    "906":{des:"hail",ic:"hail"},
    "951":{des:"calm",ic:"cloud"},
    "952":{des:"light breeze",
           ic:"cloudy-gusts"},
    "953":{des:"gentle breeze",
           ic:"cloudy-gusts"},
    "954":{des:"moderate breeze",
           ic:"cloudy-gusts"},
    "955":{des:"fresh breeze",
           ic:"cloudy-gusts"},
    "956":{des:"strong breeze",
           ic:"cloudy-gusts"},
    "957":{des:"high wind, near gale",
           ic:"cloudy-gusts"},
    "958":{des:"gale",ic:"cloudy-gusts"},
    "959":{des:"severe gale",
           ic:"cloudy-gusts"},
    "960":{des:"storm",
           ic:"thunderstorm"},
    "961":{des:"violent storm",
           ic:"thunderstorm"},
    "962":{des:"hurricane",
           ic:"hurricane"}
  };
  
  //762(volcano), 951-956, 958-962, and  
  //751 not in owm(Open Weather Map).
  getD();

  function getD(){
    // Send POST data to Google Maps' 
    // Geolocation API to get the
    // JSON data of the latitude nad
    // longitude.
    $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD2MkL65RpO3UZe9ypXx43RC9I54S_48Ak",
      function(d){
      la=d.location.lat;
      lo=d.location.lng; 

      // Use "https://cors-anywhere.herokuapp.com/http:"
      // to request http to the Open Weather Map api instead
      // of https request.
      var lk='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='
      +la+'&lon='+lo+'&appid=6f28b7103ef84bb709ca933e1798e05f';
      
     // Get JSON data from the Open
     // Weather Map API. The data will
     // give the city name, id, and
     // Calvin temperature.
     $.getJSON(lk,function(d2){
       var cweather=d2.weather[0].description;
       var id=d2.weather[0].id;
       var city=d2.name;
       var ktemp=d2.main.temp;
       
       // Convert Calvins into 
       // Fahrenheit.
       var ft=(ktemp*(9/5)-459.67).toFixed(1);
       t.setFtemp(ft);
       
       // Convert Calvins into Celsius.
       var ct=(ktemp-273.15).toFixed(1);
       t.setCtemp(ct);
       
       // This will display the weather
       // description.
       var cl=cweather.toUpperCase();
       $("#des").fadeOut(500,function(){
       $("#des").fadeIn(500);  
       $("#des").html(cl.charAt(0)+
                 cweather.slice(1,cweather.length));
      });
       
      var ul = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+la+","+lo+"&result_type=administrative_area_level_1&key=AIzaSyD2MkL65RpO3UZe9ypXx43RC9I54S_48Ak";
      // This will get JSON data from
      // Google Maps' Geocode API for
      // the country name.
      $.getJSON(ul,function(d){
 
       var rgn;
       var  ctry=d.results[0].formatted_address;

        // This will display the 
        // city and country location.
        $("#ctry").fadeOut(500,function(){
          $("#ctry").fadeIn(500);  
          $("#ctry").html(city+", "+ctry);

        }); 
      });//end of $.getJSON
       // Get the current hour based
       // on the date.
       var dt=new Date();
       var hr=dt.getHours();
/*
 This algorithm is for accessing
 the weather icons (from erikflowers in
 GitHub) based on the Open Weather Map
 API id numbers.
 link source:
 https://erikflowers.github.io/weather-icons/
*/       
       var tm;
       var dyv;
       var prfx="wi wi-";
       // If the hour time is between
       // 6 and 18, then the time
       // is day-time.
       if(hr<18 && hr>=6){
         tm="day-";
         dyv=true;
       }
       // Otherwise,the time is 
       // night-time.
       else {
        tm="night-";
        dyv=false;
       }
       // Display the time of the 
       // weather (day-time or night-
       // time).
       $("#tm").fadeOut(500,function(){
         $("#tm").fadeIn(500);
         $("#tm").html("at "+tm+"time");
       });
       
       var icn;
       
       // If id is between 951 and 956,
       // equal to 762,or greater than
       // or equal to 958, icn will
       // get the icon name from wtable.
       if(id===762||id>=951&&id<=956||
          id>=958) {
         icn=prfx+wtable[id].ic;
       }
       // Otherwise, get the weather
       // icon based on the Open
       // Weather Map's API id number.
       else{
         icn=prfx+"owm-"+tm+id; 
       }
       
       // This will display the weather
       // icon.
        $("#weather").fadeOut(500,function(){
      $("#weather").fadeIn(500);  
       // Remove the class name
       // that cicon has only if 
       // cicon is not undefined.
       if(cicon!==undefined){
       $("#weather").removeClass(cicon);
       }
          
       $("#weather").addClass(icn);  
      }); // end of #weather
       
       cicon=icn;
       // If t.gettoggle is false, then
       // display the temperature in
       // Fahrenheit.
       if(!t.gettoggle()){
         $("#temp").fadeOut(500,function(){
           $("#temp").fadeIn(500);
           $("#temp").html(t.getFtemp);  
         })
         
       }
       // Otherwise, display the 
       // temperature in Celsius.
       else {
         $("#temp").fadeOut(500,function(){
           $("#temp").fadeIn(500);
           $("#temp").html(t.getCtemp); 
         });
         
       }
       
       // This function basically
       // displays the background
       // for the weather depending
       // on the Open Weather Map's
       // API id number.
         $("#wth").fadeOut(500,function(){
         $("#wth").fadeIn(500);
         if (id>=200 && id<300||id>=960&&
             id<=961){
           if(dyv) {
             $("#wth").css("background-image",'url('+wht.thunder_d+')');
           }
           else {
             $("#wth").css("background-image",'url('+wht.thunder_n+')');
           }
         }
         else if(id>=300 &&id<=321){
           $("#wth").css("background-image",'url('+wht.rain_d+')');
         }
         else { 
           switch(wtable[id].ic){
             case "rain":
               if(dyv) {
               $("#wth").css("background-image",'url('+wht.rain_d+')');
               }
               else {
               $("#wth").css("background-image",'url('+wht.rain_n+')');  
               }
               break;
             case "rain-mix":
               $("#wth").css("background-image",'url('+wht.rain_s+')'); 
               break;
             case "showers":
               if (dyv) {
               $("#wth").css("background-image",'url('+wht.rain_d+')');  
               }
               else {
               $("#wth").css("background-image",'url('+wht.rain_d+')');   
               }
               break;
             case "snow":
               if(dyv) {
               $("#wth").css("background-image",'url('+wht.snow_d+')');   
               }
               else {
               $("#wth").css("background-image",'url('+wht.snow_n+')');
               }
               break;
             case "sleet":
               $("#wth").css("background-image",'url('+wht.sleet+')');
               break;
             case "sprinkle":
               if(id===701) {
                 $("#wth").css("background-image",'url('+wht.mist+')');
               }
               else{
                 $("#wth").css("background-image",'url('+wht.rain_d+')');  
               }
               break;
             case "smoke":
               $("#wth").css("background-image",'url('+wht.smoke+')'); 
               break;
             case "day-haze":
               $("#wth").css("background-image",'url('+wht.haze+')');
               break;
             case "cloudy-gusts":
               if(id>=958) {
                 $("#wth").css("background-image",'url('+wht.gale_d+')');
               }
               else {
                 $("#wth").css("background-image",'url('+wht.windy+')'); 
               }
               break;
             case "fog":
               if(dyv) {
               $("#wth").css("background-image",'url('+wht.fog_d+')');
               }
               else {
               $("#wth").css("background-image",'url('+wht.fog_n+')');
               }
               break;
             case "dust":
               $("#wth").css("background-image",'url('+wht.dust+')');
               break;
             case "volcano":
               $("#wth").css("background-image",'url('+wht.volcano+')');
               break;
             case "windy":
               $("#wth").css("background-image",'url('+wht.windy+')');
               break;
             case "tornado":
               $("#wth").css("background-image",'url('+wht.tornado+')');
               break;
             case "sunny":
               if(dyv) {
                 $("#wth").css("background-image",'url('+wht.csky_d+')');
               }
               else {
                 $("#wth").css("background-image",'url('+wht.csky_n+')'); 
               }
               break;
             case "cloudy":
               if(dyv) {
                 switch(id){
                   case 801:
                     $("#wth").css("background-image",'url('+wht.fclouds_d+')');  
                     break;
                   case 802:
                     $("#wth").css("background-image",'url('+wht.sclouds_d+')');  
                     break;
                   case 803:
                      $("#wth").css("background-image",'url('+wht.bclouds_d+')'); 
                     break;
                   case 804:
                     $("#wth").css("background-image",'url('+wht.bclouds_d+')'); 
                     break;
                 }  
               }
               else {
                 switch(id){
                   case 801:
                      $("#wth").css("background-image",'url('+wht.fclouds_n+')');
                     break;
                   case 802:
                      $("#wth").css("background-image",'url('+wht.sclouds_n+')'); 
                     break;
                   case 803:
                      $("#wth").css("background-image",'url('+wht.bclouds_n+')'); 
                     break;
                   case 804:
                     $("#wth").css("background-image",'url('+wht.bclouds_n+')');
                     break;
                 }                
               }
               break;
             case "hurricane":
               $("#wth").css("background-image",'url('+wht.hurricane+')');
               break;
             case "snowflake-cold":
               if (dyv){
               $("#wth").css("background-image",'url('+wht.cold_d+')');  
               }
               else {
               $("#wth").css("background-image",'url('+wht.cold_n+')');
               }
               break;
             case "hot":
               $("#wth").css("background-image",'url('+wht.hot_d+')');
               break;
             case "hail":
               $("#wth").css("background-image",'url('+wht.hail+')');
               break;
             case "cloud":
               if(dyv) {
                 $("#wth").css("background-image",'url('+wht.fclouds_d+')');  
               }
               else {
                 $("#wth").css("background-image",'url('+wht.fclouds_n+')');  
               }
               break;
           } // end of switch
         } // end of else
        }); // end of $("#wth")     
      }); // end of $getJSON
    }); // end of $post
  } // end of getD()
  
  // This updates the weather when
  // the update button gets pressed.
  $(".update").on('click',function(){
    getD();
  });
  
  // This changes between Celsius 
  // and Fahrenheit temperatures.
  $("#tp").on('click',function(){
    // If t.gettoggle is false, then
    // switch to Celsius.
    if(!t.gettoggle()){
    $("#temp").html(t.getCtemp);
      t.toggle(true);
    }
    // Otherwise, switch to Fahrenheit.
    else {
    $("#temp").html(t.getFtemp);
      t.toggle(false);
    }
    
  }); //end of #tp
}); // end of $document

// This function will have its
// own Fahrenhait and Celsius 
// temperatures and a Boolean
// value for switching temperature
// numbers.
var temp = function(){
  var ftemp, ctemp;
  var bool=false;
  // Get the current temperature
  // in Fahrenheit.
  this.getFtemp = function(){
    return ftemp + "&deg;F";
  };
  // Change the temperature value in
  // Fahrenheit.
  this.setFtemp = function(s){
    ftemp=s;
    return ftemp;
  };
  // Get the current temperature
  // in Celsius.
  this.getCtemp = function(){
    return ctemp + "&deg;C"; 
  };
  // Change the temperature value
  // in Celsius.
  this.setCtemp = function(s){
    ctemp=s;
    return ctemp;
  };
  // Change bool to a Boolean
  // value (true or false).
  this.toggle=function(v){
    bool=v;
    return bool;
  };
  // Get the Boolean value.
  this.gettoggle=function(){
    return bool;
  };
  
  
};
