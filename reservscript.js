    var price = 0;
    var t = 0;
    function vehicule() {
        
        var choix = document.querySelector("#cars").value;
        
        switch (choix) {
            case "Citadine": document.getElementById("boiteavitesse").innerHTML = "<option> Manuelle</option>";
                document.getElementById("cars2").innerHTML = "<option> Essence</option> <option> Diesel</option> <option> Electrique</option> <option> Hybride</option>";
                prix = 12;
                break;
            case "Moto":
                document.getElementById("cars2").innerHTML = "<option> Essence</option> <option> Electrique</option>";
                document.getElementById("cars2").innerHTML = "<option> Non</option>";
                prix = 10;
                break;
            case "Compact": document.getElementById("boiteavitesse").innerHTML = "<option> Manuelle</option>";
                document.getElementById("cars2").innerHTML = "<option> Essence</option> <option> Hybride</option> <option> Diesel </option>  ";
                prix = 14;

                break;
            case "Utilitaire": document.getElementById("boiteavitesse").innerHTML = "<option> Manuelle</option>";
                document.getElementById("cars2").innerHTML = "<option> Diesel </option>  ";
                prix = 16;
    
                break;

            case "Berline": document.getElementById("boiteavitesse").innerHTML = "<option> Automatique </option>";
                document.getElementById("cars2").innerHTML = "<option> Essence</option> <option> Hybride</option> <option> Diesel </option>  ";
                prix = 20;
                break;

            case "Engine de Chantier": document.getElementById("boiteavitesse").innerHTML = "<option> Manuelle</option>";
                document.getElementById("cars2").innerHTML = "<option> Essence</option> <option> Diesel </option>  ";
                prix = 900;

                break;

            case "Camion": document.getElementById("boiteavitesse").innerHTML = "<option> Automatique </option>";
                document.getElementById("cars2").innerHTML = "<option> Diesel </option>  ";
                prix = 250;
                break;
            default: document.getElementById("boiteavitesse").innerHTML = "<option>  </option>";
                document.getElementById("cars2").innerHTML = "<option>  </option>  ";
        }


    }
    var nom = document.getElementById("cars2");
    
    var carburant = 0;
    
   
    function carb() {

        switch (nom.value.toLowerCase()) {
            case "essence": carburant = 0.14;
                break;

            case "hybride": carburant = 0.09;
                break;

            case "diesel": carburant = 0.21;
                break;

            case "electrique": carburant = 0.05;
                break;
                default : ;


        }

    }
    var boiteav = 0;
    function boite() {
        switch (nom.value.toLowerCase()) {
            case "manuelle": boiteav = 0;
                break;

            case "automatique": boiteav = 0.19;
                break;
                default : ;
        }

    }


    function prixTotal() {
        var n = document.getElementById("date").value;
        totale = n * (prix + (prix * carburant) + (prix * boiteav)) + " €";
        document.getElementById("displayTotal").innerText = totale;
    }