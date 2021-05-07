import {
  getBusinesses,
  getNewYorkBusinesses,
  getManufacturingBusinesses,
} from "./database.js";

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

let manufacturingbusinessArray = [];

export const ManufacturingBusinesses = () => {
  const manufacturingbusinesses = getManufacturingBusinesses();
  manufacturingbusinesses.forEach((business) => {
    let html =
      /*html*/
      `
              <section id="manufacturing__business" >
                  <h2><u>${business.companyName}</u></h2>
                          <br>
                      <div class="business__info">
                          ${business.addressFullStreet}
                          <br>
                          ${business.addressCity}, ${business.addressStateCode}. ${business.addressZipCode}
              </section>
              `;
    manufacturingbusinessArray.push(html);
  });
  return manufacturingbusinessArray.join("");
};
