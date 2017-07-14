/**
 * Created by Aditya on 7/13/2017.
 */

(function() {
    var app = angular.module("MOBILE STORE", []);
    var iphone = {
        name: "IPHONE 7S",
        color: "BLACK",
        memory: "3GBRAM, 32GB Internal Storage",
        price: 75000,
        images: "image/images3.jpg",
        isSoldOut: false

    };
    var samsung = {
        name: "samsung S8",
        color: "BLACK",
        memory: "3GBRAM, 64GB Internal Storage",
        price: 75000,
        images: "image/S8.png",
        isSoldOut: false
    };
    var nokia = {
        name: "nokia",
        color: "white",
        memory: "3GBRAM, 64GB Internal Storage",
        price: 75000,
        images: "image/image10.png",
        isSoldOut: false
    };
    app.controller("StoreController", function () {
        this.mobiles = [iphone, samsung,nokia];
        this.activeTab="Description"
        this.setActiveTab=function (mobile,tab) {
            mobile.activeTab = tab;
        }
    });
})();