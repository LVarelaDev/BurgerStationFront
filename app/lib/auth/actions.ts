"use server";

import { authOptions } from "./config";
import { getServerSession } from "next-auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export async function getSessionToken() {
  const session = await getServerSession(authOptions);
  return session?.accessToken;
}

export async function isAuthenticated() {
  const session = await getServerSession(authOptions);
  return !!session;
}
