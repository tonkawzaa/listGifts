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
    
   
    onShow: function(e) {
        var item = e.view.params.id;
      
        /*
        var location = window.location.toString();
        var id = location.substring(location.lastIndexOf('?')+4);
        */
        
        var data1 = {
            title: item,
           // title2:location,
           // title3:id,
            submit: function() {
                navigator.notification.alert(item);
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
                		data: JSON.stringify({ gift_id: "2" }),
                        success: function(result) {
                            
                            navigator.notification.alert(result.data);
                            
                     
                        },
                        error: function(result) {
                            navigator.notification.alert(result.error_message);
                            
                        }
                });
            },
            cancel: function() {
        			navigator.notification.alert("Y R U cancle");
  
    		},
            
        };
        kendo.bind($('#submitfunc'),data1);
        kendo.bind($('#data1Content'),data1);
          
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
                                image_mobile: "data:image/jpeg;base64,"+result.data.image_mobile,
                      }
                          result.data;
                      kendo.bind($('#data3Content'),image64);
                            				}
                    }); 
        

    },

    afterShow: function() {}
});