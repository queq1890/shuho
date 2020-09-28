export type Frontmatter = {
  title: string;
};

export type MdxSource = {
  compiledSource: string;
  renderedOutput: string;
  scope?: Record<string, unknown>;
};
