export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-cream">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal mb-4">
          Bonsai Management
        </h1>
        <p className="text-lg text-charcoal-light mb-12">
          Growing steadily, one home at a time.
        </p>
        <div className="inline-block rounded-full bg-forest/10 px-4 py-1.5 text-sm font-medium text-forest mb-8">
          Coming Soon
        </div>
        <p className="text-charcoal-light max-w-md">
          Professional property management for single-family rental homes in
          Columbus, Georgia. Our full site is under development.
        </p>
      </main>
    </div>
  );
}
