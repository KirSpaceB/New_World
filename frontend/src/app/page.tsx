import LandingPageNav from "../components/LandingPage/LandingPageNav"
import NewWorldText from "../components/LandingPage/HeroText"
import ProductPage from "../components/ProductPage/ProductPage"
import PlansPage from "@/components/PlansPage/PlansPage"
import LoginPage from "./login/LoginPage"
import SignupPage from "./Sign-up/SignupPage"


export default function Home() {
  return (
    <div>

      <div
      className="min-w-screen min-h-screen"
      style={{
        backgroundImage: `url('/handstouching.jpeg')`,
        backgroundSize: 'cover', // Changed from 'fit' to 'cover'
        backgroundPosition: 'center', // Center the background image
      }}>

        <nav className="text-white">
          <LandingPageNav/>
        </nav>
        
        <div>
          <NewWorldText/>
        </div>
        
      </div>

      <div className="min-h-screen min-w-screen">
        <ProductPage/>
      </div>

      <div className="min-h-screen min-w-screen bg-black">
        <PlansPage/>
      </div>
      <div className="min-h-screen min-w-screen bg-black">
        <LoginPage/>
      </div>
      <div className="min-h-screen min-w-screen bg-black">
        <SignupPage/>
      </div>
    </div>

  )
}