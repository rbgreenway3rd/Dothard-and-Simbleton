import { PurchasingAgents } from "./BusinessGenerator.js";

export const PurchasingAgentsHTML = () => {
  return /*html*/ `
          <article class="purchasing__agents">
              <section class="agents">
                  <h2>Purchasing Agents</h2>
                  ${PurchasingAgents()}
              </section>
      `;
};
