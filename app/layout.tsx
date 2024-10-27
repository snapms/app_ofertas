import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Duoc UC | Ofertas Práctica",
    description: "Ofertas de prácticas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="bg-backgroundDuoc text-textDuoc min-h-[100vh]">
                    <img
                        src="./logo-duoc.svg"
                        alt=""
                        className="h-10 mx-auto "
                    />

                    {children}
                </div>
            </body>
        </html>
    );
}
