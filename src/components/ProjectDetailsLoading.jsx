function ProjectDetailsLoading() {
  return (
    <section className="min-h-screen bg-section-light dark:bg-section-dark">
      <div className="space-y-4 p-4 animate-pulse">
        <div className="h-16 rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

        <div className="h-[400px] rounded-2xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

        <div className="grid grid-cols-2 gap-4">
          <div className="h-28 rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-28 rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>

        <div className="h-40 rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

        <div className="h-56 rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      </div>
    </section>
  );
}

export default ProjectDetailsLoading;
