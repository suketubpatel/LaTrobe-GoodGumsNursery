function memberDetails() {
    var memberGroup = document.getElementsByClassName("imgDiv");
    var i;

    // id emelment with will be update with new test
    var iAmDasiy = document.getElementById("daisy");
    var iAmJarred = document.getElementById("Jarred");
    var iAmIvy = document.getElementById("Ivy");
    var iAmRen = document.getElementById("Ren");

    for (i = 0; i < memberGroup.length; i++) {  // loop through each class element
        memberGroup[i].addEventListener("click", function () {
            
            switch (this.id) {      // check and update each members details
                case "imgDaisy": {  // Member Daisy details

                    iAmDasiy.innerHTML = "Has particular interest in larger trees <br />";
                    iAmDasiy.style.fontWeight = "normal";

                    // Clear other members displayed details
                    iAmJarred.innerHTML = "";
                    iAmIvy.innerHTML = "";
                    iAmRen.innerHTML = "";

                    break;
                }
                case "imgJarred": {     //Member Jarred details
                    
                    iAmJarred.innerHTML = "Jarred has a vast knowledge of how to get the best out of flowering plants <br />";
                    iAmJarred.style.fontWeight = "normal";

                    iAmDasiy.innerHTML = "";
                    iAmIvy.innerHTML = "";
                    iAmRen.innerHTML = "";
                    break;
                }
                case "imgIvy": {    //Member Ivy details
                    iAmIvy.innerHTML = "Ivy loves all things about all plants <br />";
                    iAmIvy.style.fontWeight = "normal";

                    iAmDasiy.innerHTML = "";
                    iAmJarred.innerHTML = "";
                    iAmRen.innerHTML = "";
                    break;
                }
                case "imgRen": {    //Member Ren details
                    iAmRen.innerHTML = "Has expertise with native plants that do well in tough conditions <br />";
                    iAmRen.style.fontWeight = "normal";

                    iAmDasiy.innerHTML = "";
                    iAmJarred.innerHTML = "";
                    iAmIvy.innerHTML = "";
                    break;
                }
            }   
        });
    }
}

memberDetails();