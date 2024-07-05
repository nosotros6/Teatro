"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4374],{74374:function(e,n,t){t.d(n,{Z:function(){return P}});var r,i=t(52322),o=t(2784),a=t(57559),s=t(25140),u=t(57531),c=t(51250),l="ad-oo",d=function(e,n,t){var r=(0,c.rZ)(l,t),i=0;if(!(void 0!==r&&("number"!==typeof r&&"string"!==typeof r||(i=parseInt(r)),i&n&&!e||!(i&n)&&e))){e||(i|=n);var o=new Date;o.setHours(o.getHours()+36),(0,c.Ys)(l,i.toString(),o,"shared")}},f=t(76635),v=t(15907),p=t(60412),_=t(62952),E=function(e,n){var t;null===window||void 0===window||null===(t=window.mediaOrchestrator)||void 0===t||t.publish(e,n)},h=t(98788),A=t(45680),I=t(16189),N=(0,I.createLogger)()("util_sisSlotMarkup"),m=function(){var e=(0,h.Z)((function(e){var n;return(0,A.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,fetch(e,{method:"GET",credentials:"include"})];case 1:return t.sent(),[2,!0];case 2:return n=t.sent(),N.error("Error fetching SIS Pixel",n),[3,3];case 3:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),w=(0,I.createLogger)()("util_sisPixel_rws");!function(e){e.GRANTED="granted",e.PROMPT="prompt",e.DENIED="denied"}(r||(r={}));var S=(new Set).add("fake_treatment_1.1").add("fake_treatment_1.2").add("fake_treatment_1.3").add("fake_control_2"),g=["mousedown","scroll","keydown"],b="https://amazon-adsystem.com",L=function(){var e=(0,h.Z)((function(){var e,n,t,r;return(0,A.__generator)(this,(function(i){switch(i.label){case 0:if(e="cookieDeprecationLabel"in navigator,n="requestStorageAccessFor"in document,!e||!n)return w.log("Browser not compatible with Related Website Sets",{hasCookieDeprecationLabel:e,hasRequestStorageAccessFor:n}),[2,!1];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,navigator.cookieDeprecationLabel.getValue()];case 2:return t=i.sent(),w.log("Received cookieDeprecationLabel: ".concat(t)),[2,S.has(t)];case 3:return r=i.sent(),w.error("Issue fetching cookieDeprecationLabel",r),[2,!1];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,h.Z)((function(){var e;return(0,A.__generator)(this,(function(n){switch(n.label){case 0:return[4,D()];case 1:switch(e=n.sent(),w.log("Received storageAccessPermissionStatus: ".concat(e)),e){case r.GRANTED:return[2,O()];case r.PROMPT:return[2,M()]}return w.log("'top-level-storage-access' permissions for ".concat(b,": denied")),[2]}}))}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,h.Z)((function(){var e,n,t;return(0,A.__generator)(this,(function(r){return navigator.userActivation?(n=new Promise((function(n){e=function(e){return n(e)}})),t=function(){var n=(0,h.Z)((function(){return(0,A.__generator)(this,(function(n){switch(n.label){case 0:return navigator.userActivation.isActive?(g.forEach((function(e){document.removeEventListener(e,t)})),[4,O()]):[2];case 1:return n.sent(),e(!0),[2]}}))}));return function(){return n.apply(this,arguments)}}(),g.forEach((function(e){document.addEventListener(e,t)})),[2,n]):[2]}))}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,h.Z)((function(){var e;return(0,A.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,navigator.permissions.query({name:"top-level-storage-access",requestedOrigin:b})];case 1:return[2,n.sent().state];case 2:return e=n.sent(),w.error("Error querying Storage Access permissions",e),[2];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,h.Z)((function(){var e;return(0,A.__generator)(this,(function(n){switch(n.label){case 0:if(!("requestStorageAccessFor"in document))return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,document.requestStorageAccessFor(b)];case 2:return n.sent(),[2,!0];case 3:return e=n.sent(),w.error("Error requesting storage access",e),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),R=function(e){var n=e.sisSlotMarkup,t=(0,o.useState)(!1),r=t[0],a=t[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,h.Z)((function(){var e;return(0,A.__generator)(this,(function(t){switch(t.label){case 0:return[4,L()];case 1:return t.sent()?[4,y()]:[2,a(!0)];case 2:return t.sent(),e=function(e){var n=e.match(/el\.src="(.*)\";/),t=n?n[1]:void 0;return t||N.error("Failed to retrieve SIS Pixel URL"),t}(n),e?[4,m(e)]:[3,4];case 3:t.sent(),t.label=4;case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]),r?(0,i.jsx)("div",{ref:v.dangerouslySetHTML.bind(null,n)}):null},T=o.memo(R),k=function(e){var n=e.adSlotsInfo;(0,_.WJ)();var t=function(){(0,v.isFullscreen)()||(0,v.makeAdAJAXRequest)(n).finally((function(){return v.responsiveAdAPIWrapper.setPreviousWindowWidth()}))},r=(0,_.OF)(n),a=r.slotsEnabled,s=r.clientSideUrlBase,u=r.atfSlots,c=r.slotSizeMap,l=r.apsSlotInfoMap;o.useEffect((function(){var e,r;if(a&&!(0,f.isEmpty)(c)&&(v.responsiveAdAPIWrapper.setPreviousWindowWidth(),e=(0,f.debounce)(t,750),window.addEventListener("resize",e),(null===n||void 0===n||null===(r=n.adRefreshInfo)||void 0===r?void 0:r.isEnabled)&&("complete"===document.readyState?(0,v.handleAutoRefresh)(n):window.addEventListener("load",(function(){return(0,v.handleAutoRefresh)(n)})))),!a||!s){var i={type:v.AdVideoEventType.NO_AUTOPLAY_VIDEO_DETECTED_EVENT_TYPE,slotName:p.A.INLINE20,timestamp:Date.now()},o={type:v.AdVideoEventType.EMPTY,slotName:"",timestamp:Date.now()};E(v.MediaEvent.MEDIA_PLAYBACK_EVENT_NAME,i),E(v.MediaEvent.NO_PRIMARY_ADS_TO_LOAD_EVENT_NAME,o)}return function(){e&&window.removeEventListener("resize",e)}}),[]);var d=(0,_.Bf)(a,s,u,c,l),h=function(e){var n,t=null===e||void 0===e?void 0:e.slots;return t&&(null===(n=t[p.A.SIS_PIXEL])||void 0===n?void 0:n.slotMarkup)}(n);return(0,i.jsxs)(i.Fragment,{children:[h?(0,i.jsx)(T,{sisSlotMarkup:h}):null,(0,i.jsx)("script",{async:!0,dangerouslySetInnerHTML:{__html:d}})]})};function P(){var e,n,t,r,o,c,l=(0,s.B)(),f=(0,u.Ok)().adSlotsInfo;void 0!==(null===l||void 0===l||null===(e=l.context)||void 0===e||null===(n=e.sidecar)||void 0===n||null===(t=n.ads)||void 0===t?void 0:t.adsCcbaConsent)&&d(null===(r=l.context.sidecar)||void 0===r||null===(o=r.ads)||void 0===o?void 0:o.adsCcbaConsent,16,null===(c=l.context)||void 0===c?void 0:c.headers);return(0,i.jsx)(a.Z,{name:"IMDbNextAdPageData",children:(0,i.jsx)(k,{adSlotsInfo:f})})}},60412:function(e,n,t){t.d(n,{A:function(){return r}});var r={INLINE20:"inline20",INLINE40_MAIN:"inline40-responsive-main",INLINE40_SIDEBAR:"inline40-responsive-sidebar",INLINE40:"inline40",INLINE50:"inline50",INLINE60:"inline60",INLINE80:"inline80",INLINEBOTTOM:"inlinebottom",INTERSTITIAL:"interstitial",MEDIAVIEWER_BANNER:"mediaviewer_banner",PROMOTED_WATCH_BAR:"promoted_watch_bar",PROVIDER_PROMOTION:"provider_promotion",SIS_PIXEL:"sis_pixel",VIDEO_CAROUSEL_ADSCANNER:"video_carousel_adscanner"}},62952:function(e,n,t){var r,i,o;t.d(n,{WJ:function(){return a},Bf:function(){return s},OF:function(){return u},Wd:function(){return c}}),function(e){e.PREMIUM="premium",e.STANDARD="standard"}(r||(r={})),function(e){e.BLANK="blank",e.UNKNOWN="unknown"}(i||(i={})),function(e){e.BLANK="blk",e.UNKNOWN="unk"}(o||(o={}));var a=function(){"undefined"===typeof window.hasAdAJAXCallFired&&(window.hasAdAJAXCallFired=!1)},s=function(e,n,t,r,i){return"\n        if (window && window.ad_utils && window.ad_utils.makeAtfSlotsCall) {\n            window.ad_utils.makeAtfSlotsCall(\n                ".concat(e,",\n                '").concat(n,"',\n                '").concat(t,"',\n                ").concat(JSON.stringify(r),",\n                ").concat(i?JSON.stringify(i):"{}",");\n    }")},u=function(e){return{slotsEnabled:!e||e.slotsEnabled,clientSideUrlBase:e?e.clientSideUrl:"",atfSlots:e&&e.slots?Object.keys(e.slots).join(","):"",slotSizeMap:e?e.slotSizeMap:{},apsSlotInfoMap:e&&e.apsSlotInfoMap||{}}},c=function(e){var n,t,r;return!e||0===(null===e||void 0===e||null===(n=e.creativeMetadata)||void 0===n?void 0:n.creativeWidth)||(null===e||void 0===e||null===(t=e.creativeMetadata)||void 0===t||null===(r=t.adProductType)||void 0===r?void 0:r.name)===i.BLANK}}}]);