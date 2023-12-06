var myUrl = "";

function readUrl() {
    // read url string stor in constant variable urlString
    const urlString = window.location.search;

    return String(urlString);   // return as string
}

function getPeram(url) {

    // Get string from the url
    var urlString = url ? url.split("?") : window.location.search.slice(1);

    urlString = String(urlString);      // Convert object into string

    // Total price count for all plants ordered
    var subTotal = 0.0;
    var payMethod;

    // Price array
    const price = [18.99, 21.94, 30.97, 34.10, 34.91, 0, 29.00, 33.33, 11.97, 20.00, 24.40, 59.00, 19.62];

    // if urlString is not emplty
    if (urlString) {
        
        // remove any string after "#" sign it is not part of our string
        urlString = urlString.split("#")[0];

        // Split urlString int to each perameter component and store in and array
        var arrUrl = urlString.split("&");

        // loop through each component
        for (var i = 0; i < arrUrl.length; i++) {

            // seperate name and value pare
            var arr = arrUrl[i].split("=");

            // get name and value per and store in seperate variables
            var vName = arr[0];
            var vValue = arr[1].replaceAll("+", " ").replace("%40", "@");

            

            // Display personal details
            if (vValue != "") {     // if interred value is not emply
                
                console.log(vName + ": " + vValue);
                switch (vName) {
                    case (",fullName"): {
                        document.getElementById("fullName").innerHTML = vValue;
                        break;
                    }
                    case ("gender"): {
                        document.getElementById("gender").innerHTML = vValue;
                        break;
                    }
                    case ("street"): {
                        document.getElementById("street").innerHTML = vValue;
                        break;
                    }
                    case ("city"): {
                        document.getElementById("city").innerHTML = vValue;
                        break;
                    }
                    case ("country"): {
                        document.getElementById("country").innerHTML = vValue;
                        break;
                    } case ("state"): {
                        document.getElementById("state").innerHTML = vValue;
                        break;
                    }
                    case ("pinCode"): {
                        document.getElementById("pinCode").innerHTML = vValue;
                        break;
                    }
                    case ("phone"): {
                        document.getElementById("phone").innerHTML = "+61" + vValue;
                        break;
                    }
                    case ("email"): {
                        document.getElementById("email").innerHTML = vValue;
                        break;
                    }
                    case ("quntitySilverPrincess"): {
                        if (vValue > 0)
                            subTotal += insertRow("Silver Princess", vValue, price[0]);
                        break;
                    }
                    case ("quntitySnowGum"): {
                        if (vValue > 0)
                            subTotal += insertRow("Snow Gum", vValue, price[1]);
                        break;
                    }
                    case ("quntityRedFloeringGum"): {
                        if (vValue > 0)
                            subTotal += insertRow("Red Floering Gum", vValue, price[2]);
                        break;
                    }
                    case ("quntityCrimsonBottlebrush"): {
                        if (vValue > 0)
                            subTotal += insertRow("Crimson Bottlebrush", vValue, price[3]);
                        break;
                    }
                    case ("quntityHappyWanderes"): {
                        if (vValue > 0)
                            subTotal += insertRow("Happy Wanderers*", vValue, price[4]);
                        break;
                    }
                    case ("quntityGoldenWattles"): {
                        if (vValue > 0)
                            subTotal += insertRow("Golden Wattles", vValue, price[5]);
                        break;
                    }
                    case ("quntityLillyPill"): {
                        if (vValue > 0)
                            subTotal += insertRow("Lilly Pill", vValue, price[6]);
                        break;
                    }
                    case ("quntityCanberraBells"): {
                        if (vValue > 0)
                            subTotal += insertRow("Canberra Bells", vValue, price[7]);
                        break;
                    }
                    case ("quntityGrevilliaGirecracker"): {
                        if (vValue > 0)
                            subTotal += insertRow("Grevillia Girecracker*", vValue, price[8]);
                        break;
                    }
                    case ("quntitySillkyOak"): {
                        if (vValue > 0)
                            subTotal += insertRow(" Sillky Oak", vValue, price[9]);
                        break;
                    }
                    case ("quntityWaratah"): {
                        if (vValue > 0)
                            subTotal += insertRow("Waratah", vValue, price[10]);
                        break;
                    }
                    case ("quntityRoseBoronia"): {
                        if (vValue > 0)
                            subTotal += insertRow(" Rose Boronia", vValue, price[11]);
                        break;
                    }
                    case ("quntityTallKangarooPaw"): {
                        if (vValue > 0)
                            subTotal += insertRow(" Tall Kangaroo Paw*", vValue, price[12]);
                        break;
                    }
                    case ("quntityRustyGum"): {
                        if (vValue > 0)
                            subTotal += insertRow("Rusty Gum", vValue, price[13]);
                        break;
                    }
                    case ("payment"): {
                        payMethod = vValue;
                        break;
                    }
                    case ("instruction"): {
                        if (vValue !== "") {
                            document.getElementById("instruction").innerHTML =              "<span>Special Instructions: </span>" + vValue;
                        } else {
                            document.getElementById("instruction").innerHTML =              "<span>Special Instructions: </span>" + "No special             requiest";
                        }
                        document.getElementById("instruction").style.backgroundColor = "#fadec9";

                        document.getElementById("instruction").style.border = "2px inset #F7FFF7";
                    }
                }
                
            }
            
        }

        // Show sub total and payment method
        insertRowSubTotal(subTotal, payMethod);
    }
}

// Insert new rows for each plant selected
function insertRow(plantName, quntity, price) {
    // Get table count rows and coloms
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length;
    var total = 0.0;

    var row = table.insertRow(rowCount);    // add row

    for (var i = 0; i < colCount; i++) {

        var cel = row.insertCell(i);        // create cell

        if (i == 0) {                       // add value to each cell
            cel.innerHTML = plantName;
        } else if (i == 1) {
            cel.innerHTML = quntity;
            cel.style.textAlign = "right";
        } else if (i == 2) {
            if (price == 0) {
                cel.innerHTML = "Free";
                cel.style.textAlign = "right";
            } else {
                cel.innerHTML = "$"+price.toFixed(2);
                cel.style.textAlign = "right";
            }
        } else {
            total = quntity * price;
            cel.innerHTML = "$"+total.toFixed(2);
            cel.style.textAlign = "right";
        }
    }

    return total;
}

// Insert new rows for each plant selected
function insertRowSubTotal(sTotal, payMethod) {
    // Get table count rows and coloms
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length;

    // add row for sub total
    var row = table.insertRow(rowCount);            // add row

    for (var i = 0; i < colCount; i++) {        // add columns
        var cel = row.insertCell(i);            // create cell
            if (i == 0) {                       // add value to each cell
            } else if (i == 1) {
            } else if (i == 2) {
                cel.innerHTML = "Sub Total";
                cel.style.fontWeight = "bolder";
                cel.style.color = "red";
                cel.style.textAlign = "right";
            } else {
                cel.innerHTML = "$"+sTotal.toFixed(2);
                cel.style.fontWeight = "bolder";
                cel.style.textAlign = "right";
            }
        cel.style.fontSize = "large";
    }

    // add row for Footer
    var row = table.insertRow(rowCount + 1);            // add row

    for (var i = 0; i < colCount; i++) {        // add columns
        var cel = row.insertCell(i);            // create cell
        if (i == 0) {                       // add value to each cell
            cel.innerHTML = "* Sale prices";
        } else if (i == 1) {
        } else if (i == 2) {
            cel.innerHTML = "Payment Method";
            cel.style.fontWeight = "bolder";
            cel.style.color = "Green";
            cel.style.textAlign = "right";
        } else {
            switch (payMethod) {
                case "master": {
                    cel.innerHTML = '<img src="images/icons/mastercard.png" alt="Paypal payment" width="40" height="40" />'
                    break;
                }
                case "visa": {
                    cel.innerHTML = '<img src="images/icons/visa.png" alt="Paypal payment" width="40" height="40" />'
                    break;
                }
                default: {
                    cel.innerHTML = '<img src="images/icons/paypal.png" alt="Paypal payment" width="40" height="40" />'
                    break;
                }
            }
            cel.style.textAlign = "center";
        }
        cel.style.fontSize = "large";
    }

}   

myUrl = readUrl();      // Function call
getPeram(myUrl);        // Function call