'use strict';

app.login = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

(function(parent) {
    var token = null ;
    var loginModel = kendo.observable({
        fields: {
            password: 'password',
            username: 'top@gmail.com',
        },
        submit: function() {
            
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/login",
                        contentType: "application/json",
                        data: JSON.stringify({ login: loginModel.fields.username,
                                              password: loginModel.fields.password }),
                        success: function(result) {
                            token = null ;
                            localStorage.setItem(token,result.data.access_token);
                            navigator.notification.alert(result.data.access_token);
                            //token = result.data.access_token;
                        },
                        error: function(result) {
                            navigator.notification.alert(result);
                            
                        }
                });
            
        },
        cancel: function() {
            token = null;
            token = localStorage.getItem(token);
            //token = localStorage.getItem(token);
            if (token)
            {
                navigator.notification.alert(token);
                //window.location.href = "components/home/view.html";
                app.mobileApp.navigate('components/home/view.html');
            }else{
            navigator.notification.alert("token is null");
            };
           
        },
        logout: function() {
            //localStorage.removeItem(token);
            localStorage.clear();
            
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        showtoken: function() {
            //localStorage.removeItem(token);
            token = null;
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        viewpoint: function() {
            var point = null;
            var header_token = null;
            
            token = null;
        	token = localStorage.getItem(token);
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {
                            
                            navigator.notification.alert(result.data);
                            
                     
                        },
                        error: function(result) {
                            navigator.notification.alert(result);
                            
                        }
                });
            
        },
    });

    parent.set('loginModel', loginModel);
})(app.login);

