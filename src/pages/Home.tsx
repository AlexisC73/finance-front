import SectionTitle from "@/components/ui/section-title/section-title";
import Summary from "@/components/ui/summary/summary";

export function HomePage() {
  return (
    <div className="flex flex-col gap-y-8">
      <SectionTitle>Overview</SectionTitle>
      <Summary />
    </div>
  );
}
