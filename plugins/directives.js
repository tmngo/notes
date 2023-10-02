import { visit } from "unist-util-visit";
import { h } from "hastscript";

// import type { Root } from "remark-directive";

export const note = () => {
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
        if (node.attributes) {
          // console.log(node.attributes);
          data.hProperties = h(tagName, node.attributes).properties;
        }
      }
    });
  };
};

export const stmt = () => {
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
          if (
            "children" in node.children[0] &&
            "value" in node.children[0].children[0]
          ) {
            node.children[0].children[0].value += ". ";
            if (node.children[1].type === "paragraph") {
              node.children[1].children = [
                node.children[0],
                ...node.children[1].children,
              ];
              node.children = node.children.slice(1);
            }
          }
        }
        node.children.forEach((x) => {
          // console.log(x);
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

export const soln = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective") {
        if (node.name !== "soln") return;

        const data = node.data || (node.data = {});
        const tagName = "details";
        // console.log(node);
        // console.log(node.data);
        node.children.forEach((x) => {
          // console.log(x);
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

export const aside = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "containerDirective" || node.name !== "aside") return;
      const data = node.data || (node.data = {});
      const tagName = "aside";
      data.hName = tagName;
      if (node.attributes) {
        data.hProperties = h(tagName, node.attributes).properties;
      }
    });
  };
};

export const math = () => {
  return (tree) => {
    visit(tree, (node) => {
      // console.log(node);
      if (node.type !== "containerDirective" || node.name !== "math") return;
      const data = node.data || (node.data = {});
      // console.log({ mathData: data, node });
      const textChildren = [];
      node.children.forEach((child) => {
        if (child.type === "paragraph") {
          child.children.forEach((c) => {
            if (c.type === "text") {
              textChildren.push(c);
            }
          });
        }
        console.log(child.children);
      });

      console.log({ textChildren });

      console.log({ h: h("div.language-math", [textChildren]) });

      data.hChildren = [
        h("div.my-math", textChildren),
        // {
        //   type: "element",
        //   tagName: "div",
        //   properties: { className: ["my-math"] },
        //   children: textChildren,
        // },
      ];

      const tagName = "pre";
      data.hName = tagName;
      if (node.attributes) {
        data.hProperties = {
          ...h(tagName, node.attributes).properties,
        };
      }
      console.log({ myNode: node, children: node.children });
    });
  };
};
