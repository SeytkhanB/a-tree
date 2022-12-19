export const tree = {
  children: [
    {
      name: "node-modules",
      children: [
        {
          name: "bin",
        },
        {
          name: "vite",
          children: [
            {
              name: "deps",
              children: [
                {
                  name: "_metadata.json",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "public",
      children: [{ name: "tree.png" }],
    },
    {
      name: "src",
      children: [
        {
          name: "assets",
        },
        {
          name: "App.tsx",
        },
        { name: "data.js" },
        { name: "index.css" },
        { name: "main.tsx" },
        { name: "vite-env.d.ts" },
      ],
    },
    { name: ".gitignore" },
    { name: "index.html" },
    { name: "package-lock.json" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "tsconfig.node.json" },
    { name: "vite.config.ts" },
  ],
};
