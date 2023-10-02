import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import { note, stmt, soln, aside, math } from "./plugins/directives.js";
import { rehypeKatex as myKatex } from "./plugins/katex.ts";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://timngo.net",
  base: "/notes",
  // outDir: "./docs",
  markdown: {
    // gfm: false,
    remarkPlugins: [
      remarkMath,
      remarkDirective,
      //
      note,
      stmt,
      soln,
      aside,
      math,
    ],
    rehypePlugins: [myKatex],
    smartypants: false,
    // syntaxHighlight: false,
    shikiConfig: {
      langs: [],
    },
  },
});
