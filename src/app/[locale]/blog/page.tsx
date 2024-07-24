import { BlogPosts } from '@/app/components/posts'


const locales = ['es', 'en'] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}


export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page({
  params: {locale}
} : {
  params: {locale: string};
}) {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
