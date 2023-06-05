import { Link } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

// send a request to the server to update the show property of the link
const useCheck = (link: Link, enabled: boolean) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => {
      return fetch('/api/link/check', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...link, show: enabled })
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movilPreviewLinks'] })
    },
    onError: () => {
      toast.error('Error')
    }
  })

  return mutation
}

export default useCheck
