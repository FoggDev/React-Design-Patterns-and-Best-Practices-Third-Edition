// Dependencies
import { SWRConfig } from 'swr'
import styled from 'styled-components'

// Components
import PokeContainer from './Pokemon/PokeContainer'

// Styles
import { StyledPokedex } from './Pokemon/Pokemon.styled'

const StyledTitle = styled.h1`
  text-align: center;
`

const fetcher = (url: string) => {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json()
    }

    return {
      error: true
    }
  })
}

const App = () => {
  return (
    <> 
      <StyledTitle>Pokedex</StyledTitle>     

      <SWRConfig
        value={{
          fetcher,
          suspense: true,
        }}
      >
        <StyledPokedex>
          <PokeContainer />
        </StyledPokedex>
      </SWRConfig>
    </>
  )
}

export default App;
