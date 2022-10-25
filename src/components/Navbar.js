import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication();
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
       
        Por <span>Excelência</span>
      </NavLink>

      <ul className={styles.links_list}>
        <li>
          <NavLink to="/">Home </NavLink>
        </li>

        <>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Entrar{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {" "}
                  Cadastrar{" "}
                </NavLink>
              </li>
            </>
          )}
          {user && (

            <>
              <li>
                <NavLink
                  to="/posts/create"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Novo Post 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {" "}
                  Dashboard{" "}
                </NavLink>
              </li>
            </>

          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
            
              Sobre
            </NavLink>
          </li>
        </>
        {user &&(
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;