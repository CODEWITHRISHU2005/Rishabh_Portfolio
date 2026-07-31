"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, ExternalLink, Code2, CheckCircle2, Trophy, Sparkles, BookOpen } from "lucide-react"
import Link from "next/link"

export default function EducationCertifications() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      {/* Grid containing Education & Achievements */}
      <div className="grid gap-8 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Education */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Education</h3>
              <p className="text-sm text-muted-foreground">Academic background and qualification</p>
            </div>
          </div>

          <div className="h-full rounded-2xl border border-border/80 bg-card/40 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 hover:shadow-xl transition-all duration-300">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              <BookOpen className="w-48 h-48 text-primary" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  July 2024 – June 2027
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  CGPA: 8.5
                </span>
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                  Graphic Era Deemed to be University
                </h4>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Dehradun, Uttarakhand, India
                </p>
              </div>

              <div className="pt-2 border-t border-border/60">
                <p className="text-base font-semibold text-foreground/90">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="text-xs font-medium text-muted-foreground mt-0.5">
                  Industry Integrated Specialization
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures & Algorithms", "Core & Advance Java", "DBMS & SQL", "Object Oriented Design", "Web Development"].map((skill) => (
                    <span key={skill} className="rounded-md bg-background/60 border border-border/60 px-2.5 py-1 text-xs text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground relative z-10">
              <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Active Student & Scholar
              </span>
              <span>Degree In Progress</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Certifications & Achievements */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/20">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Certifications & Achievements</h3>
              <p className="text-sm text-muted-foreground">Problem solving stats and professional certifications</p>
            </div>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-between">
            {/* LeetCode DSA Highlight Card */}
            <Link 
              href="https://leetcode.com/u/9DXfajaRfK/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-card/50 to-card/30 p-5 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:scale-110 transition-transform">
                      <Code2 className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-extrabold text-foreground">600+ DSA Problems Solved</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">LeetCode</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Deep problem solving in Data Structures & Algorithms: DP, Graphs, Trees, Heaps, Arrays, and Strings.
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
              </div>
            </Link>

            {/* Certification Card 1: Oracle AI */}
            <div className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-md p-5 relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      Oracle Certified AI Foundations Associate
                    </h5>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Issued by Oracle • AI & Machine Learning Foundations
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary shrink-0">
                  <Award className="h-3.5 w-3.5 text-red-500" />
                  Certified
                </span>
              </div>
            </div>

            {/* Certification Card 2: SAP Generative AI */}
            <div className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-md p-5 relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      SAP Certified - SAP Generative AI Developer
                    </h5>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Issued by SAP • Generative AI Development & LLM Systems
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary shrink-0">
                  <Award className="h-3.5 w-3.5 text-blue-500" />
                  Certified
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
