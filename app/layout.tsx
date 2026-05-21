import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://utkarsh-portfolio.vercel.app"),
  title: "Utkarsh Kumar | UI & Frontend Developer | React, Next.js & Bubble.io Expert",
  description:
    "Explore the premium portfolio of Utkarsh Kumar — a Senior UI Developer specializing in high-performance React.js, Next.js, Tailwind CSS, Bubble.io, and custom WordPress solutions.",
  keywords: [
    "Utkarsh Kumar",
    "UI Developer New Delhi",
    "Frontend Developer India",
    "React Developer",
    "Next.js Architect",
    "Tailwind CSS Expert",
    "Bubble.io Developer",
    "WordPress Developer",
    "No-Code Specialist",
    "Web Developer",
    "Portfolio Website",
    "HestaBit Developer"
  ],
  authors: [{ name: "Utkarsh Kumar", url: "https://utkarsh-portfolio.vercel.app" }],
  creator: "Utkarsh Kumar",
  alternates: {
    canonical: "https://utkarsh-portfolio.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Utkarsh Kumar | UI & Frontend Developer | React, Next.js & Bubble.io Expert",
    description:
      "Explore the premium portfolio of Utkarsh Kumar — a Senior UI Developer specializing in high-performance React.js, Next.js, Tailwind CSS, Bubble.io, and WordPress.",
    url: "https://utkarsh-portfolio.vercel.app",
    siteName: "Utkarsh Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Kumar — UI & Frontend Developer Portfolio Card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Kumar | UI & Frontend Developer | React, Next.js & Bubble.io Expert",
    description:
      "Explore the premium portfolio of Utkarsh Kumar — a Senior UI Developer specializing in high-performance React.js, Next.js, Tailwind CSS, Bubble.io, and WordPress.",
    images: ["/og-image.png"],
    creator: "@utkarshkumar",
  },
  icons: {
    icon: [
      { url: "/utkarsh.ico", sizes: "any" },
      { url: "/utkarsh.ico", type: "image/x-icon" },
    ],
    shortcut: "/utkarsh.ico",
    apple: "/utkarsh.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Entity Schema for AI Search Engines (GEO)
  const personJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://utkarsh-portfolio.vercel.app/#person",
        "name": "Utkarsh Kumar",
        "url": "https://utkarsh-portfolio.vercel.app",
        "image": "https://utkarsh-portfolio.vercel.app/og-image.png",
        "jobTitle": "UI & Frontend Developer",
        "telephone": "+918800244721",
        "email": "utkarsh201994@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New Delhi",
          "addressCountry": "India"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "HestaBit",
          "url": "https://www.hestabit.com"
        },
        "sameAs": [
          "https://www.linkedin.com/in/utkarshkumar-94783212b"
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Guru Gobind Singh Indraprastha University",
            "degree": "Master of Computer Applications (MCA)"
          },
          {
            "@type": "EducationalOrganization",
            "name": "CCS (Chaudhary Charan Singh) University",
            "degree": "Bachelor of Computer Application (BCA)"
          }
        ],
        "knowsAbout": [
          "React.js",
          "Next.js",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Bubble.io",
          "WordPress",
          "Figma",
          "Git",
          "HTML5",
          "CSS3",
          "SEO",
          "UI/UX Design",
          "Responsive Web Design"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://utkarsh-portfolio.vercel.app/#website",
        "url": "https://utkarsh-portfolio.vercel.app",
        "name": "Utkarsh Kumar Portfolio",
        "publisher": {
          "@id": "https://utkarsh-portfolio.vercel.app/#person"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://utkarsh-portfolio.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Utkarsh Kumar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Utkarsh Kumar is a professional UI & Frontend Developer with over 4 years of experience crafting high-performance, pixel-perfect interfaces. He is currently an Associate Software Engineer at HestaBit, specializing in React.js, Next.js, Tailwind CSS, and No-Code development platforms like Bubble.io."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies does Utkarsh Kumar specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Utkarsh Kumar specializes in a comprehensive frontend stack including React.js, Next.js, Vue.js, TypeScript, JavaScript (ES6+), Tailwind CSS, SCSS/CSS3, and HTML5. He is also an expert in No-Code tools such as Bubble.io and WordPress."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Utkarsh Kumar based and is he available for remote roles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Utkarsh Kumar is based in New Delhi, India. Yes, he is fully available for remote freelance contracts as well as full-time frontend engineering opportunities globally."
            }
          },
          {
            "@type": "Question",
            "name": "What is Utkarsh Kumar's educational background?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Utkarsh Kumar holds a Master of Computer Applications (MCA) from Guru Gobind Singh Indraprastha University (2017 - 2020) and a Bachelor of Computer Application (BCA) from Chaudhary Charan Singh University (2014 - 2017)."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased selection:bg-violet-500/30 selection:text-white`}
      >
        <a href="#about" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
