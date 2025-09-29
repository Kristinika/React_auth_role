Auth Roles Demo (React + JWT + Roles)

Небольшое демо-приложение на React 18 + TypeScript с аутентификацией (мок-API), сохранением JWT в localStorage, защищёнными маршрутами (React Router v6) и ролевым доступом (admin/manager/client/support). Проект оформлен в mobile-first стиле.

✨ Возможности

- Форма входа (email/пароль) с валидацией и обработкой ошибок
- Моковый сервер аутентификации (имитация API)
- Сохранение токена и информации о пользователе в localStorage
- Кнопка выхода с очисткой сессии
- Защищённые маршруты + редиректы при отсутствии токена
- Ролевой доступ (разные страницы и ссылки для разных ролей)
- Адаптивный, аккуратный UI (mobile-first)

🧰 Технологии

- React 18, TypeScript
- React Router v6
- Context API (управление пользователем/токеном)
- CSS (глобальные стили в index.css)

📂 Структура проекта

| Путь                                | Тип     | Описание                                 |
| ----------------------------------- | ------- | ---------------------------------------- |
| `src/`                              | 🗂️ dir  | Исходники                                |
| `src/api/`                          | 🗂️ dir  | API-слой                                 |
| `src/api/auth.ts`                   | 📄 file | Мок-логика логина, тестовые пользователи |
| `src/components/`                   | 🗂️ dir  | Переиспользуемые компоненты              |
| `src/components/Navbar.tsx`         | 📄 file | Верхняя навигация (зависит от роли)      |
| `src/components/ProtectedRoute.tsx` | 📄 file | Защищённый роут + проверка ролей         |
| `src/context/`                      | 🗂️ dir  | Контекст приложения                      |
| `src/context/AuthContext.tsx`       | 📄 file | Хранение user/token, login/logout        |
| `src/pages/`                        | 🗂️ dir  | Страницы                                 |
| `src/pages/Login.tsx`               | 📄 file | Страница входа                           |
| `src/pages/Dashboard.tsx`           | 📄 file | Дашборд                                  |
| `src/pages/AdminPage.tsx`           | 📄 file | Раздел администратора                    |
| `src/pages/ManagerPage.tsx`         | 📄 file | Раздел менеджера                         |
| `src/pages/ClientPage.tsx`          | 📄 file | Раздел клиента                           |
| `src/pages/SupportPage.tsx`         | 📄 file | Раздел поддержки                         |
| `src/types/`                        | 🗂️ dir  | Типы/интерфейсы                          |
| `src/types/auth.d.ts`               | 📄 file | Типы: `User`, `UserRole`, `AuthResponse` |
| `src/routes.tsx`                    | 📄 file | Таблица маршрутов приложения             |
| `src/App.tsx`                       | 📄 file | Оболочка: Router + AuthProvider + layout |
| `src/index.css`                     | 📄 file | Глобальные стили                         |
| `src/index.tsx`                     | 📄 file | Точка входа                              |

🧭 Требования

- Node.js 18+
- npm или yarn

🚀 Установка и старт

# 1) установить зависимости

npm install

# 2) запустить дев-сервер

npm start

🔑 Тестовые аккаунты

| Роль          | Email                                       | Пароль     |
| ------------- | ------------------------------------------- | ---------- |
| company_admin | [admin@test.com](mailto:admin@test.com)     | admin123   |
| manager       | [manager@test.com](mailto:manager@test.com) | manager123 |
| client        | [client@test.com](mailto:client@test.com)   | client123  |
| support       | [support@test.com](mailto:support@test.com) | support123 |

🧪 Как это работает

Аутентификация

- src/api/auth.ts — имитация API: проверяет email/пароль, возвращает { token, user }.
- AuthContext (Context API) хранит user/token, предоставляет login() и logout().
- Токен и пользователь сохраняются в localStorage (персистентная сессия).

Защищённые маршруты

ProtectedRoute:

- если нет токена → редирект на /login
- если roles указаны и роль не совпадает → редирект на /dashboard

Примеры:

- /dashboard — доступен всем авторизованным
- /admin — только company_admin
- /manager — только manager
