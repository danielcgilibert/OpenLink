import { getBio } from '@/server/services/getBio'
import { getLinks } from '@/server/services/getLinks'
import FormAddLink from '@/components/FormAddLink'
import { redirect } from 'next/navigation'
import ListLinks from '@/components/ListLinks'

export default async function Dashboard() {
  const bio = await getBio()

  if (!bio) {
    redirect('/create-bio')
  }

  const links = await getLinks(bio.id)

  return (
    <>
      <div className='mt-5  grid place-content-center '>IN DEVELOPMENT</div>
    </>
  )
}
