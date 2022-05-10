

let valid = false



const buttonCreer = document.getElementById("buttonCreer")
const buttonReini = document.getElementById("buttonReini")
// const form = document.getElementsByTagName("form")

//Réinitialiser
buttonCreer.addEventListener("reset", function (event) {
    
          

})

buttonCreer.addEventListener("click", function (event) {
    const prenom = document.getElementById("prenom").value
    const nom = document.getElementById("nom").value
    const bio = document.getElementById("bio").value
    const groupe = document.getElementById("groupe").value
    const listContact = document.getElementById("contacts")
    event.preventDefault()

    let listPrenom = document.createElement("div")
    listPrenom.textContent = prenom
    listContact.appendChild(listPrenom)

    let listNom = document.createElement("div")
    listNom.textContent = nom
    listContact.appendChild(listNom)

    let listGroupe = document.createElement("div")
    listGroupe.textContent = groupe
    listContact.appendChild(listGroupe)

    let listBio = document.createElement("div")
    listBio.textContent = bio
    listContact.appendChild(listBio)

})




