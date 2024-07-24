import { getBlogPosts } from "@/app/[locale]/blog/utils"
import { redirect, RedirectType } from "next/navigation"


export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Blog({
  params: {slug}
}: {
  params: {
    slug: string
  }
}) {
  redirect(`/es/blog/${slug}`)
}