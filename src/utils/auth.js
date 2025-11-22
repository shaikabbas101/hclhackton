// import { decode as jwt_decode } from "jwt-decode";

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    // return jwt_decode(token);
    return token;
  } catch {
    return null;
  }
}
