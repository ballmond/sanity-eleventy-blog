const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../utils/sanityClient.js");
const serializers = require("../utils/serializers");
const overlayDrafts = require("../utils/overlayDrafts");
const hasToken = !!client.config().token;

function generatePage(post) {
  const people = post.people;
  const t = people.map((person) => {
    person.bio = BlocksToMarkdown(person.bio, { serializers, ...client.config() });
  });
  return {
    ...post,
    ...people,
  };
}

async function getPages() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "page" && defined(slug) && static == true]`;
  const projection = groq`{
    title,
    slug,
    mainImage,
    static,
    people[]{
        _type == "personReference" => {
          "title": @.person->.title,
          "name": @.person->.name,
          "slug": @.person->slug.current,
          "image": @.person->image,
          "bio": @.person->bio[]{
            ...,
            children[]{
              ...
            }
          }
        }
    },
    "body": content[]{
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
  const preparePosts = reducedDocs.map(generatePage);
  return preparePosts;
}

module.exports = getPages;
