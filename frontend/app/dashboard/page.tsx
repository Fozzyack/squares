import {
    getHabitsWithActivity,
    HabitList,
    type HabitWithActivity,
} from "@/components/dashboard/habit-list";
import { DashboardProgress } from "@/components/dashboard/dashboard-progress";
import { DashboardMotion } from "@/components/dashboard/dashboard-motion";
import { NewHabitForm } from "@/components/dashboard/new-habit-form";

const DashboardPage = async () => {
    let habits: HabitWithActivity[] = [];
    let fetchError = false;

    try {
        habits = await getHabitsWithActivity();
    } catch {
        fetchError = true;
    }

    return (
        <DashboardMotion>
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-12 pt-6 sm:px-6 sm:pt-8 lg:px-8">
                <section
                    data-dashboard-section
                    className="rounded-lg border border-card-border bg-card p-5 sm:p-7"
                >
                    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                                Today
                            </p>
                            <h1 className="mt-3 text-4xl md:text-6xl">
                                Make today count.
                            </h1>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                                Keep the next small win visible. Log progress as
                                you go and let consistency build from there.
                            </p>
                            <div className="mt-6">
                                <NewHabitForm />
                            </div>
                        </div>

                        <DashboardProgress habits={habits} />
                    </div>
                </section>

                <HabitList habits={habits} fetchError={fetchError} />
            </main>
        </DashboardMotion>
    );
};

export default DashboardPage;
