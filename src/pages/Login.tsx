import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { loginApi } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const { token, user } = await loginApi(email, password);
      login(token, user);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Ошибка входа");
    }
  };

  return (
    <div className="card">
      <h2>Вход</h2>
      <p>Используйте тестовые аккаунты для проверки ролей.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <input
            className="input"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Войти
        </button>
        {error && <div className="error">{error}</div>}
      </form>

      <div style={{ marginTop: 14, fontSize: ".92rem", color: "var(--muted)" }}>
        <div>
          <b>Администратор</b> — admin@test.com / admin123
        </div>
        <div>
          <b>Менеджер</b> — manager@test.com / manager123
        </div>
        <div>
          <b>Клиент</b> — client@test.com / client123
        </div>
        <div>
          <b>Поддержка</b> — support@test.com / support123
        </div>
      </div>
    </div>
  );
}
