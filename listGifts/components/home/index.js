'use strict';

app.home = kendo.observable({
    
			data: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "GET",
                            url: "https://greenapi.odooportal.com/api/v1/event_gifts",
                            //data:  "{'sUsername':'admin@mail.com','sPassword':'13123','sUserID':'1539','sClubID':'1'}",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                options.success(result);
                            }
                        });
                    }
            },
        schema: {
            data: "data"
        }
    }),
    
    onShow: function() {},
    afterShow: function() {}
});

