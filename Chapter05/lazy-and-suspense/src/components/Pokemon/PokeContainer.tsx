import { FC, Suspense } from 'react'
import styled from 'styled-components'

import LoadingSkeleton from '../LoadingSkeleton'
import Pokedex from './Pokedex'
import { StyledPokedex } from './Pokemon.styled'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  div {
    margin-right: 5px;
  }
`

const LoadingGrid = () => {
  const loaders = new Array(45);
  return (
    <StyledGrid>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
      <div>
        <LoadingSkeleton />
      </div>
    </StyledGrid>
  )
}

const PokeContainer: FC = () => {
  return (
    <Suspense fallback={<LoadingGrid />}>
      <Pokedex />
    </Suspense>
  )
}

export default PokeContainer