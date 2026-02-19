var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function ToggleDiv() {
  var x = document.getElementById("DIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

if (window.location.protocol != "https:") {
  location.href = location.href.replace("http://", "https://");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function(registration) {
        console.log(
          "Service worker successfully registered on scope",
          registration.scope
        );
      })
      .catch(function(error) {
        console.log("Service worker failed to register");
      });
  });
}

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
    navigator.userAgent
  )
) {
  window.open("//web.archive.org/web/20250701082733/http://mobilmoo.glitch.me", "_self");
}

function login() {
  if (confirm("De login heeft een wachttijd, wil je de login laden?")) {
    window.open("login.html");
    close();
  } else {
    alert("Geannuleerd!");
  }
}

}

/*
     FILE ARCHIVED ON 08:27:33 Jul 01, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:23:34 Feb 19, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.66
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 20.423
  LoadShardBlock: 126.726 (3)
  PetaboxLoader3.datanode: 204.777 (4)
  load_resource: 170.477
  PetaboxLoader3.resolve: 77.176
*/