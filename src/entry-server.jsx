import { renderToString } from "react-dom/server";
import App from "./App.jsx";

/** Used at build time only (scripts/prerender.mjs) to bake the page into static HTML for a fast first paint. */
export function render() {
  return renderToString(<App />);
}
