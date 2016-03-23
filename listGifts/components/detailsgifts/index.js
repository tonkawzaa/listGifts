'use strict';



app.detailsgifts = kendo.observable({
    
     index : 6666,
     products: new kendo.data.DataSource({
        data: [
            { id: 1, name: "Coffee" },
            { id: 2, name: "Tea" },
            { id: 3, name: "Juice" }
        ]
    }),
    
    datashop: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/shops",
                            contentType: "application/json; charset=utf-8",
                      
                            dataType: "json",
                            success: function (result) {
                                options.success(result.data);
                               // navigator.notification.alert(result.data);
                                
                            },
                            error: function(result) {
                                  navigator.notification.alert(result);
                         },
                        });
                    }
            },
    }),
    
    telerikdata : new kendo.data.DataSource({
        type: "odata",
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
            }
        },
    }),
   
    onShow: function(e) {
        //var item = e.view.params.id;
        var item = 1;
        //navigator.notification.alert(item);
        /*
        var location = window.location.toString();
        var id = location.substring(location.lastIndexOf('?')+4);
        */
        
        var data0 = kendo.observable({
            selectedfruit : "Gourmet",
            
            dsData: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/shops",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                options.success(result.data);
                               // navigator.notification.alert(result.data);
                                
                            },
                            error: function(result) {
                                  navigator.notification.alert(result);
                         },
                            });
                                        }
                        },
                }),
          
            
        });
        kendo.bind($('#radioshop'),data0);
        
        var data1 = {
            
           // title2:location,
           // title3:id,
            submit: function(e) {
                navigator.notification.alert(item);
                
                navigator.notification.alert(data0.selectedfruit);
                
                /*
                var header_token = null;
        		var token = null;
            
            
                token = localStorage.getItem(token);
                header_token =  "Bearer "+token;
                //navigator.notification.alert(header_token);
        
           		 $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/burn",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                		data: JSON.stringify({ gift_id: item }),
                        success: function(result) {
                            
                            navigator.notification.alert(result.data);
                            
                     
                        },
                        error: function(result) {
                            navigator.notification.alert(result.error_message);
                            
                        }
                });
                */
            },
            cancel: function() {
        			navigator.notification.alert("Y R U cancle");
  
    		},
            
        };
        kendo.bind($('#submitfunc'),data1);
        kendo.bind($('#data1Content'),data1);
        
          /*
            $.ajax({
                  type: "POST",
                  url: "https://greenapi.odooportal.com/api/v1/gift_by_id",
                  data: JSON.stringify({ id: item }),
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  success: function (result) {
                      
                      //navigator.notification.alert(result.data.image_mobile)
                      
                      var name = result.data;
                      kendo.bind($('#data2Content'),name);
                      
                      var image64 = {
                                //image_mobile: "data:image/jpeg;base64,"+result.data.image_mobile,
                          image_mobile: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABAAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigBM0ua4fxNr+v2/ii20bRWs0aa1ebfcKTgryentWDpXjrxK8mjX1/wD2edPv7v7EY41IcMDgvnsMjP0rJ1Yp2O2GAqThzpr79ev+T+49WqKG5guULwTRyqGKkxsGAI6jjvXk7fELXU1cYurSeD7eLZoIbVmjVC2AfO6Z9qqeEvEN1Zy/2BpD26Xd3qszyS3AO1EBA2jjliBwAenpU+3jext/ZdVQcn6/539D2fNGa8sHjrxFF/beoyixbTdLuZIDFsIkkbnYPYCr2neJvE2nazokWvNZ3FrrAHli3Ta0JIyPrVe2iZPL6qV7r7/K/wCWp3UuradBIY5r+1jkXgq0qgj8M0+31CzvGZbW6gnK/eEcgbH5V4R8R9L0Ky124Ftc3N5qlw3MSEbY2yAAeCWOOMDHP41f+D0Mlt4v1G3lQxyR27JInowfB6fjWarv2nJY7JZVD6m8Spva9mrfrt5nqt34agvPEtvrb3EqyQ27wCNQMEMME5rJi+Hdgmm6ZZNe3LR2F210p+UbyxyVPHSuywKMCt3CL3R5ccRViklLb/g/5v7zhT8MbIui/wBr6kLSO5FzFa+YPLjbdk4GO/8AWrX/AArrSv7Pa18+43fbjfJMCA6OSDgHHTiuwxRil7KHYt4yu95M5qz8E6Xa2Gq2bmWeHUpjLL5hGQfbiqmifDzTtI1OC+e8vL17YbbVLiTcsA9FHauwwKMCj2cexKxVZJpSeu/5fkcpZfD/AEaz8Rza0Uea4kOVWXlUJ4JHvUugeCNM8O6rd6jaNK01zkHeeFBOTXTUYoVOK6A8VWkmnJ2at8l0CiiirMAooooAKKKKACiiigD/2Q==",
                      }
                          result.data;
                      kendo.bind($('#data3Content'),image64);
                            				}
                    }); 
        */

    },

    afterShow: function() {}
});

