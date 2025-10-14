import { readDate_yyyyMMdd } from "./date-util";
import type BlogMetadata from "../types/blog-metadata"

export function convertGlobMeta(obj: any): BlogMetadata {
    return {
        title: obj.frontmatter.title,
        authorName: obj.frontmatter.authorName,
        topic: obj.frontmatter.topic,
        datePublished: readDate_yyyyMMdd(obj.frontmatter.datePublished),
        url: obj.url
    }
}

export function sort(bm1: BlogMetadata, bm2: BlogMetadata): number {
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