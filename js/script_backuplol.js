let tabDest = [
    {
        name : "Rio de Janeiro",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 9500
    },
    {
        name : "Tokyo",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 5800
    },
    {
        name : "New-York",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 12000
    },
    {
        name : "Nairobi",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 400
    },
    {
        name : "Lome",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 1400
    },
    {
        name : "Londres",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 4000
    },
    {
        name : "Mexico",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 8000
    },
    {
        name : "Johannesbourg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 6200
    },
    {
        name : "Kuala Lumpur",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 8100
    },
    {
        name : "Berlin",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio!",
        price : 3200
    }
];

let tabPassengers = [];

// fonction pour trier le tableau d'objets selon le prix
function compare(a, b) {
    if ( a.price < b.price ) {return -1;}
    if (a.price > b.price) {return 1;}
    return 0;
    }


function displayDest(){

    let sectionCours = document.getElementById("cours");

    console.log("sectionCours.hasChildNodes() : " + sectionCours.hasChildNodes());
    console.log("divDest.hasChildNodes() : " + divDest.hasChildNodes());

    if (sectionCours.hasChildNodes() || divDest.hasChildNodes()){

        /********************************************
        * supprime les enfants de la section #cours *
        *********************************************/
        while (sectionCours.firstChild) {
            sectionCours.removeChild(sectionCours.lastChild);
        }

        /************************************************************************
        * supprime les enfants de #divDest pour le cas o?? on revient de la r??sa *
        *************************************************************************/
        let divDestResa = document.getElementById("divDest"); 
        while (divDestResa.firstChild) {
            divDestResa.removeChild(divDestResa.lastChild);
        }


        /*********************************
        * cr??e un h3 dans la div divDest *
        **********************************/
        let newH3 = document.createElement("h3");

        // contenu du h3
        let newContentH3 = document.createTextNode("Liste des destinations");

        // ajoute le n??ud texte au nouveau h3 cr????
        newH3.appendChild(newContentH3);

        // ajoute le nouvel ??l??ment dans le DOM
        let divDest = document.getElementById("divDest");
        divDest.appendChild(newH3);


        /******************************************************
        * cr??e un lien cliquable pour trier les dest par prix *
        *******************************************************/
        let newButton = document.createElement("a");

        newButton.classList.add("btn");
        newButton.onclick = function() {
            tabDest.sort(compare);
            home();
            displayDest();
        };

        let newContentButton = document.createTextNode("Trier par prix");
        newButton.appendChild(newContentButton);

        divDest.appendChild(newButton);


        for (let i = 0; i < tabDest.length ; i++) {

            /***************************************************
            * cr??e un article.concept-flex dans la div divDest *
            ****************************************************/
            let newArticle = document.createElement("article");

            newArticle.classList.add("concept-flex");
            newArticle.id = "art" + i;
        
            let divDest = document.getElementById("divDest");

            divDest.appendChild(newArticle);

            /***********************************************
            * cr??e un div.circle dans article.concept-flex *
            ************************************************/
            let newDivCircle = document.createElement("div");

            newDivCircle.classList.add("circle");
            newDivCircle.id = "div" + i;
        
            let currentArt = document.getElementById("art" + i);

            currentArt.appendChild(newDivCircle);

            /******************************
            * cr??e un img dans div.circle *
            *******************************/
            let newImg = document.createElement("img");

            // ajoute un attribut src al??atoire parmi les 7 png dispo
            let randPic = Math.floor(Math.random() * 7);
            newImg.src = "img/icon" + randPic + ".png";

            let currentDivCircle = document.getElementById("div" + i);

            currentDivCircle.appendChild(newImg);

            /****************************************
            * cr??e un div dans article.concept-flex *
            *****************************************/
            let newDivEmpty = document.createElement("div");

            newDivEmpty.id = "divEmpty" + i;

            currentArt.appendChild(newDivEmpty);

            /**************************************
            / cr??e un h4 dans la div #divEmpty[i] * 
            ***************************************/
            let newH4 = document.createElement("h4");

            // donne un titre du tableau comme contenu
            let newContentH4 = document.createTextNode(tabDest[i].name);

            // ajoute le n??ud texte au nouveau h4 cr????
            newH4.appendChild(newContentH4);

            newDivEmpty.appendChild(newH4);


            /***********************************************
            / cr??e coeur bookmark dans la div #divEmpty[i] * 
            ************************************************/
            bookmark(i, newDivEmpty);
        
            /*************************************
            / cr??e un p dans la div #divEmpty[i] *
            **************************************/
            let newP1 = document.createElement("p");

            let newContentP1 = document.createTextNode(tabDest[i].description);

            newP1.appendChild(newContentP1);
            newDivEmpty.appendChild(newP1);

            /*************************************
            / cr??e un p dans la div #divEmpty[i] *
            **************************************/
            let newP2 = document.createElement("p");

            let newContentP2 = document.createTextNode("Prix : " + tabDest[i].price + "???");

            newP2.appendChild(newContentP2);
            newDivEmpty.appendChild(newP2);

            /**************************************
            / boutons r??server et logique de resa *
            ***************************************/
            resaButton(i, newDivEmpty);

        }
    }
}

let firstPassenger = true;

function resaButton(i, newDivEmpty) {
    /*****************************************************
    / cr??e un bouton "r??server" dans la div #divEmpty[i] * 
    ******************************************************/
    let newResButton = document.createElement("a");

    newResButton.classList.add("btn");

    /**********************************************
    * ici la logique quand on clique sur r??server *
    ***********************************************/

    newResButton.onclick = function() {

        // remove tous les enfants de div #divDest tant qu'il en reste 
        while (divDest.firstChild) {
            divDest.removeChild(divDest.lastChild);
        }


        /**********************************
        * cr??e un h3 dans la div #divDest *
        ***********************************/
        let newH3 = document.createElement("h3");

        // contenu du h3
        let newContentH3 = document.createTextNode("R??servation pour " + tabDest[i].name);

        newH3.appendChild(newContentH3);
        divDest.appendChild(newH3);

        /*********************************
        / cr??e un p dans la div #divDest *
        **********************************/
        let newPRes = document.createElement("p");

        let newContentPRes = document.createTextNode("Veuillez saisir les informations de r??servation du passager principal");

        newPRes.id = "newPRes";
        newPRes.appendChild(newContentPRes);
        divDest.appendChild(newPRes);


        /****************************
        / cr??e une section #contact *
        *****************************/
        let newSectionContact = document.createElement("section");
        newSectionContact.id = "contact";
        divDest.appendChild(newSectionContact);


        /****************************************
        / cr??e un form dans la section #contact *
        *****************************************/
        let newForm = document.createElement("form");
        newForm.id = "form";
        let secCont = document.getElementById("contact");
        secCont.appendChild(newForm);

        // cr??er le ul
        let newUl = document.createElement("ul");
        newUl.id = "ul";
        let form = document.getElementById("form");
        form.appendChild(newUl);

        // premier li
        let newLi1 = document.createElement("li");
        let ul = document.getElementById("ul");
        ul.appendChild(newLi1);

        // input du premier li
        let newInput1 = document.createElement("input");
        newInput1.type = "text";
        newInput1.placeholder = "Nom pr??nom";
        newInput1.className = "input";
        newInput1.id = "name";
        //newInput1.name = "firstname";
        ul.appendChild(newInput1);

        // 2e li
        let newLi2 = document.createElement("li");
        newLi2.id = "li2";
        ul.appendChild(newLi2);

        // input du 2e li
        let newInput2 = document.createElement("input");
        newInput2.type = "email";
        newInput2.placeholder = "Email";
        newInput2.className = "input";
        newInput2.id = "email";
        ul.appendChild(newInput2);

        // 3e li
        let newLi3 = document.createElement("li");
        ul.appendChild(newLi3);

        // input du 3e li
        let newInput3 = document.createElement("input");
        newInput3.type = "text";
        newInput3.placeholder = "Adresse";
        newInput3.className = "input";
        newInput3.id = "adress";
        ul.appendChild(newInput3);

        // 4e li
        let newLi4 = document.createElement("li");
        ul.appendChild(newLi4);

        // input du 4e li
        let newInput4 = document.createElement("input");
        newInput4.type = "text";
        newInput4.placeholder = "Pays";
        newInput4.className = "input";
        newInput4.id = "country";
        ul.appendChild(newInput4);

        // 5e li
        let newLi5 = document.createElement("li");
        ul.appendChild(newLi5);

        // input du 5e li
        let newInput5 = document.createElement("input");
        newInput5.type = "number";
        newInput5.placeholder = "Nombre de passagers";
        newInput5.className = "input";
        newInput5.min = "0";
        newInput5.id = "passengers";
        ul.appendChild(newInput5);

        // 6e li
        let newLi6 = document.createElement("li");
        newLi6.id = "liPassengers";
        ul.appendChild(newLi6);

        // input du 6e li
        let newInput6 = document.createElement("input");
        newInput6.type = "submit";
        newInput6.value = "Envoyer";
        newInput6.method = "POST";
        newInput6.className = "btn";
        newInput6.id = "submitButton";

        ul.appendChild(newInput6);

        /**********************
        / r??cup le formulaire *
        ***********************/
        newInput6.onclick = function() {







            /*let name = document.getElementById("name");

            console.log(name.value.length);

            if (name.value.length < 1 || name.value.length > 100) {
                name.style.border = "1px solid red";
                console.log("< 1 et >100");
            } else {
                name.style.border = "1px solid grey";
                console.log("entre 1 et 100");
            }*/
















            let passenger = new Object();

            passenger.name = document.getElementById("name").value;
            passenger.email = document.getElementById("email").value;
            passenger.adress = document.getElementById("adress").value;
            passenger.country = document.getElementById("country").value;

            if (firstPassenger) {
                passenger.nbPassengers = document.getElementById("passengers").value;
            }

            tabPassengers.push(passenger);
        
            console.log(" ");
            console.log("***********  tableau des passagers ************* ");
            for (let index = 0; index < tabPassengers.length; index++) {
                console.log("Passager " + (index+1) + " : ");
                console.log(tabPassengers[index]);
                console.log("************************************************");
            }

            
            if (firstPassenger) {
                passenger.nbPassengers = document.getElementById("passengers").value;

                if (passenger.nbPassengers == 0) {
                    console.log("Inutile de r??server pour 0 passager");
                }

                else if (passenger.nbPassengers == 1) {
                    onlyOnePassenger();
                }

                else if (passenger.nbPassengers > 1) {
                    otherPassengers(passenger.nbPassengers);
                    firstPassenger = false;
                }

            } // fin de la condition if (firstPassenger)
            else {
                otherPassengers(tabPassengers[0].nbPassengers);
            }

        } // fin du click sur resaButton

    }; /* fin de la fonction r??server */

    let newContentResButton = document.createTextNode("R??server pour " + tabDest[i].name);

    newResButton.appendChild(newContentResButton);

    newDivEmpty.appendChild(newResButton);

}


function onlyOnePassenger() {

    let li1PassToRemove = document.getElementById("liPassengers");
    li1PassToRemove.remove();
    submitButton.remove();

    // supprime le h3 "reservation pour"
    document.querySelector("#divDest > h3").remove();

    document.querySelector("#name").remove();
    document.querySelector("#email").remove();
    document.querySelector("#country").remove();
    document.querySelector("#adress").remove();
    document.querySelector("#passengers").remove();

    /**************
    * cr??e un h3  *
    ***************/
    let recapH3 = document.createElement("h3");
    let recapH3Content = document.createTextNode("Veuillez v??rifier les informations saisies");

    recapH3.appendChild(recapH3Content);
    document.getElementById("newPRes").appendChild(recapH3);


    // supprime texte du p d??j?? pr??sent
    document.getElementById("newPRes").childNodes[0].nodeValue ="";

    // ajout des "p" pour afficher les infos du formulaire
    let passRecap = document.createElement('p');
    let passRecapContent = document.createTextNode("Nom : " + tabPassengers[0].name);
    passRecap.appendChild(passRecapContent);
    document.getElementById("newPRes").appendChild(passRecap);

    let mailRecap = document.createElement('p');
    let mailRecapContent = document.createTextNode("Email : " + tabPassengers[0].email);
    mailRecap.appendChild(mailRecapContent);
    document.getElementById("newPRes").appendChild(mailRecap);
    
    let adressRecap = document.createElement('p');
    let adressRecapContent = document.createTextNode("Adresse : " + tabPassengers[0].adress);
    adressRecap.appendChild(adressRecapContent);
    document.getElementById("newPRes").appendChild(adressRecap);
    
    let countryRecap = document.createElement('p');
    let countryRecapContent = document.createTextNode("Pays : " + tabPassengers[0].country);
    countryRecap.appendChild(countryRecapContent);
    document.getElementById("newPRes").appendChild(countryRecap);


}

function otherPassengers(nbPassengers) {

    if (firstPassenger) {
        let li1PassToRemove = document.getElementById("liPassengers");
        li1PassToRemove.remove();
        // supprime le h3 "reservation pour"
        document.querySelector("#divDest > h3").remove();
        document.querySelector("#passengers").remove();

        /**************
        * cr??e un h3  *
        ***************/
        let recapH3 = document.createElement("h3");
        recapH3.id = "recapH3nbPassengers";
        let recapH3Content = document.createTextNode("Vous r??servez pour " + nbPassengers + " passagers. Veuillez saisir les informations du passager suivant");

        recapH3.appendChild(recapH3Content);
        document.getElementById("newPRes").appendChild(recapH3);
    }

    // supprime texte du p d??j?? pr??sent
    document.getElementById("newPRes").childNodes[0].nodeValue ="";


    console.log("nbPassengers : " + nbPassengers + " / tabPassengers.length : " + tabPassengers.length);
    if (nbPassengers == tabPassengers.length) {
        displayRecapAllPassengers();
    }

};

function displayRecapAllPassengers() {

    document.getElementById("recapH3nbPassengers").remove();
    submitButton.remove();
    document.querySelector("#name").remove();
    document.querySelector("#email").remove();
    document.querySelector("#country").remove();
    document.querySelector("#adress").remove();

    /**************
    * cr??e un h3  *
    ***************/
    let recapH3 = document.createElement("p");
    let recapH3Content = document.createTextNode("Tous les passagers sont enregistr??s, veuillez v??rifier les informations saisies");

    recapH3.appendChild(recapH3Content);
    document.getElementById("newPRes").appendChild(recapH3);


    for (let i = 0; i < tabPassengers.length; i++) {

        let passTitleH3 = document.createElement("h3");
        let passTitleH3Content = document.createTextNode("Passager " + (i+1));
        passTitleH3.appendChild(passTitleH3Content);
        document.getElementById("newPRes").appendChild(passTitleH3);


        // ajout des "p" pour afficher les infos du formulaire
        let passRecap = document.createElement('p');
        let passRecapContent = document.createTextNode("Nom : " + tabPassengers[i].name);
        passRecap.appendChild(passRecapContent);
        document.getElementById("newPRes").appendChild(passRecap);

        let mailRecap = document.createElement('p');
        let mailRecapContent = document.createTextNode("Email : " + tabPassengers[i].email);
        mailRecap.appendChild(mailRecapContent);
        document.getElementById("newPRes").appendChild(mailRecap);
        
        let adressRecap = document.createElement('p');
        let adressRecapContent = document.createTextNode("Adresse : " + tabPassengers[i].adress);
        adressRecap.appendChild(adressRecapContent);
        document.getElementById("newPRes").appendChild(adressRecap);
        
        let countryRecap = document.createElement('p');
        let countryRecapContent = document.createTextNode("Pays : " + tabPassengers[i].country);
        countryRecap.appendChild(countryRecapContent);
        document.getElementById("newPRes").appendChild(countryRecap);


    }

};


function home() {

    if (divDest.hasChildNodes()) {

        // remove tous les enfants de div #divDest tant qu'il en reste 
        while (divDest.firstChild) {
            divDest.removeChild(divDest.lastChild);
        }

        // affiche la section #sectionCours
        /*******************************************
        * cr??e un h3 dans la section #sectionCours *
        ********************************************/
        let newH3 = document.createElement("h3");

        // contenu du h3
        let newContentH3 = document.createTextNode("Le concept DREAMFLIGHT");
    
        // ajoute le n??ud texte au nouveau h3 cr????
        newH3.appendChild(newContentH3);
    
        // ajoute le nouvel ??l??ment dans le DOM
        let sectionCours = document.getElementById("cours");
        sectionCours.appendChild(newH3);

        /************************************************
        * cr??e un article dans la section #sectionCours *
        *************************************************/
        let newArticle = document.createElement("article");

        newArticle.id = "homeArticle";

        sectionCours.appendChild(newArticle);

        /***************************
        * cr??e un img dans article *
        ****************************/
        let newImg = document.createElement("img");

        newImg.src = "img/mainPic.jpg";

        let homeArticle = document.getElementById("homeArticle");
        homeArticle.appendChild(newImg);

        /***************************
        * cr??e un div dans article *
        ****************************/
        let newDiv = document.createElement("div");
        
        newDiv.id = "homeDiv";
        //let homeArticle = document.getElementById("homeArticle");
        homeArticle.appendChild(newDiv);

        /**************************************
        / cr??e un h4 dans la div #homeArticle * 
        ***************************************/
        let newH4 = document.createElement("h4");

        // donne un titre du tableau comme contenu
        let newContentH4 = document.createTextNode("Des destinations premiums pour des souvenirs incroyables");

        // ajoute le texte au nouveau h4 cr????
        newH4.appendChild(newContentH4);

        let newDivHome = document.getElementById("homeDiv");
        newDivHome.appendChild(newH4);


        /*************************************
        / cr??e un p dans la div #homeArticle *
        **************************************/
        let newP = document.createElement("p");

        // donne une description du tableau comme contenu
        let newContentP = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia repudiandae. Commodi suscipit voluptatum, enim totam eaque repellendus voluptas illo ex, doloribus asperiores, eveniet sapiente odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae cum quo quae id. Nulla incidunt velit, quos nihil doloremque nemo adipisci eos vero neque ipsa quod inventore iure nam?");

        // ajoute le texte au nouveau p cr????
        newP.appendChild(newContentP);

        newDivHome.appendChild(newP);

    }
}

function bookmark(i, place) {

    let bookm = document.createElement("span");

    bookm.classList.add("bookmark");
    bookm.classList.add("bi-heart");
    //bookm.classList.add("position-absolute");
    //bookm.classList.add("text-danger");
    bookm.style.top = "0.5rem";
    bookm.style.right = "0.5rem";
    //bookm.style.display = "block";
    bookm.style.alignSelf = "center";
    //bookm.style.color = "black";

    place.append(bookm);


    // logique pour remplir les coeurs : ne fonctionne pas ; sortir ??a dans une fonction
    let bookmarks = document.querySelectorAll(".bookmark");

    console.log(" bookmarks : " + bookmarks);

    bookmarks[i].addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();

        console.log("event listener " + i + " declench??");

        if (e.target.classList.contains("bi-heart-fill")) {
            e.target.classList.remove("bi-heart-fill");
            e.target.classList.add("bi-heart");
            bookm.style.color = "black";
        } else {
            e.target.classList.remove("bi-heart");
            e.target.classList.add("bi-heart-fill");
            bookm.style.color = "red";
        }

    });
}

// faire apparaitre des champs pour chaque passager (en fonction de nbPassengers) plutot que remettre ?? chaque fois comme pr??sentement
