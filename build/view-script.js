!function(){"use strict";var e=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function t(t,r){if(t.length!==r.length)return!1;for(var a=0;a<t.length;a++)if(!((n=t[a])===(s=r[a])||e(n)&&e(s)))return!1;var n,s;return!0}function r(e,r){void 0===r&&(r=t);var a=null;function n(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(a&&a.lastThis===this&&r(t,a.lastArgs))return a.lastResult;var s=e.apply(this,t);return a={lastResult:s,lastArgs:t,lastThis:this},s}return n.clear=function(){a=null},n}const a=r((async(e,t,r)=>{var a,n;null!==(a=window)&&void 0!==a&&null!==(n=a.google)&&void 0!==n&&n.maps&&console.warn("The google.maps window property was reset. This is normal in the editor, but it can indicate problems on a published page.");const s=`https://maps.googleapis.com/maps/api/js?key=${e}${t?"&language="+t:""}${r?"&region="+r:""}`;var o;await(o=s,new Promise(((e,t)=>{const r=document.createElement("script");r.async=!0,r.setAttribute("src",o),r.onload=()=>e(r),r.onerror=t,document.body.appendChild(r)})))})),n=r((async(e,t,r,n)=>(await a(e,r,n),new window.google.maps.Map(t))));window.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("div.styled-google-maps-block").forEach((e=>{const t=JSON.parse(e.dataset.attributes);n(t.key,e,t.language,t.region).then((e=>((e,t)=>{const r={lat:parseFloat(t.center.split(",")[0]),lng:parseFloat(t.center.split(",")[1])};if(e.setOptions({center:r,zoom:t.zoom,mapTypeId:t.themedmaptype,disableDefaultUI:!t.uivisibility,styles:JSON.parse(t.styles)}),Array.isArray(e.markers)&&(e.markers.forEach((e=>e.setMap(null))),e.markers=void 0),t.markervisibility){var a;const t=new google.maps.Marker({position:r,map:e});e.markers=[...null!==(a=e.markers)&&void 0!==a?a:[],t]}})(e,t)))}))}))}();