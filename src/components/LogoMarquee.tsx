type LogoItem = { name: string; src: string };

// Add more logos if you want — keep the arrays balanced for smooth looping
const row1: LogoItem[] = [
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "Oracle", src: "/logos/oracle.svg" },
  { name: "MongoDB", src: "/logos/mongodb.svg" },
  { name: "Postgres", src: "/logos/postgres.svg" },
  { name: "MySQL", src: "/logos/mysql.svg" },
  { name: "Nginx", src: "/logos/nginx.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Grafana", src: "/logos/grafana.svg" },
  { name: "Kubernetes", src: "/logos/kubernetes.svg" },
];

const row2: LogoItem[] = [
  { name: "React", src: "/logos/react.svg" },
  { name: "Vite", src: "/logos/vite.svg" },
  { name: "Node.js", src: "/logos/nodejs.svg" },
  { name: "Python", src: "/logos/python.svg" },
  { name: "Pandas", src: "/logos/pandas.svg" },
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "Linux", src: "/logos/linux.svg" },
  { name: "Kali", src: "/logos/kali.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "WordPress", src: "/logos/wordpress.svg" },
];

const track1 = [...row1, ...row1];
const track2 = [...row2, ...row2];

function LogoCell({ it }: { it: LogoItem }) {
  return (
    <figure className="logo-cell flex flex-col items-center gap-2 select-none" title={it.name} aria-label={it.name}>
      <div className="logo-wrap flex items-center justify-center rounded-md p-1">
        <img
          src={it.src}
          alt={`${it.name} logo`}
          loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          className="h-10 object-contain"
        />
      </div>
      <figcaption className="text-[11px] text-slate-300/80 font-medium">{it.name}</figcaption>
    </figure>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 space-y-6">

        {/* Fixed marquee bar (looks like a tape slot) */}
        <div className="marquee-bar tape px-4 py-4 relative">
          {/* left and right slot shadows are done via CSS ::before and ::after on .tape */}

          {/* scrolling rail (row 1) */}
          <div className="marquee-rail" aria-hidden>
            {track1.map((it, i) => <LogoCell key={`r1-${i}-${it.name}`} it={it} />)}
          </div>
        </div>

        {/* counter-scrolling second rail */}
        <div className="marquee-bar tape px-4 py-4 relative">
          <div className="marquee-rail reverse" aria-hidden>
            {track2.map((it, i) => <LogoCell key={`r2-${i}-${it.name}`} it={it} />)}
          </div>
        </div>

        {/* no-js fallback */}
        <noscript>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {row1.concat(row2).map((it) => (
              <div key={it.name} className="flex flex-col items-center text-center">
                <img src={it.src} alt={`${it.name} logo`} style={{ height: 40 }} />
                <span style={{ marginTop: 6, fontSize: 12, color: "#cfeefe", fontWeight: 600 }}>{it.name}</span>
              </div>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}
