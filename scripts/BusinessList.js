import { getBusinesses, getNewYorkBusinesses } from "./database.js";

let businessArray = [];

export const Businesses = () => {
  const businesses = getBusinesses();
  businesses.forEach((business) => {
    let html =
      /*html*/
      `
            <section id="business" >
                <h2><u>${business.companyName}</u></h2>
                    <div class="business__industry">
                        Industry: ${business.companyIndustry}
                    </div>
                        <br>
                    <div class="business__info">
                        ${business.addressFullStreet} 
                        <br>
                        ${business.addressCity}, ${business.addressStateCode}. ${business.addressZipCode}
            </section>
            `;
    businessArray.push(html);
  });
  return businessArray.join("");
};

let newyorkbusinessArray = [];

export const NewYorkBusinesses = () => {
  const newyorkbusinesses = getNewYorkBusinesses();
  newyorkbusinesses.forEach((business) => {
    let html =
      /*html*/
      `
            <section id="newyork__business" >
                <h2><u>${business.companyName}</u></h2>
                    <div class="business__industry">
                        Industry: ${business.companyIndustry}
                    </div>
                        <br>
                    <div class="business__info">
                        ${business.addressFullStreet}
                        <br>
                        ${business.addressCity}, ${business.addressStateCode}. ${business.addressZipCode}
            </section>
            `;
    newyorkbusinessArray.push(html);
  });
  return newyorkbusinessArray.join("");
};
