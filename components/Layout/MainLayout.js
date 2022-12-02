import { Footer, Navbar } from "../common";

const MainLayout = ({children}) => {
    return (
        <div>
          <Navbar/>
          <div className="nav-h">
          {children}
            </div>
          <Footer/>
        </div>
    )
}

export default MainLayout
