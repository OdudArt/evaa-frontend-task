import { Logo } from './components/Logo';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <div className="container max-w-xl">
      <div className="flex flex-col h-dvh w-full items-center gap-10 py-10">
        <Logo />
        <section className="bg-hero text-hero-foreground  text-center rounded-md space-y-4 py-8 px-4 mb-auto">
          <h1 className="font-display text-2xl uppercase">EVAA Test Assignment</h1>
          <p>This template created for quick start with EVAA theme settings</p>
        </section>
        <section className="bg-master p-4 rounded-md">
          Use this and other already styled classes for fast implementing
        </section>
        <footer>
          <ThemeSwitcher />
        </footer>
      </div>
    </div>
  );
}
