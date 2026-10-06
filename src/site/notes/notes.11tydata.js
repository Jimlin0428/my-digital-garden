require("dotenv").config();
const settings = require("../../helpers/constants");
const { pickNoteMetadata } = require("../../helpers/bases-engine/noteMetadata");
const pluginLoader = require("../../helpers/pluginLoader");

// Core note settings plus any per-note flags declared by enabled plugins
// (manifest "noteSettings"). Same resolution for both: per-note frontmatter
// wins, the env var of the same name is the global default.
const allSettings = [
  ...settings.ALL_NOTE_SETTINGS,
  ...pluginLoader.getNoteSettingKeys(),
];

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if (data.tags && data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: function (data) {
      // 1. 首頁直接輸出至根目錄 /
      if (data.tags && data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      // 2. 若筆記有自訂 permalink，優先使用自訂值
      if (data.permalink) {
        return data.permalink;
      }
      // 3. 透過 this.page 取得真實路徑並使用 encodeURI 保留中文檔名
      const pageObj = this.page || data.page;
      if (pageObj && pageObj.filePathStem) {
        const rawPath = pageObj.filePathStem.replace(/^\/notes\//, "");
        return `/notes/${encodeURI(rawPath)}/`;
      }
      // 4. 安全退回方案：若取不到 page 物件，使用 fileSlug
      return `/notes/${encodeURI(data.fileSlug || "")}/`;
    },
    basesNotes: (data) => {
      if (!data.collections || !data.collections.note) return [];
      return data.collections.note.map((item) => ({
        path: item.filePathStem.replace("/notes/", ""),
        url: item.url,
        metadata: pickNoteMetadata(item.data),
        fileSlug: item.fileSlug,
      }));
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
