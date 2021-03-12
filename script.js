

function preloadImages(src_l) {
    // this entire section is preloading the images

    let img_l = [];
    let objImage;
    for (url of src_l) {
        objImage = new Image();
        objImage.src=url;
        img_l.push(objImage);
        console.log(url);
    }
    return img_l;
}

function cyclebanner(src_l,id) {
    //modularized function
    
    let new_src = "";

    // See what the src url is for the current banner image

    let banner=document.getElementById(id);
    let current_src = banner.src;
    // console.log("TEST1");
    // console.log("current_src: " + current_src);

    // Find the matching one in our src_l
    var img_url;
    // compare all addresses in our image list to the currently display image
    for (var i=0; i<src_l.length; i++) {
        img_url = src_l[i];
        if (current_src.indexOf(img_url) >= 0) { // they match
            // update the web banner with the next image in the list (go back to the beginning if we are on the last image)
            if (i == src_l.length-1) {
                banner.src = src_l[0];
            } else {
                banner.src = src_l[i+1];
            }
        }
    }


}