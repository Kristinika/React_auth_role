import { useAuth } from "../context/AuthContext";

export default function ClientPage() {
  const { user } = useAuth();
  return (
    <div className="card">
      <h2>Личный кабинет</h2>
      <p>Здравствуйте, {user?.name}! Ваши данные ниже.</p>
      <ul>
        <li>Договоры аренды</li>
        <li>История платежей</li>
        <li>Документы</li>
      </ul>
    </div>
  );
}
