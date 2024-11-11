import Auth from "../components/Auth"
import Quotes from "../components/Quotes"


function Signin() {
  return (
    <div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
          <Auth type="signin"/>
      </div>
     <div className="invisible lg:visible">
      <Quotes/>
     </div>
    </div>
  </div>
  )
}

export default Signin