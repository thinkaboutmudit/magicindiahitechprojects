import { Car, Dumbbell, Trees, Waves, PawPrint, ToyBrick, Zap, Plug, Baby, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { name: "Car Parking", Icon: Car },
  { name: "Fitness Center", Icon: Dumbbell },
  { name: "Rooftop Garden", Icon: Trees },
  { name: "Indoor Pool", Icon: Waves },
  { name: "Pet Friendly", Icon: PawPrint },
  { name: "Playground", Icon: ToyBrick },
  { name: "Power Backup", Icon: Zap },
  { name: "Swimming Pool", Icon: Sparkles },
  { name: "EV Charging", Icon: Plug },
  { name: "Kids' Play Area", Icon: Baby },
];

export function Amenities() {
  return (
    <section className="bg-card py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Facilities</span>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Basic Amenities in Our Properties</h2>
          <p className="mt-4 text-muted-foreground">Every Magic India address is built around comfort, convenience and connection.</p>
        </div>

        <div className="mt-12 -mx-4 overflow-x-auto px-4">
          <div className="flex min-w-max gap-4 pb-4">
            {items.map((it, i) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex w-36 flex-col items-center gap-3 rounded-2xl border border-border bg-background p-5 text-center card-hover"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/30 text-primary">
                  <it.Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-foreground">{it.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
