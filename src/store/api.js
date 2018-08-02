
import Vue from 'vue'
import axios from 'axios'

var querystring = require('querystring')

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


var debug = true;
var showStr = false;

export function api(url, options) {
    var p = {};
    if (!url) url = '/api'
    var defaultOptions = {
        'type': 'get',
        'params': {}
    };
    // window.location.href="http://www.baidu.com"
    var opt = Object.assign(defaultOptions, options);
    // console.log("opt",opt)

    if (url.indexOf('http') == -1) {
        if (window.localStorage.token) {
            axios.defaults.headers.common['auth'] = window.localStorage.token;
        }
    }
    if (opt.type === "get") {
        if (options && options.params) {
            p = axios.get(url + "?" + querystring.stringify(opt.params));
        } else {
            p = axios.get(url);
        }

    } else if (opt.type === "post") {
        console.log("post data", opt.params)
        p = axios(url, {
            method: "POST",
            data: querystring.stringify(opt.params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
    p.then(resp => {
        // console.log(resp)
        if (debug) {
            console.log(`resp.data from ${url}`, opt.data);
            console.log(`%c${url} result`, 'color:green', resp.data)
        }
        if (showStr) {
            console.log(JSON.stringify(resp));
        }
        if (resp.headers.refresh_token) {
            window.localStorage.token = resp.headers.refresh_token;
        }

    }).catch(err => {
        console.log(err)
        window.location.href = "/#/login"
    })
    return p
}

export function $api(url, options) {
    var p = {};
    if (!url) url = '/api'
    var defaultOptions = {
        'type': 'get',
        'params': {}
    };
    // window.location.href="http://www.baidu.com"
    var opt = Object.assign(defaultOptions, options);
    // console.log("opt",opt)


    if (opt.type === "get") {
        p = $.get(url, opt.params);
    } else if (opt.type === "post") {
        console.log("post data")
        p = $.post(url, opt.params);
    }
    p.then(resp => {
        if (debug) {
            console.log(`resp.data from ${url}`, JSON.stringify(opt.params));
            console.log(`%c${url} result`, 'color:blue', resp.data)
            if (console.table) {
                // console.table(resp.data)
            }
        }
        if (showStr) {
            console.log(JSON.stringify(resp));
        }

    }, resp => {
        if (resp.status == '401') {
            //window.location.href="/#/login"
        }
        console.log("request error");
    });
    return p;
}
