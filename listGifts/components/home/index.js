'use strict';

app.home = kendo.observable({
    
    top:"top",
    /*
    data: new kendo.data.DataSource({
            transport: {
                read: {
                    //url: "components/data/books.js",
                    url: "https://greenapi.odooportal.com/api/v1/event_gifts",
                    type: "get",
                    dataType: "json"
                }
            },
        schema: {
            data: "data"
        }
    }),*/
                            
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home