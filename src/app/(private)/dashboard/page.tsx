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
      <div className=' mt-12 grid w-full   rounded-lg px-5 md:grid-cols-[55%_auto]    md:p-0'>
        <EditorLinks links={links} />
        <MovilPreview username={bio.username} />
      </div>
    </>
  )
}
