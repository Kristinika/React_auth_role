import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  if (!user) return null;

  return (
    <div className="card">
      <h2>
        Добро пожаловать, {user.role} {user.name}!
      </h2>
      <p>
        Вы вошли как <b>{user.role}</b>. Выберите раздел:
      </p>

      <div className="link-grid">
        {user.role === "company_admin" && (
          <Link to="/admin" className="link-item">
            Админ панель
          </Link>
        )}
        {user.role === "manager" && (
          <Link to="/manager" className="link-item">
            Панель менеджера
          </Link>
        )}
        {user.role === "client" && (
          <Link to="/client" className="link-item">
            Личный кабинет
          </Link>
        )}
        {user.role === "support" && (
          <Link to="/support" className="link-item">
            Служба поддержки
          </Link>
        )}
      </div>

      <button
        className="btn btn-ghost btn-block"
        style={{ marginTop: 12 }}
        onClick={logout}
      >
        Выйти
      </button>
    </div>
  );
}
