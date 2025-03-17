import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"

const Header = () => {
  return (
    <header className="site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col d-lg-block">
            <MegaMenu />
          </div>
          <div className="col-auto d-lg-none">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

