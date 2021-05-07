import { ActiveBusinesses } from "./ActiveBusinesses.js";
import {
  activeBusinesses,
  nyBusinesses,
  manufactBusinesses,
  purchAgent,
} from "./database.js";
import { NewYorkBusinessHTML } from "./NewYork.js";
import { ManufacturingBusinessesHTML } from "./Manufacturing.js";
import { PurchasingAgentsHTML } from "./PurchasingAgents.js";

const renderAllHTML = () => {
  activeBusinesses.innerHTML = ActiveBusinesses();
  nyBusinesses.innerHTML = NewYorkBusinessHTML();
  manufactBusinesses.innerHTML = ManufacturingBusinessesHTML();
  purchAgent.innerHTML = PurchasingAgentsHTML();
};

renderAllHTML();
