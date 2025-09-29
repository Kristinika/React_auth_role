import { useAuth } from "../context/AuthContext";

export default function ManagerPage() {
  const { user } = useAuth();
  return (
    <div className="card">
      <h2>Панель менеджера</h2>
      <p>Привет, {user?.name}! Работайте с клиентами и заявками.</p>
      <ul>
        <li>Просмотр объектов</li>
        <li>Управление заявками</li>
        <li>Коммуникации с клиентами</li>
      </ul>
    </div>
  );
}
