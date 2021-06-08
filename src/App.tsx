import * as React from 'react'
import { ChakraProvider, Container, theme, VStack } from '@chakra-ui/react'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Posts from './components/PostsFeed'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

export const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Container maxW="container.md">
          <Switch>
            <Route path="/">
              <VStack spacing={4} align="stretch">
                <Posts />
              </VStack>
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}
