import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Niklas Siefke",
  EMAIL: "hi@niklas.fyi",
  NUM_POSTS_ON_HOMEPAGE: 3
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Niklas Siefke is a German Software Engineer living in Norway.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of posts on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "mastodon",
    HREF: "https://hachyderm.io/@niklasfyi",
  },
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/niklasfyi",
  },
  {
    NAME: "github",
    HREF: "https://github.com/niklasfyi"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/niklas-%F0%9F%92%BB-siefke-70448455/",
  }
];
