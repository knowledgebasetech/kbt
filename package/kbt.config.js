const settings = require("./kbt.settings");

module.exports = {
  title: settings.title || "Knowledgebase",
  tagline: settings.tagline,
  description: settings.description,
  logo: settings.logo,
  headerNavLinks: settings.headerNavLinks,
  copyRightText:
    settings.copyRightText ||
    "© 2021 knowledgebase.tech | All rights reserved.",
  colors: {
    primary: settings?.colors?.primary || "indigo",
    secondary: settings?.colors?.secondary || "blue",
    gray: settings?.colors?.gray || "coolGray",
  },
};
