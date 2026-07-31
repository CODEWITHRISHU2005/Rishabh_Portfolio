"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Workflow, Code2, Server, ArrowRight, ShieldCheck, Sparkles, Database, Layers, Check } from "lucide-react"

const architectureFlows = [
  {
    id: "video-stream",
    title: "Video Stream App",
    subtitle: "VideoServiceImpl.java (Virtual Threads & HLS Concurrency)",
    repoLink: "https://github.com/CODEWITHRISHU2005/Video-Streaming-App",
    fileName: "VideoServiceImpl.java",
    steps: [
      { step: "1", title: "Semaphore & Concurrency", desc: "Acquires Semaphore(3) to throttle FFMPEG CPU usage per host instance.", icon: Cpu, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
      { step: "2", title: "Virtual Thread Execution", desc: "Spawns Java 21 Executors.newVirtualThreadPerTaskExecutor() via CompletableFuture.", icon: Workflow, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
      { step: "3", title: "FFMPEG & R2 Cloud Sync", desc: "Converts mp4 to HLS .m3u8 playlists and uploads folder chunks to CloudFlare R2.", icon: Server, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
      { step: "4", title: "Status & Cleanup", desc: "Updates video status to COMPLETED and safely purges temporary local disk chunks.", icon: Database, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    ],
    codeSnippet: `// Exact Code from: Video-Streaming-App/src/main/java/.../impl/VideoServiceImpl.java
@Service
@Slf4j
@RequiredArgsConstructor
public class VideoServiceImpl implements VideoService {

    private final VideoRepository videoRepository;
    private final FileStorageService fileStorageService;
    private final VideoServiceHelper helper;
    private final Semaphore ffmpegSemaphore = new Semaphore(3);

    @Override
    public void processVideo(String videoId) {
        CompletableFuture.runAsync(() -> {
            try {
                ffmpegSemaphore.acquire();

                helper.runFFmpegConversion(videoId);
                helper.uploadFolderToCloud(videoId);

                videoRepository.findById(videoId).ifPresent(video -> {
                    video.setStatus("COMPLETED");
                    video.setUrl(r2PublicUrl + "/videos/" + videoId + "/master.m3u8");
                    videoRepository.save(video);
                });

                FileSystemUtils.deleteRecursively(Paths.get(hslDir, videoId));

            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                helper.updateVideoStatus(videoId, "FAILED");
            } finally {
                ffmpegSemaphore.release();
            }
        }, Executors.newVirtualThreadPerTaskExecutor());
    }
}`,
    codeLanguage: "java",
  },
  {
    id: "security-config",
    title: "Spring Security Architecture",
    subtitle: "SecurityConfig.java (MFA, OTT & OAuth2 Filter Chain)",
    repoLink: "https://github.com/CODEWITHRISHU2005/Video-Streaming-App",
    fileName: "SecurityConfig.java",
    steps: [
      { step: "1", title: "MFA Authority Matcher", desc: "Combines OTP_AUTHORITY and OTT_AUTHORITY into a multi-factor AuthorizationManager.", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
      { step: "2", title: "Stateless Security Filter", desc: "Disables CSRF & sets session creation policy to STATELESS for JWT token auth.", icon: Server, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
      { step: "3", title: "OAuth2 & OneTimeToken", desc: "Configures Google OAuth2 Login & Spring Security OneTimeToken (Magic Link OTT).", icon: Workflow, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
      { step: "4", title: "JWT Auth Filter", desc: "Injects JwtAuthFilter prior to UsernamePasswordAuthenticationFilter.", icon: Layers, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
    ],
    codeSnippet: `// Exact Code from: Video-Streaming-App/src/main/java/.../config/SecurityConfig.java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthFilter jwtAuthFilter) throws Exception {
        AuthorizationManager<RequestAuthorizationContext> mfa =
                AuthorizationManagers.allOf(
                        AuthorityAuthorizationManager.hasAuthority("OTP_AUTHORITY"),
                        AuthorityAuthorizationManager.hasAuthority(FactorGrantedAuthority.OTT_AUTHORITY)
                );
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/api/auth/**",
                                "/api/ott/**",
                                "/api/otp/**",
                                "/api/videos/**",
                                "/login/oauth2/code/google/**").permitAll()
                        .anyRequest().access(mfa)
                )
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .oauth2Login(oauth2 -> oauth2.successHandler(oAuth2SuccessHandler))
                .oneTimeTokenLogin(ott -> ott
                        .tokenGenerationSuccessHandler(oneTimeTokenGenerationSuccessHandler())
                        .permitAll())
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}`,
    codeLanguage: "java",
  },
  {
    id: "yojana-rag",
    title: "YojanaSetu AI Vector RAG",
    subtitle: "ChatService.java (PDF Document Ingestion & Spring AI)",
    repoLink: "https://github.com/CODEWITHRISHU2005/YojanaSetu",
    fileName: "ChatService.java",
    steps: [
      { step: "1", title: "PDF Scheme Ingestion", desc: "Scans classpath:schemes/*.pdf and ingests government policy docs into VectorStore.", icon: Code2, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
      { step: "2", title: "Filter & Similarity Search", desc: "Executes similaritySearch with threshold score 0.65d against Atlas Vector Store.", icon: Database, color: "text-green-500 bg-green-500/10 border-green-500/20" },
      { step: "3", title: "Context Aggregation", desc: "Extracts formatted document content & aggregates policy details for prompt context.", icon: Sparkles, color: "text-pink-500 bg-pink-500/10 border-pink-500/20" },
      { step: "4", title: "Reactive Stream Prompt", desc: "Returns reactive Flux<String> response from Spring AI ChatClient to rural users.", icon: Workflow, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
    ],
    codeSnippet: `// Exact Code from: YojanaSetu/src/main/java/.../service/ChatService.java
@Service
@Slf4j
public class ChatService {

    @Value("classpath:schemes/*.pdf")
    private Resource[] pdfResource;

    private final VectorStore vectorStore;
    private final ChatClient chatClient;

    public Flux<String> getRAGResponse(String userQuery) {
        String query = userQuery.trim();
        List<Document> docs = vectorStore.similaritySearch(
                SearchRequest.builder()
                        .query(query)
                        .topK(6)
                        .similarityThreshold(0.65d)
                        .build()
        );

        if (docs.isEmpty())
            return Flux.just("I couldn't find relevant information.");

        String context = docs.stream()
                .map(Document::getFormattedContent)
                .collect(Collectors.joining("\\n\\n"));

        return chatClient.prompt()
                .user(userQuery)
                .call()
                .contentStream();
    }
}`,
    codeLanguage: "java",
  },
]

export default function ArchitectureCodeShowcase() {
  const [activeFlowId, setActiveFlowId] = useState("video-stream")
  const [copiedCode, setCopiedCode] = useState(false)

  const activeFlow = architectureFlows.find((f) => f.id === activeFlowId) || architectureFlows[0]

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeFlow.codeSnippet)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Architecture Flow Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {architectureFlows.map((flow) => {
          const isActive = flow.id === activeFlowId
          return (
            <button
              key={flow.id}
              onClick={() => setActiveFlowId(flow.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 border ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                  : "bg-card/40 text-muted-foreground border-border/80 hover:border-primary/40 hover:text-foreground backdrop-blur-md"
              }`}
            >
              <Workflow className="h-4 w-4" />
              <span>{flow.title}</span>
            </button>
          )
        })}
      </div>

      {/* Main Showcase Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFlowId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid gap-8 lg:grid-cols-12 items-stretch"
        >
          {/* Left Side: System Flow Diagram */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-border/80 bg-card/40 backdrop-blur-md p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  System Flow Architecture
                </span>
                <a 
                  href={activeFlow.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
                >
                  GitHub Source ↗
                </a>
              </div>
              <h3 className="text-2xl font-black mb-1 text-foreground">{activeFlow.title}</h3>
              <p className="text-xs text-muted-foreground font-mono mb-6">{activeFlow.subtitle}</p>

              {/* Flow Steps */}
              <div className="space-y-4 relative">
                {/* Connecting Vertical Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/40 via-purple-500/40 to-transparent z-0 hidden sm:block" />

                {activeFlow.steps.map((step, idx) => {
                  const StepIcon = step.icon
                  return (
                    <div key={idx} className="flex items-start gap-4 relative z-10 group">
                      <div className={`p-3 rounded-2xl border ${step.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <div className="pt-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-muted-foreground">Step {step.step}</span>
                          <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Exact Code Snippet Showcase */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl border border-border/80 bg-slate-950 p-6 md:p-8 text-slate-100 shadow-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-300 ml-2">{activeFlow.fileName}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-900 border border-slate-800 transition-colors"
              >
                {copiedCode ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Code2 className="h-3.5 w-3.5" />}
                <span>{copiedCode ? "Copied" : "Copy Code"}</span>
              </button>
            </div>

            <div className="flex-1 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed py-2 select-all max-h-[420px] overflow-y-auto">
              <pre>
                <code>{activeFlow.codeSnippet}</code>
              </pre>
            </div>

            <div className="pt-4 mt-auto border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-purple-400" />
                Verified GitHub Implementation
              </span>
              <span>CODEWITHRISHU2005</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
