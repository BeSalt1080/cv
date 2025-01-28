import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Achievement = (typeof RESUME_DATA)["achievements"][number];

interface AchievementItemProps {
  achievement: Achievement;
}

/**
 * Individual achievement  card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function AchievementItem({
  achievement,
}: AchievementItemProps) {
  const { title, position, date, description } = achievement;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            {title}
          </h3>
          <div
            className="text-sm tabular-nums text-gray-500"
            aria-label={`Competition at: ${date}`}
          >
            {date}
          </div>
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {position}
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[10px]">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}

interface AchievementProps {
  achievement: (typeof RESUME_DATA)["achievements"];
}

/**
 * Main achievement section component
 * Renders a list of achievement s in chronological order
 */
export function Achievement({
  achievement,
}: AchievementProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="achievement">
        Achievement
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="achievement"
      >
        {achievement.map((item) => (
          <article key={`${item.title}-${item.date}`} role="article">
            <AchievementItem achievement={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
