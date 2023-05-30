import getBio from '@/actions/getBio'
import getLinks from '@/actions/getLinks'
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
      <div className="grid  place-content-center mt-5 ">IN DEVELOPMENT</div>
    </>
  )
}
