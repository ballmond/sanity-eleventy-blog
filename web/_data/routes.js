const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../utils/sanityClient.js");
const serializers = require("../utils/serializers");
const overlayDrafts = require("../utils/overlayDrafts");
const hasToken = !!client.config().token;

function generateRoute(post) {
  return {
    post,
  };
}

async function getRoutes() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  // const filter = groq`*[_type == "navbar" && defined(pages)]`;
  // const projection = groq`{
  //  "group": coalesce(key, '/'),
  //  "groupOrder": coalesce(order, 0),
  // 	pages[]{
  //     "pageOrder": coalesce(order, 0),
  //     _type == "pageReference" => {
  //         "slug": @.page->slug.current
  //     }
  //   }
  // }`;
  // const order = `| order(groupOrder, pageOrder)`;
  // const query = [filter, projection, order].join(" ");
  const filter = groq`*[_type == "navbar"]`;
  const projection = groq`{
    navGroup[]{
      "group": title,
      pages[]{
        _type == "pageReference" => {
            "slug": @.page->slug.current
        }
      }
    }
   }`;
  const query = [filter, projection].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));

  return docs;
}

module.exports = getRoutes;
