import getBio from '@/actions/getBio'
import getLinks from '@/actions/getLinks'
import { redirect } from 'next/navigation'
import EditorLinks from '@/components/EditorLinks'
import MovilPreview from '@/components/MovilPreview'

export default async function Dashboard() {
  const bio = await getBio()

  if (!bio) {
    redirect('/create-bio')
  }

  const links = await getLinks(bio.id)

  return (
    <>
      <div className="grid md:grid-cols-2 w-full ">
        <EditorLinks links={links} />
        <MovilPreview username={bio.username} />
      </div>
    </>
  )
}
