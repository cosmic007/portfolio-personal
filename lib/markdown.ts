import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
  tags?: string[];
}

export interface Post {
  metadata: PostMetadata;
  content: string;
  html?: string;
}

const POSTS_DIRECTORY = path.join(process.cwd(), 'content');

export function getAllPosts(type: 'blog' | 'projects'): Post[] {
  const typeDir = path.join(POSTS_DIRECTORY, type);
  
  if (!fs.existsSync(typeDir)) {
    return [];
  }

  const files = fs.readdirSync(typeDir).filter(file => file.endsWith('.md'));
  
  const posts = files.map(file => {
    const fullPath = path.join(typeDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const slug = file.replace(/\.md$/, '');

    return {
      metadata: {
        ...data,
        slug,
      } as PostMetadata,
      content,
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();
    return dateB - dateA;
  });
}

export function getPostBySlug(slug: string, type: 'blog' | 'projects'): Post | null {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, type, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        ...data,
        slug,
      } as PostMetadata,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(markdown);
  
  return result.toString();
}
