import { BlogPosts } from '@/app/components/posts'
import Description from '@/app/components/description'

export default function Page({params: {locale}}) {

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <Description params={locale} />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
