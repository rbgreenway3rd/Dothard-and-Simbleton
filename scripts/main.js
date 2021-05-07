import { ActiveBusinesses } from "./ActiveBusinesses.js";
import {
  activeBusinesses,
  nyBusinesses,
  manufactBusinesses,
} from "./database.js";
import { NewYorkBusinessHTML } from "./NewYork.js";
import { ManufacturingBusinessesHTML } from "./Manufacturing.js";
import { ManufacturingBusinesses } from "./BusinessList.js";

const renderAllHTML = () => {
  activeBusinesses.innerHTML = ActiveBusinesses();
  nyBusinesses.innerHTML = NewYorkBusinessHTML();
  manufactBusinesses.innerHTML = ManufacturingBusinessesHTML();
};

renderAllHTML();
