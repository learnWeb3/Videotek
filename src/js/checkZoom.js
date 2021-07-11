function checkZoomAndLoadCss() {

    var zoom = window.devicePixelRatio;

    if (zoom >= 1.5) {
        $("head").append("<link rel='stylesheet' href='src/css/font-size-scale-150.css'>");

    } else {
        $("head").append("<link rel='stylesheet' href='src/css/font-size-base.css'>")
    }
}

checkZoomAndLoadCss();