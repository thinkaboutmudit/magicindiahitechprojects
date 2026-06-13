export function HeroVideo() {
  const videoId = "oAzW8DR_vCc";
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <iframe
        className="absolute left-1/2 top-1/2 h-[100vh] w-[177.78vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&playlist=${videoId}`}
        title="Magic India Showcase"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </section>
  );
}
