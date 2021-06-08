import * as React from 'react'
import { useQuery } from '@apollo/client'
import postsQuery from '../queries/postsQuery'

import { IPost } from '../interfaces'

import Post from '../components/Post'

export default function PostsFeed(): JSX.Element {
  const { loading, error, data } = useQuery(postsQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.posts.map((post: IPost) => <Post {...post} key={post.id} />)
}
