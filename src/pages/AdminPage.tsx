import { useAuth } from "../context/AuthContext";

export default function AdminPage() {
  const { user } = useAuth();
  return (
    <div className="card">
      <h2>Админ панель</h2>
      <p>Привет, {user?.name}! У вас полный доступ к системе.</p>
      <ul>
        <li>Управление пользователями</li>
        <li>Финансовые операции</li>
        <li>Настройки компании</li>
      </ul>
    </div>
  );
}
