import { businessArray, Businesses } from "./BusinessList.js"

export const DothardAndSimbleton = () => {
    return /*html*/ `
        <article class="businesses">
            <section class="active__businesses">
                <h2>Active Businesses</h2>
                ${Businesses()}
            </section>
    `
}
