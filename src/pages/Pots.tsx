import Button from "@/components/button/button";
import PotCard from "@/components/ui/pot-card/pot-card";
import SectionTitle from "@/components/ui/section-title/section-title";
import { POTS } from "@/helpers/data";

export default function PotsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <div className="flex items-center justify-between">
        <SectionTitle>Pots</SectionTitle>
        <Button>
          + Add New <span className="hidden md:inline-block">Pot</span>
          <span className="md:hidden inline-block">Bucket</span>
        </Button>
      </div>
      <div className="grid gap-6 xl:cols-2">
        {POTS.map((pot) => (
          <PotCard
            key={pot.id}
            name={pot.name}
            percentage={((Number(pot.saved) / Number(pot.goal)) * 100).toFixed(
              1,
            )}
            saved={pot.saved}
            color={pot.color}
            target={pot.goal}
          />
        ))}
      </div>
    </div>
  );
}
