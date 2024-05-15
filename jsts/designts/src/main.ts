import "./style.css";
import { setupCounter } from "./counter.ts";
// import * as s2 from './s2/index.ts'
import * as s3 from './s3/index.ts'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2 id="text">Hey</h2>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#text")!);
console.clear()
// s2.main()
s3.main()

