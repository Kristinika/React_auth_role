type User = {
  id: number;
  name: string;
  email: string;
  role: "company_admin" | "manager" | "client" | "support";
  organization: string;
};

const users: Record<string, { password: string; user: User }> = {
  "admin@test.com": {
    password: "admin123",
    user: {
      id: 1,
      name: "Админ Иван",
      email: "admin@test.com",
      role: "company_admin",
      organization: "Company",
    },
  },
  "manager@test.com": {
    password: "manager123",
    user: {
      id: 2,
      name: "Мария",
      email: "manager@test.com",
      role: "manager",
      organization: "Company",
    },
  },
  "client@test.com": {
    password: "client123",
    user: {
      id: 3,
      name: "Алексей",
      email: "client@test.com",
      role: "client",
      organization: "Company",
    },
  },
  "support@test.com": {
    password: "support123",
    user: {
      id: 4,
      name: "Ольга",
      email: "support@test.com",
      role: "support",
      organization: "Company",
    },
  },
};

export async function loginApi(email: string, password: string) {
  const record = users[email];
  if (record && record.password === password) {
    // имитация JWT
    const token = btoa(`${email}:${Date.now()}`);
    return { token, user: record.user };
  }
  throw new Error("Неверные email или пароль");
}
