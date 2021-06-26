$(document).ready(function() {
    $('select').material_select();
 });


// firstproblem in app js

document.getElementById('firstform').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    
    fetch("http://127.0.0.1:8000/plotfirst/", {                     
            method: "POST",                     
            body: JSON.stringify(object),         
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }) 
        .then(response => response.json())
        .then(json => firstdata(json)); 
       
    
      
    });
    
    
    function firstdata(auth_data)
    {
    store_array = [];
    
    authoried_cap = {'<=1L': 0,
                     '1L to 10L': 0,
                     '10L to 1Cr': 0,
                     '1Cr to 10 Cr': 0,
                     '>10Cr': 0}
    for(let item of auth_data){  
        authoried_cap[item["name"]]=item["count"]
    }    
    for(let cap in authoried_cap){    
        store_array.push([cap,authoried_cap[cap]])
    }
    Highcharts.chart('oneplot', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Authorized Capital in Maharashtra',
            style: {                
                fontFamily: 'Lucida Console, Courier, monospace',
                color: '#0068a5'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://data.gov.in/resources/company-master-data-maharashtra-upto-21st-april-2018">data.gov</a>',
            style: {                
                fontFamily: 'Lucida Console, Courier, monospace',
                color: '#0068a5'
            }
        },
        xAxis: {
            type: 'category',
            labels: {                
                style: {
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif',
                    color: '#000'
                }
            },
            min: 0,
            title: {
                text: 'Capitals',
                style: {                    
                    color: '#0068a5'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of companies',
                style: {                    
                    color: '#0068a5'
                }
            }
            
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: store_array,
            color: '#0068a5',
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.f}',
                y: 20,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    
                }
            }
        }]
    });
    
    }
    


//  second problem js app
  document.getElementById('secondform').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    
    fetch("http://127.0.0.1:8000/plotsecond/", {                     
            method: "POST",                     
            body: JSON.stringify(object),         
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }) 
        .then(response => response.json())
        .then(json => seconddata(json)); 
       
    
      
    });
    
    
    function seconddata(company_register)
    {   
    store_array = [];
    for(let item in company_register){
        year = company_register[item]["date_of_registration__year"]
        count = company_register[item]["count"]        
        store_array.push([String(parseInt(year)),count])        
    }
    Highcharts.chart('company_register', {
        chart: {
            type: 'column'
        },
        title: {
            text: "Company Registration in Maharashtra",
            style: {                
                fontFamily: 'Lucida Console, Courier, monospace',
                color: '#0068a5'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://data.gov.in/resources/company-master-data-maharashtra-upto-21st-april-2018">data.gov</a>',
            style: {                
                fontFamily: 'Lucida Console, Courier, monospace',
                color: '#0068a5'
            }
        },
        xAxis: {
            type: 'category',
            labels: {            
                style: {
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif',
                    color: '#000'
                }
            },
            min: 0,
            title: {
                text: 'Date of Registration',
                style: {                    
                    color: '#0068a5'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Companies',
                style: {                    
                    color: '#0068a5'
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: store_array,
            color: '#0068a5',
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.f}',
                y: 20,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Lucida Console, Courier, monospace'
                    
    
                }
            }
        }]
    });   
    }
    


// thrid problem js plot


  document.getElementById('thirdform').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    
    
    
    
    fetch("http://127.0.0.1:8000/plotthird/", {                     
            method: "POST",                     
            body: JSON.stringify(object),         
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }) 
        .then(response => response.json())
        .then(json => thirddata(json)); 
       
    
      
    });
    
    
    function thirddata(number_of_company)
    {   
    store_array = [];
    for(let item in number_of_company){
      company_type=number_of_company[item]["principal_business_activity_as_per_cin"]
      valuedata=number_of_company[item]["count"]
      
      store_array.push([company_type,valuedata])
    }    
    Highcharts.chart('number_of_company', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Principal Business Activity',
            style: {                
                fontFamily: 'Lucida Console, Courier, monospace',
                color: '#0068a5'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://data.gov.in/resources/company-master-data-maharashtra-upto-21st-april-2018">data.gov</a>',
            style: {                
                fontFamily: 'Lucida Console, Courier, monospace',
                color: '#0068a5'
            }
        },
        xAxis: {
            type: 'category',
            labels: {                
                style: {
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif',
                    color: "#000",
                }
            },
            title: {
                text: 'Business Activity Name',
                style: {                    
                    color: '#0068a5'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of companies',
                style: {                    
                    color: '#0068a5'
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: store_array,
            color: '#0068a5',
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.f}',
                y: 20,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
    }

// fouth problem js plot
document.getElementById('fourthform').addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    
    var selected = [];
    for (var option of document.getElementById('pba').options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    
    
    const formData = new FormData(e.target);
    
      var object = {};
      formData.forEach(function(value, key){
          object[key] = value;
      });
    
      object["pba"] = selected;
    
    
    fetch("http://127.0.0.1:8000/plotfourth/", {                     
              method: "POST",                     
              body: JSON.stringify(object),         
              headers: { 
                  "Content-type": "application/json; charset=UTF-8"
              } 
          }) 
          .then(response => response.json())
          .then(json => fourthdata(json)); 
         
    
        
    });
    
    
    function fourthdata(number_of_company)
    {   
    
      
      year=[]
      stack_data={}
      for(let data of number_of_company){
          
          if(year.includes(data.date_of_registration__year)==false)
          {        
              year.push(data.date_of_registration__year)
          }
    
          const name = data.principal_business_activity_as_per_cin
          if(stack_data[name]){
              stack_data[name].push(data.count)
          }else{
              stack_data[name]=[data.count]
          }
      }
      
      
      
      obj_name = Object.keys(stack_data);
      obj_value =Object.values(stack_data);
      
      objectLengh = Object.keys(stack_data).length; 
    
      output=[]
      for(let i=0 ;i < objectLengh;i++){
          obj={}
          obj["name"]=obj_name[i]
          obj["data"]= obj_value[i]
          output.push(obj)
          
      }
      Highcharts.chart('stack_result', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Principal Business Activities Grouped Bar Plot',
              style: {                
                  fontFamily: 'Lucida Console, Courier, monospace',
                  color: '#0068a5'
              }
          },
          subtitle: {
              text: 'Source: <a href="https://data.gov.in/resources/company-master-data-maharashtra-upto-21st-april-2018">data.gov</a>',
              style: {                
                  fontFamily: 'Lucida Console, Courier, monospace',
                  color: '#0068a5'
              }
          },
          xAxis: {
              categories: year,
              crosshair: true,
              labels: {
                  style: {
                      fontSize: '10px',
                      fontFamily: 'Verdana, sans-serif',
                      color: "#000",
                  }
              },
              title: {
                  text: 'Number Of Companies',
                  style: {                    
                      color: '#0068a5'
                  }
              }
              
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total Companies',
                  style: {                    
                      color: '#0068a5'
                  }
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: output
      });
      
    
      
    }