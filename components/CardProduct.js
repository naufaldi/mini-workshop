import React from 'react'
import { chakra } from '@chakra-ui/react'

const Card = chakra('div', {
  baseStyle: {
    shadow: 'lg',
    rounded: 'lg',
    bg: 'white',
    maxW: '300px',
    p: '2rem',
  },
})

const CardProduct = () => {
  return (
    <Card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
      cupiditate explicabo velit reprehenderit voluptate odit numquam debitis
      soluta magni possimus minima nihil, ut perferendis quos maiores, expedita
      omnis sequi fugiat!
    </Card>
  )
}

export default CardProduct
