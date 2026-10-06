require("dotenv").config();
const settings = require("../../helpers/constants");
const { pickNoteMetadata } = require("../../helpers/bases-engine/noteMetadata");
const pluginLoader = require("../../helpers/pluginLoader");

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
    permalink: (data) => {
      // 1. 首頁直接輸出至根目錄 /
      if (data.tags && data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      // 2. 若筆記有自訂 permalink，優先使用自訂值
      if (data.permalink) {
        return data.permalink;
      }
      // 3. 取得目前檔案的完整路徑（例如：/notes/98_商業概念庫/黑字倒閉）
      const filePathStem = data.page && data.page.filePathStem;
      if (filePathStem) {
        // 移除開頭的 /notes/，並使用 encodeURI 保留中文字元
        const cleanPath = filePathStem.replace(/^\/notes\//, "");
        return `/notes/${encodeURI(cleanPath)}/`;
      }
      // 4. 防呆回退方案
      return `/notes/${encodeURI(data.title || "note")}/`;
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
