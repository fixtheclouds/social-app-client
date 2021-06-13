import * as React from 'react'
import { ChakraProvider, Container, theme, VStack } from '@chakra-ui/react'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import PostsFeed from './pages/PostsFeed'
import Search from './pages/Search'
import About from './pages/About'
import Login from './pages/Login'

export const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Container maxW="container.md">
          <VStack spacing={4} align="stretch">
            <Switch>
              <Route exact path="/">
                <PostsFeed />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </VStack>
        </Container>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}
