parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function aa(){var e=Number(document.getElementById("currencyAmount").value).toFixed(2),t=parseInt(e).toString().length,r=document.getElementById("inputErrMsg");isNaN(e)?r.innerText="**Insert a valid number. Example: 10725.77 *Do not include commas or spaces":e<.01?r.innerText="**Insert a value between $0.01 and $9999999999.99":t>10?r.innerText="**Insert a value between $0.01 and $9999999999.99":(document.getElementById("currencyAmount").value=e,r.innerText="",ea(e))}function ba(){var e=document.getElementById("currencySource").selectedIndex,t=document.getElementById("currencyTarget").selectedIndex,r=document.getElementById("currencyTarget").options.length-1;e==t&t!=r&&(document.getElementById("currencyTarget").selectedIndex+=1),e==t&t==r&&(document.getElementById("currencyTarget").selectedIndex-=1)}function ca(){var e=document.getElementById("currencySource").selectedIndex,t=document.getElementById("currencyTarget").selectedIndex,r=document.getElementById("currencySource").options.length-1;t==e&e!=r&&(document.getElementById("currencySource").selectedIndex+=1),t==e&e==r&&(document.getElementById("currencySource").selectedIndex-=1)}function da(){var e=document.getElementById("currencySource").selectedIndex,t=document.getElementById("currencyTarget").selectedIndex;document.getElementById("currencySource").selectedIndex=t,document.getElementById("currencyTarget").selectedIndex=e,aa()}function ea(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&fa(JSON.parse(this.responseText),e)},t.open("GET","https://currencyscoop.p.rapidapi.com/latest"),t.setRequestHeader("x-rapidapi-key","02a0399372msh670c58894de2d19p1de289jsn50dde2225b05"),t.setRequestHeader("x-rapidapi-host","currencyscoop.p.rapidapi.com"),t.send()}function fa(e,t){var r=document.getElementById("currencySource").selectedIndex,n=document.getElementById("currencyTarget").selectedIndex;if(0==r&&1==n){var s=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" EUR = "+s+" USD"}else if(0==r&&2==n){var o=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" EUR = "+o+" GBP"}else if(0==r&&3==n){var d=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))*(100*t)/100).toFixed(3);document.getElementById("exchangeResult").innerHTML=t+" EUR = "+d+" JPY"}else if(0==r&&4==n){var u=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" EUR = "+u+" CAD"}else if(0==r&&5==n){var i=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" EUR = "+i+" CHF"}else if(1==r&&0==n){var a=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" USD = "+a+" EUR"}else if(1==r&&2==n){var m=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" USD = "+m+" GBP"}else if(1==r&&3==n){var x=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))*(100*t)/100).toFixed(3);document.getElementById("exchangeResult").innerHTML=t+" USD = "+x+" JPY"}else if(1==r&&4==n){var c=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" USD = "+c+" CAD"}else if(1==r&&5==n){var F=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" USD = "+F+" CHF"}else if(2==r&&0==n){var l=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" GBP = "+l+" EUR"}else if(2==r&&1==n){var p=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" GBP = "+p+" USD"}else if(2==r&&3==n){var g=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))*(100*t)/100).toFixed(3);document.getElementById("exchangeResult").innerHTML=t+" GBP = "+g+" JPY"}else if(2==r&&4==n){var b=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" GBP = "+b+" CAD"}else if(2==r&&5==n){var y=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" GBP = "+y+" CHF"}else if(3==r&&0==n){var N=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" JPY = "+N+" EUR"}else if(3==r&&1==n){var E=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" JPY = "+E+" USD"}else if(3==r&&2==n){var B=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" JPY = "+B+" GBP"}else if(3==r&&4==n){var I=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" JPY = "+I+" CAD"}else if(3==r&&5==n){var v=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" JPY = "+v+" CHF"}else if(4==r&&0==n){var T=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CAD = "+T+" EUR"}else if(4==r&&1==n){var P=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CAD = "+P+" USD"}else if(4==r&&2==n){var C=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CAD = "+C+" GBP"}else if(4==r&&3==n){var D=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))*(100*t)/100).toFixed(3);document.getElementById("exchangeResult").innerHTML=t+" CAD = "+D+" JPY"}else if(4==r&&5==n){var H=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CAD = "+H+" CHF"}else if(5==r&&0==n){var R=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CHF = "+R+" EUR"}else if(5==r&&1==n){var U=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CHF = "+U+" USD"}else if(5==r&&2==n){var h=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CHF = "+h+" GBP"}else if(5==r&&3==n){var S=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))*(100*t)/100).toFixed(3);document.getElementById("exchangeResult").innerHTML=t+" CHF = "+S+" JPY"}else if(5==r&&4==n){var f=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))*(100*t)/100).toFixed(4);document.getElementById("exchangeResult").innerHTML=t+" CHF = "+f+" CAD"}var $=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))).toFixed(4);document.getElementById("eurusd").innerText=$;var L=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))).toFixed(4);document.getElementById("eurgbp").innerText=L;var A=(1e4*Number(e.response.rates.CHF).toFixed(3)/(1e4*Number(e.response.rates.EUR).toFixed(4))).toFixed(4);document.getElementById("eurchf").innerText=A;var M=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))).toFixed(3);document.getElementById("eurjpy").innerText=M;var G=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.EUR).toFixed(4))).toFixed(4);document.getElementById("eurcad").innerText=G;var J=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))).toFixed(4);document.getElementById("usdeur").innerText=J;var Y=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))).toFixed(4);document.getElementById("usdgbp").innerText=Y;var W=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))).toFixed(4);document.getElementById("usdchf").innerText=W;var j=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))).toFixed(3);document.getElementById("usdjpy").innerText=j;var k=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.USD).toFixed(4))).toFixed(4);document.getElementById("usdcad").innerText=k;var q=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))).toFixed(4);document.getElementById("gbpeur").innerText=q;var w=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))).toFixed(4);document.getElementById("gbpusd").innerText=w;var O=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))).toFixed(4);document.getElementById("gbpchf").innerText=O;var X=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))).toFixed(3);document.getElementById("gbpjpy").innerText=X;var z=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.GBP).toFixed(4))).toFixed(4);document.getElementById("gbpcad").innerText=z;var K=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))).toFixed(4);document.getElementById("chfeur").innerText=K;var Q=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))).toFixed(4);document.getElementById("chfusd").innerText=Q;var V=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))).toFixed(4);document.getElementById("chfgbp").innerText=V;var Z=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))).toFixed(3);document.getElementById("chfjpy").innerText=Z;var _=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.CHF).toFixed(4))).toFixed(4);document.getElementById("chfcad").innerText=_;var ee=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))).toFixed(4);document.getElementById("jpyeur").innerText=ee;var te=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))).toFixed(4);document.getElementById("jpyusd").innerText=te;var re=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))).toFixed(4);document.getElementById("jpygbp").innerText=re;var ne=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))).toFixed(4);document.getElementById("jpychf").innerText=ne;var se=(1e4*Number(e.response.rates.CAD).toFixed(4)/(1e4*Number(e.response.rates.JPY).toFixed(4))).toFixed(4);document.getElementById("jpycad").innerText=se;var oe=(1e4*Number(e.response.rates.EUR).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))).toFixed(4);document.getElementById("cadeur").innerText=oe;var de=(1e4*Number(e.response.rates.USD).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))).toFixed(4);document.getElementById("cadusd").innerText=de;var ue=(1e4*Number(e.response.rates.GBP).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))).toFixed(4);document.getElementById("cadgbp").innerText=ue;var ie=(1e4*Number(e.response.rates.CHF).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))).toFixed(4);document.getElementById("cadchf").innerText=ie;var ae=(1e4*Number(e.response.rates.JPY).toFixed(4)/(1e4*Number(e.response.rates.CAD).toFixed(4))).toFixed(3);document.getElementById("cadjpy").innerText=ae}aa(),document.getElementById("convertCurrencyButton").addEventListener("click",aa),document.getElementById("currencySource").addEventListener("change",ba),document.getElementById("currencyTarget").addEventListener("change",ca),document.getElementById("changeCurrencyButton").addEventListener("click",da);return{"uP2W":{}};});