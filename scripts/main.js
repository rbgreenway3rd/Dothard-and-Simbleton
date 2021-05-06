import { DothardAndSimbleton } from "./Dothard&Simbleton.js"
import { businessArray } from "./BusinessList.js"

const activeBusinesses = document.getElementById("active__businesses")

const renderAllHTML = () => { activeBusinesses.innerHTML = DothardAndSimbleton()}

renderAllHTML()