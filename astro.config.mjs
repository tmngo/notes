import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";

import { visit } from "unist-util-visit";
import { h } from "hastscript";

const note = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        if (node.name !== "note") return;

        const data = node.data || (node.data = {});
        const tagName = node.type === "textDirective" ? "span" : "div";

        data.hName = tagName;
        console.log(node.attributes);
        data.hProperties = h(tagName, node.attributes).properties;
      }
    });
  };
};

const stmt = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective") {
        if (node.name !== "stmt") return;

        const data = node.data || (node.data = {});
        const tagName = "div";
        // console.log(node);
        // console.log(node.data);
        // node.children.forEach((x) => {
        //   console.log(x);
        // });
        if (node.children.length > 1 && node.children[0].data?.directiveLabel) {
          node.children[0].data = { ...node.children[0].data, hName: "strong" };
          node.children[0].children[0].value += ". ";
          if (node.children[1].type === "paragraph") {
            node.children[1].children = [
              node.children[0],
              ...node.children[1].children,
            ];
            node.children = node.children.slice(1);
          }
        }
        node.children.forEach((x) => {
          console.log(x);
        });
        // console.log(JSON.stringify(node));
        // node.children = [{ type: "text", value: "xxx" }];

        // Set HTML element properties.
        data.hName = tagName;
        data.hProperties = {
          class: "stmt",
        };
      }
    });
  };
};

const soln = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective") {
        if (node.name !== "soln") return;

        const data = node.data || (node.data = {});
        const tagName = "details";
        console.log(node);
        console.log(node.data);
        node.children.forEach((x) => {
          console.log(x);
        });
        if (node.children.length > 1 && node.children[0].data.directiveLabel) {
          node.children[0].data = {
            ...node.children[0].data,
            hName: "summary",
          };
          node.children[0].children[0].value += ".";
        }
        // node.children = [{ type: "text", value: "xxx" }];

        // Set HTML element properties.
        data.hName = tagName;
        data.hProperties = {
          class: "soln",
          open: true,
        };
      }
    });
  };
};

const aside = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "containerDirective" || node.name !== "aside") return;
      const data = node.data || (node.data = {});
      const tagName = "aside";
      data.hName = tagName;
      data.hProperties = h(tagName, node.attributes).properties;
    });
  };
};

// https://astro.build/config
export default defineConfig({
  base: "notes",
  markdown: {
    remarkPlugins: [remarkDirective, note, stmt, soln, aside],
    smartypants: false,
  },
});
