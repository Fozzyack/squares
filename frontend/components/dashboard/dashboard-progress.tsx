"use client";

import { getTodayKey } from "@/utils/date";
import { useEffect, useState } from "react";

type HabitWithActivity = {
    goal: number;
    dailyCounts: {
        date: string;
        count: number;
    }[];
};

export function DashboardProgress({
    habits,
}: {
    habits: HabitWithActivity[];
}) {
    const [todayKey, setTodayKey] = useState<string | null>(null);

    useEffect(() => {
        setTodayKey(getTodayKey());
    }, []);

    const countForToday = (habit: HabitWithActivity) =>
        todayKey
            ? (habit.dailyCounts.find(
                  (entry) => entry.date.slice(0, 10) === todayKey,
              )?.count ?? 0)
            : 0;
    const completedToday = habits.filter(
        (habit) => countForToday(habit) >= habit.goal,
    ).length;
    const completion = habits.length
        ? Math.round(
              (habits.reduce((total, habit) => {
                  const count = countForToday(habit);
                  return total + Math.min(1, count / Math.max(habit.goal, 1));
              }, 0) /
                  habits.length) *
                  100,
          )
        : 0;

    return (
        <div className="rounded-lg border border-card-border bg-background p-5">
            <div className="flex items-end justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Today&apos;s progress
                </p>
                <p className="text-4xl tracking-[-0.04em] text-foreground">
                    {completion}%
                </p>
            </div>
            <div className="mt-4 h-2 rounded-sm bg-accent-0">
                <div
                    className="h-2 rounded-sm bg-primary transition-all"
                    style={{ width: `${completion}%` }}
                />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                    {
                        label: "Goals met",
                        value: `${completedToday}/${habits.length}`,
                    },
                    {
                        label: "Active habits",
                        value: habits.length,
                    },
                ].map((stat) => (
                    <article
                        key={stat.label}
                        data-overview-card
                        className="rounded-md border border-card-border bg-card p-3"
                    >
                        <p className="text-xs text-muted">{stat.label}</p>
                        <p className="mt-1 text-xl text-foreground">
                            {stat.value}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}
