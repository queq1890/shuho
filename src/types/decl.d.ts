import { Frontmatter } from './models/post';

declare module '*.ttf';
declare module '*.mdx' {
  // eslint-disable-next-line import/no-mutable-exports
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: Frontmatter[];
}
