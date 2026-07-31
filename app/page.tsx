import PortfolioClient from "./components/portfolio-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rishabh Gupta - Java Backend Developer | Spring Boot & Security",
  description: "Java Backend Developer (Fresher) passionate about Spring Boot, Spring Security (JWT, OAuth2, MFA, OTT), HLS Video Streaming, Virtual Threads, Redis, and Spring AI Vector RAG systems.",
  keywords: [
    "Rishabh Gupta",
    "Java Backend Developer",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "OAuth2",
    "HLS Streaming",
    "Java Virtual Threads",
    "MongoDB Atlas Vector Search",
    "Spring AI RAG",
    "Redis",
    "Docker",
    "LeetCode 600+ DSA",
    "REST API"
  ],
  authors: [{ name: "Rishabh Gupta" }],
  openGraph: {
    title: "Rishabh Gupta - Java Backend Developer Portfolio",
    description: "Building scalable backend systems with Spring Boot, Spring Security, HLS Streaming, and AI RAG integrations.",
    type: "website",
    locale: "en_US",
  },
}

export default function Page() {
  return <PortfolioClient />
}