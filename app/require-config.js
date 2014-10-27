/*global requirejs*/

requirejs.config({

    paths: {
        
        // resources
        'requirelib': 'base/require',
        'zepto': 'base/zepto',
        'swipe': 'base/swipe',
        'zepto-module': 'base/zepto-modules',
        'common': 'base/common'
    },

    shim: {
        'zepto':{
            exports : '$'
        },
        'swipe':{
            exports: 'Swipe'
        }
        
        
    },

    modules: [
        {
            namespace: 'require',
            name: 'require',
            create: true,
            include: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/index',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/plist',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/product',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/cart',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/neworder',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/address',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/addresslist',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/order-processing',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/order-cancel',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/order-done',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/feedback',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        },
        {
            name: 'page/sender',
            exclude: [
                'requirelib',
                'zepto',
                'zepto-module',
                'common'
            ]
        }



    ]

});