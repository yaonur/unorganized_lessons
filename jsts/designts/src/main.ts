import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2 id="text">Hey</h2>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#text")!);
