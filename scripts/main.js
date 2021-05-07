import { ActiveBusinesses } from "./ActiveBusinesses.js";
import { activeBusinesses, nyBusinesses } from "./database.js";
import { NewYorkBusinessHTML } from "./NewYork.js";

const renderAllHTML = () => {
  activeBusinesses.innerHTML = ActiveBusinesses();
  nyBusinesses.innerHTML = NewYorkBusinessHTML();
};

renderAllHTML();
