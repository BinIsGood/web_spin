System.register("chunks:///_virtual/main",["./Main.ts","./SaleSmartService.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SaleSmartService.ts"],(function(t){var n,e,o,a,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,a=t.Component},function(t){s=t.saleSmartService}],execute:function(){var c;e._RF.push({},"f3499ZcxqNAzJPIqLXu4ccl","Main",void 0);var i=o.ccclass;o.property,t("Main",i("Main")(c=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.onClickChatButton=function(){console.log("Chat button clicked!"),this.showSaleSmartlyChat()},o.showSaleSmartlyChat=function(){s.chatOpen((function(){var t=window;if(t.ssq){var n={user_id:"123456",custom_fields_ext:{vipLevel:"0"},lang:navigator.language||"en-US"};console.log("userInfo:",n),t.ssq.push("setLoginInfo",n),t.ssq.push("chatOpen")}}))},e}(a))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/SaleSmartService.ts",["cc"],(function(e){var t,s;return{setters:[function(e){t=e.cclegacy,s=e.sys}],execute:function(){t._RF.push({},"a1977psP2NPeof5t93bZCa6","SaleSmartService",void 0);e("saleSmartService",new(function(){function e(){this._ssLoaded=!1}var t=e.prototype;return t.chatOpen=function(e){var t=window;this._ssLoaded&&t.ssq?t.ssq.push("chatOpen"):this.loadSalesSmartlyScript(e)},t.loadSalesSmartlyScript=function(e){var t=this;if(s.isBrowser){var r=document,a="salesmartly-plugin";if(!r.getElementById(a)){var n=r.createElement("script");n.id=a,n.src="https://plugin-code.salesmartly.com/js/project_678380_805204_1784184266.js",n.onload=function(){var s=window;s.__ssc=s.__ssc||{},s.__ssc.setting={hideIcon:!0},t._ssLoaded=!0,e()},n.onerror=function(){console.error("Sale chat load err--\x3e")};var c=r.getElementsByTagName("script")[0];c.parentNode.insertBefore(n,c)}}},e}()));t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});