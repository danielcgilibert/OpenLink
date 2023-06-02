import { getBio } from '@/server/services/getBio'
import { getLinks } from '@/server/services/getLinks'
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
      <div className='mt-5 grid  w-full rounded-lg   md:grid-cols-2'>
        <EditorLinks links={links} />
        <MovilPreview username={bio.username} />
      </div>
    </>
  )
}
