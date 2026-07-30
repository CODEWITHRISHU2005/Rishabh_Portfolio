import PortfolioClient from "./components/portfolio-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rishabh Gupta - Aspiring Java Backend Developer | Spring Boot Developer",
  description: "Passionate Spring Boot developer specializing in scalable backend systems, JWT, OAuth2, microservices, and e-commerce platforms. Experience with Spring Security, Redis, Docker, and AWS.",
  keywords: ["Java Backend Developer", "Spring Boot", "Microservices", "JWT", "OAuth2", "Redis", "Docker", "AWS", "REST API"],
  authors: [{ name: "Rishabh Gupta" }],
  openGraph: {
    title: "Rishabh Gupta - Java Backend Developer",
    description: "Building scalable backend systems with Spring Boot, microservices, and cloud technologies",
    type: "website",
    locale: "en_US",
  },
}

export default function Page() {
  return <PortfolioClient />
}