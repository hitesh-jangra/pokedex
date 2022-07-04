import React from 'react'

interface ImageProps{
    id: number;
    name: string;
    className?: string;
}

const Image = ({id, name, className}:ImageProps) => {
  return (
    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`} className={className}
    alt={name} width='150px' height='150px' />
  )
}

export default Image