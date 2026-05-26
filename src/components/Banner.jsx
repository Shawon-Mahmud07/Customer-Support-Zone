import vector1 from "../assets/vector1.png";

const gradients = {
  total: "bg-[linear-gradient(120deg,#0F2137_0%,#2d4258_100%)]",
  progress: "bg-[linear-gradient(120deg,#632EE3_0%,#9F62F2_100%)]",
  resolved: "bg-[linear-gradient(120deg,#53C768_0%,#008B8A_100%)]",
};

function BannerCard({ title, count, gradient }) {
  return (
    <article
      className={`relative isolate h-52 overflow-hidden rounded-xl text-white shadow-[0_10px_30px_rgba(17,24,39,0.12)] sm:h-56 lg:h-64 ${gradient}`}
    >
      <img
        src={vector1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 max-w-none"
      />
      <img
        src={vector1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 max-w-none scale-x-[-1]"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-[clamp(1.15rem,1.1vw+0.72rem,2rem)] font-medium tracking-[0.01em]">
          {title}
        </h2>
        <p className="mt-3 text-[clamp(2.9rem,2.8vw+1.6rem,4.4rem)] leading-none font-medium">
          {count}
        </p>
      </div>
    </article>
  );
}

function Banner({ totalCount, inProgressCount, resolvedCount }) {
  const cards = [
    {
      title: "Total Tickets",
      count: totalCount,
      gradient: gradients.total,
    },
    {
      title: "In-Progress",
      count: inProgressCount,
      gradient: gradients.progress,
    },
    {
      title: "Resolved",
      count: resolvedCount,
      gradient: gradients.resolved,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-370 px-5 pb-6 pt-8 sm:px-8 sm:pt-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {cards.map((card) => (
          <BannerCard
            key={card.title}
            title={card.title}
            count={card.count}
            gradient={card.gradient}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;
