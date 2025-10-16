import { readDate_yyyyMMdd } from "./date-util";
import type BlogMetadata from "../types/blog-metadata"
import type TopicMetadata from "../types/topic-metadata"

export function convertGlobMeta(obj: any): BlogMetadata {
    return {
        title: obj.frontmatter.title,
        authorName: obj.frontmatter.authorName,
        topic: obj.frontmatter.topic,
        datePublished: readDate_yyyyMMdd(obj.frontmatter.datePublished),
        url: obj.url
    }
}

export function getTopics(blogs: BlogMetadata[]): TopicMetadata[] {
    const namesDegenerate = blogs.map(b => b.topic);
    return [...new Set(namesDegenerate)].map(s => ({name: s, url: `/topic/${s.toLowerCase()}`}));
}

export function sortBlog(bm1: BlogMetadata, bm2: BlogMetadata): number {
    if (bm1.datePublished > bm2.datePublished)
        return 1;
    if (bm1.datePublished < bm2.datePublished)
        return -1;
    if (bm1.title.toUpperCase() > bm2.title.toUpperCase())
        return 1;
    if (bm1.title.toUpperCase() < bm2.title.toUpperCase())
        return -1;

    return 0;
}

export function sortTopic(tm1: TopicMetadata, tm2: TopicMetadata): number {
    if (tm1.name > tm2.name)
        return 1;
    if (tm1.name < tm2.name)
        return -1;

    return 0;
}