import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "GameDeals Bot", description: "Painel de ofertas de jogos para Discord" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
