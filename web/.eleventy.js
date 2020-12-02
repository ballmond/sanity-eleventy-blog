const urlFor = require("./utils/imageUrl");
var getYouTubeID = require("get-youtube-id");
const { DateTime } = require("luxon");
const util = require("util");
const CleanCSS = require("clean-css");

const navigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const { get } = require("https");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlightPlugin, {
    templateFormats: ["md", "njk"],
    init: function ({ Prism }) {
      Prism.languages.markdown = Prism.languages.extend("markup", {
        frontmatter: {
          pattern: /^---[\s\S]*?^---$/m,
          greedy: true,
          inside: Prism.languages.yaml,
        },
      });
    },
  });

  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
  };

  eleventyConfig.addShortcode("imageUrlFor", (image, blur = 0) => {
    if (blur > 0) {
      return urlFor(image).blur(blur).auto("format").url();
    }
    return urlFor(image).auto("format").url();
  });

  eleventyConfig.addShortcode("croppedUrlFor", (image, width, height) => {
    return urlFor(image).width(width).height(height).auto("format");
  });

  // https://www.11ty.io/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toDateString();
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("netlify-email");
  eleventyConfig.addPassthroughCopy("css/fonts");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addFilter("newsDate", (dateObj, format = "yyyy LLLL dd") => {
    if (typeof dateObj === "number") {
      dateObj = new Date(dateObj);
    }
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  eleventyConfig.addFilter("publishedAt", (dateObj, format = "yyyy LLLL dd") => {
    if (typeof dateObj === "number") {
      dateObj = new Date(dateObj);
    }
    return DateTime.fromISO(dateObj).toFormat(format);
  });

  eleventyConfig.addFilter("pop", (arr, num = 3) => {
    return arr.slice(0, num);
  });

  eleventyConfig.addFilter("youtubeId", (url) => {
    return getYouTubeID(url);
  });

  eleventyConfig.addFilter("orphanWrap", (str) => {
    let splitSpace = str.split(" ");
    let after = "";
    if (splitSpace.length > 2) {
      after += " ";

      // TODO strip HTML from this?
      let lastWord = splitSpace.pop();
      let secondLastWord = splitSpace.pop();

      after += `${secondLastWord}&nbsp;${lastWord}`;
    }

    return splitSpace.join(" ") + after;
  });

  // let markdownIt = require("markdown-it");
  // let markdownItAnchor = require("markdown-it-anchor");
  // let options = {
  //   html: true,
  //   breaks: true,
  //   linkify: true,
  // };
  // let opts = {
  //   permalink: true,
  //   permalinkClass: "direct-link",
  //   permalinkSymbol: "#",
  // };

  // eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.addFilter("markdownify", function (value) {
    const md = new markdownIt(options);
    return md.render(value);
  });
  return {
    templateFormats: ["html", "njk", "md", "11ty.js"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
