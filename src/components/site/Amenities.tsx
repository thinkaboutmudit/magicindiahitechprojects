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
    <section className="bg-background py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Living</span>
            <h2 className="display-xl mt-6 text-foreground">
              Built around <em className="font-serif italic text-muted-foreground/80">comfort.</em>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              Every Magic India address is designed with the small things that make a home feel like one.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {items.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex items-center gap-3 border-b border-border pb-4"
                >
                  <it.Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">{it.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
