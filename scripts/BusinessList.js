import { getBusinesses } from "./database.js";


export const businesses = getBusinesses()

export let businessArray = []

export const Businesses = () => {
    businesses.forEach((business) => {
        let html = /*html*/
            `
            <section id="business" >
                <h2>${business.companyName}</h2>
                    <div class="business__industry">
                        ${business.companyIndustry} industry
                    </div>
                    <div class="business__info">
                        ${business.addressFullStreet} <br>
                        ${business.addressCity}, ${business.addressStateCode}.
                        ${business.addressZipCode}
            </section>
            `
        businessArray.push(html)
    })
    businessArray.join("")
}

