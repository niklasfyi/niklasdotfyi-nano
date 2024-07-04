import rss from "@astrojs/rss";
import { HOME } from "@consts";
import { getAllCollections } from "@lib/utils";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const all = (await getAllCollections()).filter(post => !post.data.draft).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  );

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: all.map((item) => ({
      title: item.collection !== "notes" ? item.data.name : item.collection, // TODO: That is not correct. Notes need some form of title
      description: item.collection !== "notes" ? item.data.summary : item.body,
      pubDate: item.data.published,
      link: `/${item.slug}/`,
    })),
  });
}
