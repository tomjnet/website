// Edit this file to change the site's content.
export const site = {
  name: "Tom J",
  logo: "Tom J",
  description: "Tom J's personal site — posts, research notes, and hobbies.",
  intro: "Engineer by trade, curious by nature. I build software, chase hard problems, and spend the rest of my time over a chessboard, on the road, or lost in a good book.",
  social: {
    x: "https://x.com/tomjnet",
    github: "https://github.com/tomjnet",
    linkedin: "https://www.linkedin.com/in/tomjnet/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Posts", href: "/posts/" },
    { label: "Research", href: "/research/" },
    { label: "Hobbies", href: "/hobbies/" },
  ],
  // Big statement band on the home page, linking to one post in the posts repo.
  featured: {
    quote: "Latency doesn't care about your productivity argument.",
    title: "C++ is not dying in quant finance. It's getting more critical.",
    slug: "2026-09-29-cpp-is-not-dying-in-quant-finance",
  },
  // Public GitHub repo that holds posts and research (see website-info/README.md).
  contentRepo: { owner: "tomjnet", repo: "website-info", branch: "main" },
};

/** Prefix an internal path with the configured base (needed on GitHub Pages project sites). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Where posts and research are loaded from: index.json, posts/*.md, research/*. */
export function contentBaseUrl(): string {
  if (import.meta.env.PUBLIC_CONTENT_URL) return import.meta.env.PUBLIC_CONTENT_URL;
  if (import.meta.env.DEV) return "/__content/";
  const { owner, repo, branch } = site.contentRepo;
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/`;
}

/**
 * Link for opening a repo file in the browser. GitHub's file viewer renders PDFs nicely,
 * whereas raw.githubusercontent.com would just download them.
 */
export function contentViewUrl(path: string): string {
  if (import.meta.env.PUBLIC_CONTENT_URL || import.meta.env.DEV) return `${contentBaseUrl()}${path}`;
  const { owner, repo, branch } = site.contentRepo;
  return `https://github.com/${owner}/${repo}/blob/${branch}/${path}`;
}
