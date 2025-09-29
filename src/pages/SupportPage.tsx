import { useAuth } from "../context/AuthContext";

export default function SupportPage() {
  const { user } = useAuth();
  return (
    <div className="card">
      <h2>Служба поддержки</h2>
      <p>Привет, {user?.name}! Обрабатывайте тикеты и обращения.</p>
      <ul>
        <li>Входящие обращения</li>
        <li>Открытые тикеты</li>
        <li>История решений</li>
      </ul>
    </div>
  );
}
