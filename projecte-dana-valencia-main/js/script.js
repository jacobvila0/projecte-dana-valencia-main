// Aquest codi s'executa quan es carrega la pàgina
window.onload = function () {
    // Array associatiu per guardar les dades de l'usuari
    var client = [];
    // String on anirem guardant els errors que trobem
    var errors = "";
    // Variable per als bucles
    var i;
    // Comptadors per validar nom i email
    var espais = 0;
    var arroba = 0;
    var punt = 0;
    // Variables per guardar el nom i el dni ja corregits
    var nomBe = "";
    var dniBe = "";

    // Demanem les dades a l'usuari
    client["dni"] = prompt("Introdueix el teu dni", "73663265s");
    client["nom"] = prompt("Introdueix el teu nom", "Jacob Vila");
    client["email"] = prompt("Introdueix el teu email", "jacob@gmail.com");

    // Comprovem si el nom està buit
    if (client["nom"] == null || client["nom"] == "") {
        errors = errors + "nom de client ha de tenir 2 paraules\n";
    } else {
        // Comptem quants espais hi ha al nom
        for (i = 0; i < client["nom"].length; i++) {
            if (client["nom"][i] == " ") {
                espais = espais + 1;
            }
        }
        // Si no hi ha exactament un espai, no hi ha 2 paraules
        if (espais != 1) {
            errors = errors + "nom de client ha de tenir 2 paraules\n";
        }
    }

    // Comprovem si el dni està buit o no té 9 caràcters
    if (client["dni"] == null || client["dni"] == "" || client["dni"].length != 9) {
        errors = errors + "el dni ha de tenir 8 números i una lletra al final\n";
    } else {
        // Mirem que els 8 primers caràcters siguen números
        for (i = 0; i < 8; i++) {
            if (isNaN(client["dni"][i])) {
                errors = errors + "el dni ha de tenir 8 números i una lletra al final\n";
                break;
            }
        }
        // Mirem que l'últim caràcter siga una lletra
        if (!isNaN(client["dni"][8])) {
            errors = errors + "el dni ha de tenir 8 números i una lletra al final\n";
        }
    }

    // Comprovem si l'email està buit
    if (client["email"] == null || client["email"] == "") {
        errors = errors + "email de client ha de seguir el patró text@text.text\n";
    } else {
        // Comptem quantes arroves i punts hi ha
        for (i = 0; i < client["email"].length; i++) {
            if (client["email"][i] == "@") {
                arroba = arroba + 1;
            }
            if (client["email"][i] == ".") {
                punt = punt + 1;
            }
        }
        // Ha de tindre una arrova i almenys un punt
        if (arroba != 1 || punt < 1) {
            errors = errors + "email de client ha de seguir el patró text@text.text\n";
        }
    }

    // Si hi ha errors, els mostrem
    if (errors != "") {
        alert(errors);
    } else {
        // Posem bé el nom: primera lletra en majúscula
        for (i = 0; i < client["nom"].length; i++) {
            if (i == 0 || client["nom"][i - 1] == " ") {
                nomBe = nomBe + client["nom"][i].toUpperCase();
            } else {
                nomBe = nomBe + client["nom"][i].toLowerCase();
            }
        }

        // Copiem els 8 números del dni
        for (i = 0; i < 8; i++) {
            dniBe = dniBe + client["dni"][i];
        }
        // Posem l'última lletra del dni en majúscula
        dniBe = dniBe + client["dni"][8].toUpperCase();

        // Mostrem les dades correctes
        alert("Dades correctes:\nNom: " + nomBe + "\nDNI: " + dniBe + "\nEmail: " + client["email"].toLowerCase());
    }
};
