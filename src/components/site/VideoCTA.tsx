import { Link } from "@tanstack/react-router";

export function VideoCTA() {
  return (
    <section id="video" className="bg-background py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-end gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="eyebrow">Signature</span>
            <h2 className="display-xl mt-6 text-foreground">
              The Magic Meadows, <em className="font-serif italic text-muted-foreground/80">Dehradun.</em>
            </h2>
          </div>
          <p className="text-muted-foreground md:pb-3">
            Picturesque meadows with curated plots and ready cottages — your private slice of the Doon valley with serene surroundings and scenic beauty.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl bg-card">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/_sI_Ps7JSEk"
              title="The Magic Meadows Dehradun"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/contact" className="btn-dark">Book a Site Visit <span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}
