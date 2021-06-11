import React, { useState } from 'react'
import { IPost } from '../interfaces'
import { Box, Center, Text, Stack, Image, Avatar, Button } from '@chakra-ui/react'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { useMutation } from '@apollo/client'
import likeMutation from '../queries/likeMutation'
import unlikeMutation from '../queries/unlikeMutation'

export default function Post(props: IPost): JSX.Element {
  const { body, createdAt, user, imageUrl, liked, likesCount } = props
  const [like] = useMutation(likeMutation, {
    onCompleted({ like: { likesCount } }) {
      setIsLiked(true)
      setCurrentLikesCount(likesCount)
      return true
    },
  })
  const [unlike] = useMutation(unlikeMutation, {
    onCompleted({ unlike: { likesCount } }) {
      setIsLiked(false)
      setCurrentLikesCount(likesCount)
      return true
    },
  })
  const [isLiked, setIsLiked] = useState(liked)
  const [currentLikesCount, setCurrentLikesCount] = useState(likesCount)
  const setLike = () => {
    like({ variables: { likeableType: 'Post', likeableId: props.id } })
  }
  const unsetLike = () => {
    unlike({ variables: { likeableType: 'Post', likeableId: props.id } })
  }

  return (
    <Center py={6}>
      <Box w={'full'} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={user.avatarUrl} alt={user.username} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{user.fullName}</Text>
            <Text color={'gray.500'}>{createdAt}</Text>
          </Stack>
        </Stack>
        <Box bg={'gray.100'} mt={6} mx={0} mb={6} pos={'relative'}>
          {imageUrl && <Image src={imageUrl} />}
        </Box>
        <Stack>
          <Text color={'gray.500'}>{body}</Text>
        </Stack>
        <Stack direction="row">
          <Button aria-label="Like" variant="outline" onClick={isLiked ? unsetLike : setLike}>
            {isLiked ? <IoIosHeart size="2em" /> : <IoIosHeartEmpty size="2em" />}
            <Text color={'gray.500'}>{currentLikesCount || 0}</Text>
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}
