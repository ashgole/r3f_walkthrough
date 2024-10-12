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

export const metadata = {
  title: "ASHABB Tesla Car walkthrough | React Three Fiber",
  description: "This project utilizes Next.js and React Three Fiber to render and interact with 3D models on the web. The application features smooth scroll-based animations using ScrollControls and OrbitControls, making it responsive across devices. The 3D models are loaded using GLTF, and the UI is styled with TailwindCSS. Deployed on Vercel, the project showcases modern frontend development techniques with an emphasis on performance, responsiveness, and user interaction.",
  authors: [{ name: "Ashish Gole - ASHABB", url: "https://www.ashabb.com" }],
  openGraph: {
    title: "ASHABB Tesla Car walkthrough | React Three Fiber",
    description: "Explore the ASHABB landing page featuring stunning 3D visuals created with React Three Fiber.",
    url: "https://www.ashabb.com",
    images: [
      {
        url: "https://www.ashabb.com/logo.jpg",
        alt: "ASHABB Tesla Car walkthrough | React Three Fiber",
      },
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <link rel="icon" type="image/svg+xml" href="/logo.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="root">
          {children}
        </div>
      </body>
    </html>
  );
}
