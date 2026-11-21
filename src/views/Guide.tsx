import { useState } from "react";
import data from "@/data/data.json";
import IconKey from "@public/icons/password.png";

type Tip = {
  number: string;
  label: string;
  title: string;
  description: string;
  accent: string;
};

type EncryptionStep = {
  number: string;
  title: string;
  description: string;
};

function generatePassword(length = 20): string {
  const alphabet =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?-_";

  if (!globalThis.crypto?.getRandomValues) {
    throw new Error(
      "Este navegador no admite generación criptográfica segura.",
    );
  }

  // El rechazo de bytes fuera del rango evita el sesgo de usar módulo directo.
  const maxValidByte = Math.floor(256 / alphabet.length) * alphabet.length;
  let password = "";

  while (password.length < length) {
    const bytes = new Uint8Array((length - password.length) * 2);
    globalThis.crypto.getRandomValues(bytes);

    for (const byte of bytes) {
      if (byte < maxValidByte) {
        password += alphabet[byte % alphabet.length];
      }

      if (password.length === length) break;
    }
  }

  return password;
}

export default function Guide() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[180px] top-[160px] -z-10 size-[420px] rounded-full bg-pink/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[180px] top-[1050px] -z-10 size-[420px] rounded-full bg-pink/10 blur-[100px]"
        />

        <div className="">
          <header className="sticky top-[12px] z-20 mb-[24px]">
            <nav
              aria-label="Navegación secundaria"
              className="flex min-h-[64px] items-center justify-between gap-[16px] rounded-[var(--radius-sm)] px-[16px] py-[10px] backdrop-blur-xl"
            >
              <div className="hidden items-center gap-[28px] font-primary-600 text-[13px] text-white/70 desktop:flex uppercase">
                <a className="transition-colors hover:text-pink" href="#inicio">
                  La guía
                </a>
                <a
                  className="transition-colors hover:text-pink"
                  href="#consejos"
                >
                  Buenos hábitos
                </a>
                <a
                  className="transition-colors hover:text-pink"
                  href="#cifrado"
                >
                  Criptografía
                </a>
              </div>

              <a
                href="/"
                className="rounded-[13px] bg-pink px-[16px] py-[12px] font-primary-900 text-[12px] text-purple-dark transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(200,148,227,0.25)]"
              >
                Generar clave
              </a>
            </nav>
          </header>

          <section
            id="inicio"
            className="grid gap-2 rounded-xl border border-purple-dark bg-purple-night/10 p-2 tablet:p-4 desktop:grid-cols-[1.05fr_0.95fr] desktop:items-center desktop:gap-4 desktop:p-4"
          >
            <div className="neon-fade-up">
              <p className="mb-2 font-secondary-600 text-txt-description4 tracking-[0.12em] text-pink">
                01 / GUÍA PRÁCTICA · 5 MIN
              </p>
              <h1 className="max-w-68 font-primary-900 text-txt-title1 uppercase">
                Contraseñas fuertes,
                <br />
                sin complicarte.
              </h1>
              <p className="mt-2 max-w-69 font-secondary-600 text-txt-description2 text-white/70">
                Aprende a crear, guardar y proteger claves que resistan ataques
                comunes. Un recorrido breve, práctico y sin mitos.
              </p>

              <div className="mt-[28px] flex flex-wrap gap-[12px]">
                <a
                  href="#consejos"
                  className="rounded-[16px] bg-pink px-2 py-1.5 font-primary-900 text-[14px] text-purple-dark transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(200,148,227,0.22)]"
                >
                  Explorar consejos
                </a>
                <a
                  href="#cifrado"
                  className="rounded-[16px] border border-gray bg-purple-dark px-[20px] py-[16px] font-primary-600 text-[14px] text-pink transition-colors hover:border-pink"
                >
                  Ver cifrado ↓
                </a>
              </div>

              <p className="mt-[24px] font-secondary-300 text-[10px] tracking-[0.08em] text-pink">
                SIN REUTILIZAR · GESTOR DE CONTRASEÑAS · MFA
              </p>
            </div>

            <div
              id="generador"
              className="neon-fade-up [animation-delay:120ms]"
            >
              <div className="relative min-h-35 overflow-hidden rounded-lg border border-pink/10 bg-purple-dark/40 p-[24px] tablet:min-h-[398px] max-desktop:hidden">
                <span className="font-secondary-300 text-[10px] tracking-[0.12em] text-pink">
                  TU BÓVEDA, BAJO CONTROL
                </span>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 grid place-items-center z-10"
                >
                  <div className="orbit-ring orbit-ring--outer" />
                  <div className="orbit-ring orbit-ring--inner" />

                  <div className="absolute grid size-10 blur-2xl place-items-center rounded-full border-2 border-pink bg-purple-night shadow-[0_0_50px_rgba(200,148,227,0.12)]"></div>
                  <img
                    src={IconKey}
                    alt="Key"
                    className="size-4 text-purple-dark z-10"
                  />
                </div>

                <div className="max-lg:hidden absolute right-2 top-[84px] rounded-sm bg-pink px-[12px] py-[8px] font-secondary-600 text-txt-title3 text-purple-dark z-15">
                  ÚNICA POR CUENTA
                </div>

                <div className="max-lg:hidden absolute left-[28px] desktop:top-25 xl:top-20 rounded-sm border border-pink bg-purple-dark px-[12px] py-[8px] font-secondary-600 text-txt-title3 text-white z-5">
                  CIFRADO LOCAL
                </div>
              </div>
            </div>
          </section>

          <section id="consejos" className="scroll-mt-11 pt-[64px]">
            <div className="mb-[24px] flex flex-col gap-1">
              <p className="font-secondary-600 text-txt-description4 tracking-widest text-pink">
                02 / HÁBITOS QUE SÍ PROTEGEN
              </p>
              <h2 className="mt-[10px] font-primary-900 text-[24px] tablet:text-[28px]">
                Cuatro reglas para empezar bien
              </h2>
            </div>

            <div className="grid gap-[16px] tablet:grid-cols-2 md:grid-cols-4">
              {data.tips.map((tip: Tip, index: number) => (
                <article
                  key={tip.number}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className="neon-fade-up group rounded-md border border-pink/40 bg-purple-night/40 p-2 transition duration-200 hover:-translate-y-0.5 hover:border-pink/70 hover:shadow-[0_16px_34px_rgba(200,148,227,0.2)]"
                >
                  <div className="flex items-center gap-[12px]">
                    <span
                      className={`grid size-[32px] place-items-center rounded-[9px] font-secondary-600 text-[11px] text-pink ${tip.accent}`}
                    >
                      {tip.number}
                    </span>
                    <span className="font-secondary-300 text-txt-description3 tracking-[0.12em] text-pink">
                      {tip.label}
                    </span>
                  </div>

                  <h3 className="mt-[28px] font-primary-900 text-txt-description1 text-white">
                    {tip.title}
                  </h3>
                  <p className="mt-[12px] min-h-[78px] font-primary-300 text-txt-description3 text-white/70">
                    {tip.description}
                  </p>

                  <div className="mt-[18px] flex items-center justify-between border-t border-white/10 pt-1">
                    <span className="font-secondary-300 text-txt-description3 text-white">
                      CONSEJO {tip.number}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="mt-[28px] grid gap-[16px] rounded-[22px] border border-purple-dark bg-purple-night/10 p-2 tablet:grid-cols-2 tablet:items-center tablet:gap-3 tablet:p-2.5">
            <div>
              <p className="font-secondary-600 text-txt-description4 tracking-[0.1em] text-pink">
                MITO / REALIDAD
              </p>
              <p className="mt-[12px] font-primary-600 text-txt-description2 text-purple">
                “Cambiar símbolos cada mes siempre es más seguro.”
              </p>
            </div>
            <div>
              <p className="font-primary-600 text-txt-description2 text-white">
                Mejor: usa una contraseña larga y única; cámbiala si sospechas
                que se expuso.
              </p>
              <p className="mt-[10px] font-secondary-300 text-txt-description2 text-pink">
                Prioriza longitud, unicidad y MFA sobre reglas arbitrarias.
              </p>
            </div>
          </aside>

          <section
            id="cifrado"
            className="scroll-mt-[110px] mt-[32px] grid gap-[24px] rounded-[24px] border border-purple-dark bg-purple-night/10 p-[20px] tablet:p-[32px] desktop:grid-cols-[0.9fr_1.1fr] desktop:gap-[40px]"
          >
            <div className="flex flex-col gap-1.5">
              <p className="font-secondary-600 text-txt-description4 tracking-[0.2em] text-pink">
                03 / CRIPTOGRAFÍA, EN CLARO
              </p>
              <h2 className="font-primary-900 text-txt-title3">
                ¿Qué protege una bóveda cifrada?
              </h2>
              <p className="font-secondary-600 text-txt-description3 text-white/70">
                Una contraseña robusta protege el acceso; el cifrado protege los
                datos almacenados. Son capas distintas que trabajan juntas.
              </p>
              <p className="font-primary-300 text-txt-description3 text-pink">
                Una implementación puede derivar una clave con una KDF como
                Argon2id y cifrar la bóveda antes de sincronizarla.
              </p>
              <div className="rounded-[12px] bg-purple-dark px-[16px] py-[14px]">
                <p className="font-primary-600 text-[12px] text-pink">
                  El cifrado no evita el phishing, el malware ni el uso de
                  contraseñas débiles.
                </p>
              </div>
            </div>

            <div className="rounded-[20px] border border-gray/70 bg-purple-night/40 p-[18px] tablet:p-[24px]">
              <p className="mb-[18px] font-secondary-300 text-[10px] tracking-widest text-pink">
                FLUJO DE UNA BÓVEDA
              </p>
              <div className="grid gap-[12px] tablet:grid-cols-3">
                {(data.encryptionSteps as EncryptionStep[]).map(
                  (step: EncryptionStep, index: number) => (
                    <div key={step.number} className="relative">
                      <article className="h-full rounded-[16px] border border-gray/70 bg-black/40 p-[16px]">
                        <span
                          className={`grid size-[28px] place-items-center rounded-[0.8rem] font-secondary-600 text-[10px] text-purple-dark bg-white`}
                        >
                          {step.number}
                        </span>
                        <h3 className="mt-[18px] font-primary-900 text-txt-description2">
                          {step.title}
                        </h3>
                        <p className="mt-[10px] font-primary-300 text-txt-description3 text-white/70">
                          {step.description}
                        </p>
                      </article>
                      {index < data.encryptionSteps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute -right-1 top-1/2 z-10 hidden -translate-y-1/2 text-white tablet:block"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ),
                )}
              </div>
              <p className="mt-[14px] rounded-[9px] bg-purple-night/40 px-[12px] py-[9px] font-secondary-300 text-txt-description4 text-white">
                Los detalles varían según el gestor y su modelo de seguridad.
              </p>
            </div>
          </section>

          <footer className="mt-[32px] rounded-[20px] border border-gray/70 bg-purple-night/40 p-[20px] tablet:flex tablet:items-center tablet:justify-between tablet:gap-[24px] tablet:px-[28px]">
            <div>
              <h2 className="font-primary-900 text-txt-description2">
                Tu checklist de seguridad
              </h2>
              <p className="mt-[8px] font-primary-600 text-txt-description3 text-white">
                Única · Larga · Guardada en un gestor · MFA activado
              </p>
            </div>
            <a
              href="/"
              className="mt-[18px] inline-flex rounded-[15px] bg-pink px-2 py-1.5 font-primary-900 text-txt-description2 text-purple-dark transition duration-200 hover:-translate-y-[0.2rem] hover:shadow-[0_8px_24px_rgba(200,148,227,0.2)] tablet:mt-0"
            >
              Validar una clave
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
