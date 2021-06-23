const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/MelvDouc/Svelte-task-tracker.github.io.git",
    user: {
      name: "MelvDouc",
      email: "melv.douc@gmail.com"
    }
  },
  () => {
    console.log("Deploy Complete!");
  }
);