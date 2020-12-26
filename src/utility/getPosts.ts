import { format } from 'date-fns';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = () => {
  const pathToBlogPost = './contents';
  const fileNames = fs.readdirSync(pathToBlogPost).map((fileName) => fileName);
  const posts = fileNames.map((fileName) => {
    const file = fs.readFileSync(path.join(pathToBlogPost, fileName), 'utf-8');
    const slug = fileName.replace('.mdx', '');
    const { data } = matter(file);

    const frontMatter = {
      ...data,
      slug,
      publishedAt: format(data.publishedAt, 'MMMM dd yyyy'),
    };

    return frontMatter;
  });

  return posts;
};

export default getPosts;
