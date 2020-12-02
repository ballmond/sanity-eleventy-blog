const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../utils/sanityClient.js");
const serializers = require("../utils/serializers");
const overlayDrafts = require("../utils/overlayDrafts");
const hasToken = !!client.config().token;

function generate(post) {
  return {
    ...post,
    excerpt: BlocksToMarkdown(post.excerpt, { serializers, ...client.config() }),
    body: BlocksToMarkdown(post.body, { serializers, ...client.config() }),
  };
}

async function getPosts() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "sermon" && defined(slug) && publishedAt < now()]`;
  const projection = groq`{
    _id,
    publishedAt,
    title,
    slug,
    audioUrl,
    videoUrl,
    mainImage,
    excerpt[],
    body[]{
      ...,
      children[]{
        ...,
        // Join inline reference
        _type == "authorReference" => {
          // check /studio/documents/authors.js for more fields
          "name": @.author->name,
          "slug": @.author->slug
        }
      }
    },
    "authors": authors[].author->
  }`;
  const order = `| order(publishedAt asc)`;
  const query = [filter, projection, order].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const reducedDocs = overlayDrafts(hasToken, docs);
  const prepared = reducedDocs.map(generate);
  return prepared;
}

module.exports = getPosts;
