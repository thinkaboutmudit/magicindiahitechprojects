export function HeroVideo() {
  const videoId = "oAzW8DR_vCc";
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Showcase</span>
            <h2 className="display-xl mt-5 text-foreground">
              A glimpse into <em className="font-serif italic text-muted-foreground/80">Magic India.</em>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Crafted spaces, curated living — explore the world we are building across India.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&playlist=${videoId}`}
              title="Magic India Showcase"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
