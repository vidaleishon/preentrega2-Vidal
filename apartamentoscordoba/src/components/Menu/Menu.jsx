import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget.jsx/CartWidget"

function Menu() {

    return (  
          
        <nav class="navbar navbar-expand-lg navbar-dark px-3">
            <figure class="nav_logo">
                <NavLink to={'./'}>
                    <img src="../../imagenes/logo.png" alt="logo Apartamentos" width="200px"/>
                </NavLink>
            </figure>
            <div class="collapse navbar-collapse justify-content-end" id="navtoggler-aboutus">
                <ul class="nav_menu">
                    <NavLink to='/departamentos'>
                    <li>
                        <a>Departamentos</a>
                    </li>
                    </NavLink>
                    
                    <li>
                       <a> <CartWidget/> </a>
                    </li>
                </ul>
            </div>
        </nav>
         
      )
  
  }

  export default Menu