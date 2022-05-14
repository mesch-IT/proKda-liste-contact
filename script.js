

let valid = false


let form = document.getElementsByClassName("grid")
let buttonCreer = document.getElementById("buttonCreer")
const buttonReini = document.getElementById("buttonReini")
// const form = document.getElementsByTagName("form")

let selectField = document.getElementById("selectField")
let selectText = document.getElementById("selectText")
let options = document.getElementsByClassName("options")
let list = document.getElementById("list")
let iconArrow = document.getElementById("iconArrow")
let image_input = document.getElementById("image")
let uploaded_image = ""


// image_input.addEventListener("change", function () {

//   const reader = new FileReader()
//   reader.addEventListener("load", () => {
//     uploaded_image = reader.result

//     document.getElementById("displayImage").textContent  = `url(${uploaded_image})`
//   })
//   reader.readAsDataURL(this.files[0])
// })
let image = document.getElementById("displayImage")

let lien = ""

let source = ""


let chargerImage = function (event) {
  image.src = URL.createObjectURL(event.target.files[0])
  // image.style.display = "block"
  image.style.position = "relative"
  image.style.top = "20px"
  image.style.right = "-100px"
  lien = URL.createObjectURL(event.target.files[0])

}





selectField.onclick = function () {
  list.classList.toggle("hide")
  iconArrow.classList.toggle("rotate")
}

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent
    list.classList.toggle("hide")
    iconArrow.classList.toggle("rotate")

  }
}

// //Réinitialiser
// buttonReini.addEventListener("click", function (event) {

//   document.getElementById("prenom").value = ""
//   document.getElementById("nom").value  = ""
//   document.getElementById("bio").value = ""
//   document.getElementById("selectText").textContent = ""
//   document.getElementById("displayImage").remove()


// })
const listContact = document.getElementById("contacts")



let i = 0
buttonCreer.addEventListener("click", function (event) {
  event.preventDefault()

  source = image_input.value
  let divDisplay = document.createElement("div")
  divDisplay.classList.add("contacts")

  let grid2 = document.getElementById("grid2")
  grid2.appendChild(divDisplay)
  // let textId = document.createElement("h6")
  // textId.textContent = ++i
  // console.log(i);


  let prenom = document.getElementById("prenom").value
  let nom = document.getElementById("nom").value
  let bio = document.getElementById("bio").value
  let selectText = document.getElementById("selectText").textContent
  let deleteItem = document.createElement("img")
  let createImage = document.createElement("img")
  createImage.src = lien
  createImage.classList.add("showImage")

  divDisplay.appendChild(createImage)

  deleteItem.src = "delete.png"
  deleteItem.classList.add("delete")

  divDisplay.appendChild(deleteItem)
  // let showImage = document.createElement("img")
  // showImage.src =  `url(${uploaded_image})`



  let listPrenom = document.createElement("span")
  listPrenom.classList.add("userData")
  listPrenom.textContent = prenom
  divDisplay.appendChild(listPrenom)

  let listNom = document.createElement("span")
  listNom.classList.add("userData")
  listNom.textContent = nom
  divDisplay.appendChild(listNom)

  let listText = document.createElement("h4")
  listText.textContent = selectText
  divDisplay.appendChild(listText)

  let listBio = document.createElement("p")
  listBio.classList.add("describeBio")
  listBio.textContent = bio
  divDisplay.appendChild(listBio)

  // divDisplay.appendChild(textId)



  // document.getElementById("hr").style.visibility = "visible"

  deleteItem.addEventListener("click", function () {
    listPrenom.remove()
    listNom.remove()
    listBio.remove()
    listText.remove()
    createImage.remove()

    // divDisplay.remove()

    deleteItem.style.display = "none"


  })
 // let id = ""
  divDisplay.addEventListener("click", function () {
    // event.preventDefault()

    // let id = textId.textContent
    // console.log(id);
 
    // console.log("textid " + textId.textContent);



    prenom = divDisplay.childNodes[2]
    document.getElementById("prenom").value = prenom.textContent

    nom = divDisplay.childNodes[3]
    document.getElementById("nom").value = nom.textContent

    bio = divDisplay.childNodes[5]
    document.getElementById("bio").value = bio.textContent

    selectText = divDisplay.childNodes[4]

    document.getElementById("selectText").textContent = selectText.textContent



    //  image_input.textContent = source
    // console.log(divDisplay.childNodes[0]);

    //  document.getElementById("displayImage").src =  divDisplay.childNodes[0]


    image.src = divDisplay.childNodes[0].src


    //  image.src = lien
    //  image.style.display = "block"
    // image.style.visibility = "visible"
    
    // let modif = document.getElementById("modif")

    // modif.addEventListener("click",function(event){
    //   event.preventDefault()

    //   if (prenom.value != document.getElementById("prenom").value) {
    //     console.log("modifier");
    //   }
      
    // })


           


    //  document.getElementById("prenom").addEventListener("change", function () {


    //   divDisplay.childNodes[2].textContent = document.getElementById("prenom").value


    // //   console.log(textId.textContent + " etb " + id);


    // })
    // // let a = document.getElementById("nom").value
    // // console.log(a);
    // // console.log(divDisplay.childNodes[3].textContent);
    //  document.getElementById("nom").addEventListener("change", function () {

    //   // if(a != this.value){
    //   //  divDisplay.childNodes[3].textContent = this.value

    //   // }

    //   //  console.log(divDisplay.childNodes[3].textContent);
      

    //   // // console.log(textId);

    //    divDisplay.childNodes[3].textContent = document.getElementById("nom").value

    // })
    // document.getElementById("bio").addEventListener("change", function () {
    //   divDisplay.childNodes[5].textContent = document.getElementById("bio").value

    // })
    // for (option of options) {
    //   option.onclick = function () {
    //     console.log(this.textContent);
    //     console.log(document.getElementById("selectText").textContent);
    //     document.getElementById("selectText").textContent = this.textContent
    //     console.log(document.getElementById("selectText").textContent);
    //     divDisplay.childNodes[4].textContent = document.getElementById("selectText").textContent
    //     list.classList.toggle("hide")
    //     iconArrow.classList.toggle("rotate")


    //   }
    //  }

    // buttonCreer.addEventListener("click",function(){


    // })
    // document.getElementsByClassName("options").addEventListener("change",function(){
    //   // divDisplay.childNodes[4].textContent = document.getElementById("selectText").textContent
    //   // console.log(document.getElementById("selectText").textContent);


    // })





    //  document.getElementById("prenom").addEventListener("change",function (){
    //       f
    //   })












    // document.getElementById("displayImage").value = image.textContent





     








  })

})



let grid2 = document.getElementById("grid2")

//Réinitialiser
buttonReini.addEventListener("click", function (event) {

  document.getElementById("prenom").value = ""
  document.getElementById("nom").value = ""
  document.getElementById("bio").value = ""
  document.getElementById("selectText").textContent = ""
  // document.getElementById("displayImage").style.visibility = "hidden"


})







