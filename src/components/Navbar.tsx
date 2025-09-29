import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span className="brand-dot" />
          <Link
            to="/"
            className="nav-link"
            style={{ padding: 0, border: "none" }}
          >
            Auth Roles Demo
          </Link>
        </div>

        {user ? (
          <>
            <nav className="nav-links">
              <Link to="/dashboard" className="nav-link">
                Главная
              </Link>
              {user.role === "company_admin" && (
                <Link to="/admin" className="nav-link">
                  Админ
                </Link>
              )}
              {user.role === "manager" && (
                <Link to="/manager" className="nav-link">
                  Менеджер
                </Link>
              )}
              {user.role === "client" && (
                <Link to="/client" className="nav-link">
                  Клиент
                </Link>
              )}
              {user.role === "support" && (
                <Link to="/support" className="nav-link">
                  Поддержка
                </Link>
              )}
            </nav>

            <div className="nav-right">
              <span className="user-name">{user.name}</span>
              <button className="btn btn-ghost" onClick={logout}>
                Выйти
              </button>
            </div>
          </>
        ) : (
          <nav className="nav-links">
            <Link to="/login" className="nav-link">
              Войти
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
