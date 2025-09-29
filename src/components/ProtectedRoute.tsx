import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  roles?: string[];
};

export default function ProtectedRoute({ children, roles }: Props) {
  const { user, token } = useAuth();

  if (!token) return <Navigate to="/login" />;

  if (roles && user && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
