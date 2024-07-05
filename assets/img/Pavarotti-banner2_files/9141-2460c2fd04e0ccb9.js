"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9141],{25710:function(e,n,t){t.d(n,{r:function(){return d},Z:function(){return f}});var r=t(52322),a=t(2784),o=t(45103),i=t(11998),s=t(32735),c=t(31619),u=t(90551),l=t(26688),d=function(e){var n=e.contributeButton,t=e.contributeUrl,d=e.iframeClassName,f=e.smallBreakpointAction,h=(0,a.useState)(!1),m=h[0],p=h[1],b=function(){return p(!1)},v=function(e){e.stopPropagation()},g=function(e){var n=e.breakpoint,t=e.isLoggedIn,r=e.largeBreakpointAction,a=e.refTagForLoginRedirect,o=e.smallBreakpointAction,i=n.l||n.xl;return function(e){e.preventDefault(),i?t?r(e):(0,l.r)(a):o(e)}}({isLoggedIn:(0,u.n)(),breakpoint:(0,o.useBreakpointsAsConfig)(),smallBreakpointAction:f,largeBreakpointAction:function(e){e.stopPropagation(),e.preventDefault(),p(!0)}}),_=a.cloneElement(n,{"data-testid":"edit-action-button",href:t,onClick:g,onKeyDown:function(e){(0,i.isEnterOrSpaceKey)(e)&&g(e)}}),k=(0,c.N)({id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"});return(0,r.jsxs)(r.Fragment,{children:[_,m&&(0,r.jsx)("div",{onClick:v,onMouseLeave:v,"data-testid":"contribute-iframe-drawer-container",children:(0,r.jsx)(o.Drawer,{isOpen:m,onCloseClicked:b,side:"right",closePromptLabel:k,children:(0,r.jsx)(s.o,{src:t,onCloseMeCallback:b,className:d,"data-testid":"contribute-iframe"})})})]})},f=d},32735:function(e,n,t){t.d(n,{o:function(){return d}});var r=t(92228),a=t(52322),o=t(72779),i=t.n(o),s=t(2784),c=t(19596),u=t(8451);function l(){var e=(0,r.Z)(["\n    height: calc(100vh - 6rem);\n    width: 100%;\n    position: absolute;\n    overflow-y: scroll;\n"]);return l=function(){return e},e}var d=function(e){var n=s.useRef(),t=function(t){var r;(null===(r=n.current.contentWindow)||void 0===r?void 0:r.location.href)===u.$R&&e.onCloseMeCallback()};return s.useEffect((function(){return n.current.addEventListener("load",t),function(){var e;null===(e=n.current)||void 0===e||e.removeEventListener("load",t)}}),[]),(0,a.jsx)(f,{"data-testid":"contribute-iframe",ref:n,src:e.src,className:i()(e.className)})},f=c.default.iframe.withConfig({componentId:"sc-a044defc-0"})(l())},19141:function(e,n,t){t.d(n,{Tz:function(){return he},ZP:function(){return me}});var r=t(70865),a=t(52322),o=t(72779),i=t.n(o),s=t(2784),c=t(45103),u=t(31619),l=t(13813),d=t(95460),f=t(11992),h=t(79611),m=t(2366),p=t(98621),b={id:"shareMenu_ariaLabel_shareOnSocialMedia",defaultMessage:"Share on social media"},v={id:"shareMenu_shareText_checkoutThisLink",defaultMessage:"Check out this link on IMDb!"},g=v,_={id:"shareMenu_copyLink",defaultMessage:"Copy Link"},k={id:"shareMenu_emailLink",defaultMessage:"Email Link"},y={id:"shareMenu_sharePage",defaultMessage:"Share page"},x={id:"shareMenu_shareFailed",defaultMessage:"Share failed. Please try again later."},L=function(e){return"string"===typeof e?e:(0,u.N)(e)},N=t(30696),w=t(92228),I=t(14865),S=t(72282),P=t.n(S),C=t(19596),T=t(11998),M=t(20701),E=t(54364),A=t(25710),Z=t(8451),j=t(47842),B=t(96670),U=t(66383),R=t(64846),D=t.n(R),O="ref_",H="ext_shr_em",K="ext_shr_fb",q="ext_shr_tw",$="ext_shr_lnk",F=function(e,n,t,r){return{shareLabelText:e,shareLinkUrl:n,shareIconName:t,shareLinkTarget:r}},V=function(e){var n=(0,U.Z)(e.split("?"),2),t=n[0],r=n[1],a={};if(r){var o=!0,i=!1,s=void 0;try{for(var c,u=r.split("&")[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var l=c.value,d=(0,U.Z)(l.split("="),2),f=d[0],h=d[1];a[f]=h}}catch(m){i=!0,s=m}finally{try{o||null==u.return||u.return()}finally{if(i)throw s}}}return[t,a]},X=function(e){var n=(0,U.Z)(V(e),2),t=n[0],a=n[1];return t+"?"+new URLSearchParams((0,B.Z)((0,r.Z)({},a),(0,j.Z)({},O,$))).toString()},z=function(e,n){var t=Y(e),r={url:X(t)};(0,h.I)(window.navigator,r,n)},Y=function(e){if(I.isNode)throw new Error("not supported from node");var n=null!==e&&void 0!==e?e:window.location.href,t=new(D())(n,window.location,!0);return delete t.query.ref_,t.set("query",t.query),t.host||t.set("host",window.location.host),t.toString()};function W(e){return!!e&&e.length>0}function G(){var e=(0,w.Z)(["\n    cursor: pointer;\n"]);return G=function(){return e},e}var J,Q,ee,ne={email:"share-em",facebook:"share-fb",twitter:"share-tw",link:"share-lnk"},te={email:"share_em",facebook:"share_fb",twitter:"share_tw",link:"share_lnk"},re="link",ae="extra-contribute-action-",oe="contribute-extra-action-",ie=C.default.div.withConfig({componentId:"sc-ddb01fca-0"})(G()),se=function(e){var n=(0,l.y)(),t=n.pageType,o=n.subPageType,s=n.pageConst,b=n.refTagPrefix,v=(0,c.useSnackbar)().sendSnack,g=(0,p.hg)({weblabID:m.lh.IMDB_NEXT_EXPERIMENT_NATIVE_SHARE_IN_SHARE_BUTTON_993877,treatments:{T1:!0}}),N=(0,u.N)({id:"common_linkCopied",defaultMessage:"Link copied"}),w=(0,u.N)(x);if(I.isNode)return null;var S=function(n){return function(r){r.stopPropagation(),(0,M.P)(ne[n.shareIconName]),b&&(0,d.K8)("".concat(b,"_").concat(te[n.shareIconName]),{type:t,subType:o,id:s},ne[n.shareIconName],f.qB.ACTION_ONLY),e.interactionHandler(n.shareLinkUrl)&&r.preventDefault(),n.shareIconName===re&&v({primaryText:N,type:"auto"})}},C=function(n){return function(t){t.stopPropagation(),z(n.shareLinkUrl,R),e.interactionHandler(n.shareLinkUrl)&&t.preventDefault()}},R=function(e){"AbortError"!==(null===e||void 0===e?void 0:e.name)&&v({primaryText:w,baseColor:"accent3",type:"auto"})},D=Y(e.url),G=function(){var n,t;return(null===(n=e.shareProps)||void 0===n?void 0:n.suppressDefaultActions)?[]:(0,h.v)(window.navigator)&&g?(t=D,[F(y,X(t),"share","_blank")]).map((function(e){return function(e){return(0,a.jsx)(c.ListItem,{preIconName:e.shareIconName,target:e.shareLinkTarget,className:i()(["sharemenu-listitem","sharemenu-nativeshare"]),onClick:function(n){return n&&C(e)(n)},onKeyDown:function(n){return(0,T.isEnterOrSpaceKey)(n)&&n&&C(e)(n)},children:L(e.shareLabelText)},e.shareIconName)}(e)})):function(e,n){var t=encodeURIComponent(L(n.emailSubject)),a=encodeURIComponent(L(n.shareBody)),o=(0,U.Z)(V(e),2),i=o[0],s=o[1],c=encodeURIComponent(i+"?"+new URLSearchParams((0,B.Z)((0,r.Z)({},s),(0,j.Z)({},O,K))).toString()),u=encodeURIComponent(i+"?"+new URLSearchParams((0,B.Z)((0,r.Z)({},s),(0,j.Z)({},O,q))).toString()),l=encodeURIComponent(i+"?"+new URLSearchParams((0,B.Z)((0,r.Z)({},s),(0,j.Z)({},O,H))).toString()),d="".concat("https://www.facebook.com/sharer.php","?u=").concat(c),f="".concat("https://twitter.com/intent/tweet","?text=").concat(a," - ").concat(u),h="mailto:?subject=".concat(t,"&body=").concat(a," - ").concat(l);return[F("Facebook",d,"facebook","_blank"),F("Twitter",f,"twitter","_blank"),F(k,h,"email","_blank"),F(_,i+"?"+new URLSearchParams((0,B.Z)((0,r.Z)({},s),(0,j.Z)({},O,$))).toString(),"link","_copy")]}(D,e.shareProps).map((function(e){return"_copy"===e.shareLinkTarget?function(e){return(0,a.jsx)(P(),{text:e.shareLinkUrl,options:{format:"text/plain"},children:(0,a.jsx)(c.ListItem,{className:i()(["sharemenu-listitem","sharemenu-copylink"]),preIconName:re,onClick:function(n){return n&&S(e)(n)},onKeyDown:function(n){return(0,T.isEnterOrSpaceKey)(n)&&n&&S(e)(n)},children:L(e.shareLabelText)})},"copy-to-clipboard")}(e):function(e){return(0,a.jsx)(c.ListItem,{preIconName:e.shareIconName,href:e.shareLinkUrl,target:e.shareLinkTarget,className:"sharemenu-listitem",onClick:function(n){return n&&S(e)(n)},onKeyDown:function(n){return(0,T.isEnterOrSpaceKey)(n)&&n&&S(e)(n)},children:L(e.shareLabelText)},e.shareIconName)}(e)}))}();if(W(e.shareProps.extraActions)){var J;G.push((0,a.jsx)(c.ListDivider,{},"divider"));var Q=0;null===(J=e.shareProps.extraActions)||void 0===J||J.forEach((function(n,t){n.isContributionAction?(Q+=1,G.push(function(e,n,t){var o=e.linkUrl,s={contributeButton:(0,a.jsx)(ie,{onMouseLeave:function(e){return e.stopPropagation()},"data-testid":ae+n,children:(0,a.jsx)(c.ListItem,{className:i()([e.className,"sharemenu-listitem"]),preIconName:e.iconName,postIconName:e.postIconName,children:L(e.label)},e.iconName+"-"+t)}),contributeUrl:(0,E.oq)(o,Z.$R,!0),iframeClassName:oe+n,smallBreakpointAction:function(e){window.open((0,E.oq)(o,window.location.href,!0),"_self")}};return(0,a.jsx)(A.Z,(0,r.Z)({},s),t)}(n,Q,t))):G.push(function(n,t){var r=n.linkUrl;return(0,a.jsx)(c.ListItem,{className:i()([n.className,"sharemenu-listitem"]),preIconName:n.iconName,postIconName:n.postIconName,href:r,target:n.linkTarget,onClick:function(t){if(n.onSelect)n.onSelect(t);else{t.stopPropagation();var a=!1;n.handler&&n.handler(r)&&(a=!0),e.interactionHandler(r)&&(a=!0),a&&t.preventDefault()}},onKeyDown:function(e){(0,T.isEnterOrSpaceKey)(e)&&n.onSelect&&n.onSelect(e)},children:L(n.label)},n.iconName+"-"+t)}(n,t))}))}return(0,a.jsx)(c.List,{className:"sharemenu-list",children:G})},ce=function(e){return(0,a.jsx)(c.BottomSheet,{isOpen:e.menuVisibility,onCloseClicked:function(){return e.interactionHandler()},"data-testid":"share-bottom-sheet",closePromptLabel:(0,u.N)({id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"}),children:(0,a.jsx)(se,(0,r.Z)({},e))})},ue=t(96876),le=function(e){var n=function(){return e.interactionHandler()};return(0,s.useEffect)((function(){return window.addEventListener("click",n),function(){return window.removeEventListener("click",n)}}),[]),(0,a.jsx)(ue.l,{onMouseLeave:n,"data-testid":"share-container",children:(0,a.jsx)(c.SetPalette,{palette:"dark",children:(0,a.jsx)(c.Menu,{menuID:"media-details-share-button",isVisible:e.menuVisibility,mode:"anchored",children:(0,a.jsx)(se,(0,r.Z)({},e))})})})},de=function(e){var n=(0,c.useBreakpointsAsConfig)(),t=n.s||n.xs,o=e.forceBottomSheet||t?ce:le;return(0,a.jsx)(N.Z,{children:(0,a.jsx)(o,(0,r.Z)({},e))})},fe=function(e){return{shareBody:null!==(J=null===e||void 0===e?void 0:e.shareBody)&&void 0!==J?J:v,emailSubject:null!==(Q=null===e||void 0===e?void 0:e.emailSubject)&&void 0!==Q?Q:g,label:null!==(ee=null===e||void 0===e?void 0:e.label)&&void 0!==ee?ee:b,extraActions:null===e||void 0===e?void 0:e.extraActions,suppressDefaultActions:null===e||void 0===e?void 0:e.suppressDefaultActions}};var he=function(e){var n,t=(0,s.useState)(!1),o=t[0],b=t[1],v=(0,l.y)(),g=v.pageType,_=v.pageConst,k=v.subPageType,y=(0,c.useSnackbar)().sendSnack,N=(0,p.hg)({weblabID:m.lh.IMDB_NEXT_EXPERIMENT_NATIVE_SHARE_IN_SHARE_BUTTON_993877,treatments:{T1:!0}}),w=(0,u.N)(x),I=fe(e.shareProps),S=function(e){"AbortError"!==(null===e||void 0===e?void 0:e.name)&&y({primaryText:w,baseColor:"accent3",type:"auto"})},P=function(){b(!o)},C=L(I.label),T={shareProps:I,url:e.url,forceBottomSheet:e.forceBottomSheet,interactionHandler:function(n){return b(!1),!(!n||!e.shareHandler)&&e.shareHandler(n)},menuVisibility:o};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.IconButton,{disabled:e.disabled,name:null!==(n=e.iconButtonName)&&void 0!==n?n:"share",label:C,onClick:function(n){var t,r;(n.stopPropagation(),function(e,n){var t="".concat(n).concat("-menu-open");(0,d.ar)(e,t,f.qB.POP_UP)}({type:g,subType:k,id:_},e.pageActionPrefix),(0,h.v)(window.navigator)&&!W(null===(t=e.shareProps)||void 0===t?void 0:t.extraActions)&&N)?z(null===(r=e.shareProps)||void 0===r?void 0:r.url,S):P()},className:i()("sharemenu-iconbutton",e.className),onColor:e.onColor}),(0,a.jsx)(de,(0,r.Z)({},T))]})},me=he},96876:function(e,n,t){t.d(n,{l:function(){return o}});var r=t(92228);function a(){var e=(0,r.Z)(["\n    position: relative;\n    right: 0;\n    top: 0;\n    text-align: left;\n    z-index: 11;\n"]);return a=function(){return e},e}var o=t(19596).default.div.withConfig({componentId:"sc-eece9490-0"})(a())},8451:function(e,n,t){t.d(n,{$C:function(){return c},$R:function(){return l},KL:function(){return h},_P:function(){return d},yS:function(){return f},z7:function(){return u}});var r=t(92228),a=t(30382),o=t.n(a);function i(){var e=(0,r.Z)(['\n    fragment MediaSheetImageMeta on Image {\n        copyright\n        createdBy\n        caption {\n            plaidHtml(queryParams: $queryParams)\n        }\n        titles {\n            id\n            titleText {\n                text\n            }\n        }\n        source {\n            attributionUrl\n            text\n            banner {\n                url\n                attributionUrl\n            }\n        }\n        names {\n            id\n            nameText {\n                text\n            }\n        }\n        countries {\n            text\n        }\n        languages {\n            text\n        }\n        # On mobile, we need to refetch correctionLink and reportingLink\n        # data with isInIframe: false.\n        #\n        # This refetching is handled by the ContributeActionButton component.\n        correctionLink(\n            relatedId: $id\n            contributionContext: {\n                isInIframe: true\n                returnUrl: "','"\n                business: "consumer"\n            }\n        ) {\n            url\n        }\n        reportingLink(\n            relatedId: $id\n            contributionContext: {\n                isInIframe: true\n                returnUrl: "','"\n                business: "consumer"\n            }\n        ) {\n            url\n        }\n    }\n']);return i=function(){return e},e}function s(){var e=(0,r.Z)(["\n    fragment MediaSheetListItemMeta on ListItemNode {\n        description {\n            originalText {\n                plaidHtml(queryParams: $queryParams)\n            }\n        }\n    }\n"]);return s=function(){return e},e}var c={CLOSE:"media-sheet__close",OPEN:"media-sheet__open",EDIT:"media-sheet__edit",REPORT:"media-sheet__report"},u={PARENT:"media-sheet",ATTR_BANNER:"media-sheet__attr-banner",COUNT_DISPLAY:"media-sheet__count-display"},l="https://www.imdb.com/close_me",d=o()(i(),l,l),f=o()(s()),h={closeSheetAriaLabel:{id:"common_buttons_close",defaultMessage:"Close"},openSheetAriaLabel:{id:"common_buttons_open",defaultMessage:"Open"},editAriaLabel:{id:"mediaSheet_ariaLabel_edit",defaultMessage:"Edit tags"},reportAriaLabel:{id:"mediaSheet_ariaLabel_report",defaultMessage:"Report image"},nameLabel:{id:"mediaSheet_label_name",defaultMessage:"People"},titleLabel:{id:"mediaSheet_label_title",defaultMessage:"Titles"},countryLabel:{id:"mediaSheet_label_country",defaultMessage:"Countries"},languageLabel:{id:"mediaSheet_label_language",defaultMessage:"Languages"},photoByAttributionPrefix:{id:"mediaSheet_attribution_photoBy",defaultMessage:"Photo by"},courtesyAttributionPrefix:{id:"mediaSheet_attribution_courtesy",defaultMessage:"Image courtesy"}}},30696:function(e,n,t){var r=t(52322),a=(t(2784),t(13061));n.Z=function(e){var n=e.children;return(0,a.Z)()?(0,r.jsx)(r.Fragment,{children:n}):null}},13061:function(e,n,t){var r=t(2784);n.Z=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return(0,r.useEffect)((function(){t(!0)}),[]),n}},79611:function(e,n,t){t.d(n,{v:function(){return r},I:function(){return i}});var r=function(e){return/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(e.userAgent)&&Boolean(e.share)},a=t(98788),o=t(45680),i=function(){var e=(0,a.Z)((function(e,n,t){var r;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,e.share(n)];case 1:return a.sent(),[3,3];case 2:return r=a.sent(),t&&t(r),[3,3];case 3:return[2]}}))}));return function(n,t,r){return e.apply(this,arguments)}}()}}]);