import LandingPageNav from "./components/LandingPage/LandingPageNav"
import NewWorldText from "./components/LandingPage/HeadingTexts"
import Paragraphs from "./components/LandingPage/Paragraphs"

export default function Home() {
  return (
    <div
     className="min-w-screen min-h-screen"
     style={{
      backgroundImage: `url('/handstouching_imrpoved.jpeg')`,
      backgroundSize: 'cover', // Changed from 'fit' to 'cover'
      backgroundPosition: 'center', // Center the background image
     }}>

      <nav className="text-white">
        <LandingPageNav/>
      </nav>
      
      <p>
        <NewWorldText/>
      </p>

      <p id="paragraphs_container">
      </p>

    </div>
  )
}