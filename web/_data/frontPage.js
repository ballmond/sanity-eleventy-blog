const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../utils/sanityClient.js");
const serializers = require("../utils/serializers");
const overlayDrafts = require("../utils/overlayDrafts");
const hasToken = !!client.config().token;

function generatePage(post) {
  return {
    ...post,
    intro: BlocksToMarkdown(post.intro, { serializers, ...client.config() }),
    location: BlocksToMarkdown(post.location, { serializers, ...client.config() }),
    schedule: BlocksToMarkdown(post.schedule, { serializers, ...client.config() }),
  };
}

async function getPages() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "frontPage"][0]`;
  const projection = groq`{
    title,
    subtitle,
    mapUrl,
    calendarUrl,
    mainImage,
    "intro": intro[]{
      ...,
      children[]{
        ...
        }
      },
      "location": location[]{
      ...,
      children[]{
        ...
        }
      },
      "schedule": schedule[]{
      ...,
      children[]{
        ...
        }
      },
      _createdAt
  }`;
  const query = [filter, projection].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const reducedDocs = overlayDrafts(hasToken, docs);
  const preparePosts = generatePage(reducedDocs);
  return preparePosts;
}

module.exports = getPages;
