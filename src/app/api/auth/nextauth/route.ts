import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Логирование конфигурации
console.log("NextAuth конфигурация:");
console.log("Доступные провайдеры:", authOptions.providers.map(p => p.id));
console.log("ADMIN_USERNAME задан:", !!process.env.ADMIN_USERNAME);
console.log("ADMIN_PASSWORD задан:", !!process.env.ADMIN_PASSWORD);
console.log("NEXTAUTH_SECRET задан:", !!process.env.NEXTAUTH_SECRET);

// Обработчик аутентификации NextAuth для API маршрутов
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
