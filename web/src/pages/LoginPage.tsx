import { UserAuthForm } from "@/components/auth/AuthForm";
import { ThemeProvider } from "@/context/theme-provider";
import "@/utils/i18n";
import { LanguageProvider } from "@/context/language-provider";

function LoginPage() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="frigate-ui-theme">
      <LanguageProvider>
        <div className="min-h-screen overflow-hidden bg-[#05070a] text-white">
          <main className="grid min-h-screen lg:grid-cols-[1.35fr_0.65fr]">

            {/* NEON PRODUCT SIDE */}
            <section className="relative hidden overflow-hidden lg:flex">

              {/* Background glow */}
              <div className="absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[140px]" />
              <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]" />

              {/* Surveillance grid */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,.35) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* Scan line */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-400/30 shadow-[0_0_25px_5px_rgba(34,211,238,.25)]" />

              <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-20">

                {/* Logo */}
                <div>
                  <div className="inline-flex rounded-3xl border border-cyan-400/30 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,.18)] backdrop-blur-xl">
                    <img
                      src="/images/branding/noah/noah-logo.png"
                      alt="NOAH Guardra"
                      className="h-32 w-32 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,.9)] xl:h-40 xl:w-40"
                    />
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_5px_rgba(34,211,238,.8)]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                      System Online
                    </span>
                  </div>
                </div>

                {/* Hero */}
                <div className="max-w-3xl">

                  <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
                    Intelligent Video Surveillance
                  </p>

                  <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.04em] xl:text-8xl">
                    WATCH
                    <br />
                    <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,.45)]">
                      SMARTER.
                    </span>
                  </h1>

                  <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
                    AI-powered camera monitoring, detection, recording and
                    automation — built into one powerful surveillance system.
                  </p>

                  {/* Status cards */}
                  <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
                    <div className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                      <div className="text-2xl font-black text-cyan-400">
                        24/7
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                        Monitoring
                      </div>
                    </div>

                    <div className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                      <div className="text-2xl font-black text-cyan-400">
                        AI
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                        Detection
                      </div>
                    </div>

                    <div className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                      <div className="text-2xl font-black text-cyan-400">
                        LOCAL
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                        Processing
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  NOAH Guardra · SonicResume Group
                </div>
              </div>
            </section>

            {/* LOGIN SIDE */}
            <section className="relative flex min-h-screen items-center justify-center border-l border-white/10 bg-[#080b10] px-6 py-12">

              {/* Mobile glow */}
              <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

              <div className="relative z-10 w-full max-w-md">

                {/* Mobile logo */}
                <div className="mb-10 flex justify-center lg:hidden">
                  <img
                    src="/images/branding/noah/noah-logo.png"
                    alt="NOAH Guardra"
                    className="h-28 w-28 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,.8)]"
                  />
                </div>

                <div className="mb-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                    Secure Access
                  </p>

                  <h2 className="text-4xl font-black tracking-tight">
                    Welcome back.
                  </h2>

                  <p className="mt-3 text-zinc-500">
                    Sign in to your NOAH Guardra system.
                  </p>
                </div>

                {/* Login card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">

                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,.8)]" />

                  <div className="mb-7">
                    <h3 className="text-lg font-bold">
                      Administrator Sign In
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      Enter your credentials to continue.
                    </p>
                  </div>

                  <UserAuthForm />
                </div>

                <div className="mt-8 text-center text-xs text-zinc-700">
                  Protected by NOAH Guardra
                </div>
              </div>
            </section>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default LoginPage;