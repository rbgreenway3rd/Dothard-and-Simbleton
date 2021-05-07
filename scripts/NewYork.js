import { NewYorkBusinesses } from "./BusinessGenerator.js";

export const NewYorkBusinessHTML = () => {
  return /*html*/ `
          <article class="businesses">
              <section class="newyork__businesses">
                  <h2>New York Businesses</h2>
                  ${NewYorkBusinesses()}
              </section>
      `;
};
