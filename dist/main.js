(()=>{
    "use strict";
    var t={};
    t.g=function()
    {
        if("object"==typeof globalThis)
        return globalThis;
        try{
            return this||new Function("return this")()
        }
        catch(t){
            if("object"==typeof window)
            return window}
        }(),(()=>{
            var r;
            t.g.importScripts&&(r=t.g.location+"");
            var e=t.g.document;if(!r&&e&&(e.currentScript&&(r=e.currentScript.src),!r))
            {
                var c=e.getElementsByTagName("script");c.length&&(r=c[c.length-1].src)
            }
            if(!r)throw new Error("Automatic publicPath is not supported in this browser");
            r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})();
            const r=t.p+"9fb2c19de057d51ffb901190e7992a51.jpg",e=document.getElementById("img");
            e.src=r,e.appendChild(e)})();