import { format } from 'date-fns';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = () => {
  const pathToBlogPost = './src/pages/blog';
  const fileNames = fs.readdirSync(pathToBlogPost).map((fileName) => fileName);
  const posts = fileNames.map((fileName) => {
    const file = fs.readFileSync(path.join(pathToBlogPost, fileName), 'utf-8');
    const { data } = matter(file);

    const frontMatter = {
      ...data,
      publishedAt: format(data.publishedAt, 'MMMM dd yyyy'),
      __resourcePath: `blog/${fileName}`,
    };

    return frontMatter;
  });

  return posts;
};

export default getPosts;
