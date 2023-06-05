import { getBio } from '@/server/services/getBio'
import { getLinks } from '@/server/services/getLinks'
import { redirect } from 'next/navigation'
import EditorLinks from '@/components/EditorLinks'
import MovilPreview from '@/components/MovilPreview'

export default async function Dashboard() {
  const bio = await getBio()
  const links = await getLinks(bio!.id)

  return (
    <>
      <div>
        <EditorLinks links={links} />
      </div>
    </>
  )
}
