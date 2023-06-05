import { Link } from '@prisma/client'
import { useQuery, useQueryClient } from '@tanstack/react-query'

// get all links
export const useLinks = (
  queryKey: string,
  invalidateQuery?: string,
  links?: Link[] | null
) => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await fetch(`/api/link`)
      const result = await res.json()
      queryClient.invalidateQueries({ queryKey: [invalidateQuery] })
      return result.data
    },
    initialData: links,
    refetchOnWindowFocus: false
  })

  return query
}
