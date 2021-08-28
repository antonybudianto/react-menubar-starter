const { menubar } = require("menubar");

const mb = menubar();

mb.on("ready", () => {
  console.log("app is ready");
});

if (process.env.NODE_ENV === "development") {
  mb.on("after-create-window", () => {
    mb.window.openDevTools();
  });
}
