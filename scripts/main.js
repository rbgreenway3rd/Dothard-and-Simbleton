import { DothardAndSimbleton } from "./Dothard&Simbleton.js"
import { businessArray } from "./BusinessList.js"

const activeBusinesses = document.getElementById("active__businesses")

const renderHTML = () => { activeBusinesses.innerHTML = businessArray.join("") }
renderHTML

// const mainContainer = document

// const renderAllHTML = () => {
//     mainContainer.innerHTML = DothardAndSimbleton()
// };

// renderAllHTML()