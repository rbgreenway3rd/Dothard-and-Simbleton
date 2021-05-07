import { ManufacturingBusinesses } from "./BusinessList.js";

export const ManufacturingBusinessesHTML = () => {
  return /*html*/ `
          <article class="businesses">
              <section class="manufacturing__businesses">
                  <h2>Manufacturing Businesses</h2>
                  ${ManufacturingBusinesses()}
              </section>
      `;
};
