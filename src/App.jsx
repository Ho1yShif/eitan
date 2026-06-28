import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Videos from './components/Videos'
import Gallery from './components/Gallery'
import Press from './components/Press'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Videos />
        <Gallery />
        <Press />
      </main>
      <Contact />
    </>
  )
}
