'use client'

import { FormEvent, useState } from 'react'
import { Search } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'

import { useToast } from './ui/use-toast'
import { Loading } from './loading'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
    ) {
      return true
    }
  } catch (error) {
    console.error(`ERROR | ${error}`)
    return false
  }

  return false
}

export function Searchbar() {
  const [searchPrompt, setSearchPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { toast } = useToast()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const isValidLink = isValidAmazonProductURL(searchPrompt)

    if (!isValidLink)
      return toast({
        title: 'Error',
        description: 'Invalid link.',
        variant: 'destructive',
      })

    try {
      setIsLoading(true)
    } catch (error) {
      console.error(`ERROR | ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex flex-wrap gap-4">
      <Input
        type="text"
        placeholder="Enter product link"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        className="flex-1"
      />

      <Button disabled={isLoading} className="min-w-[120px] gap-1">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Search className="h-4 w-4" />
            Search
          </>
        )}
      </Button>
    </form>
  )
}
