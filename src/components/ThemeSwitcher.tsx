import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/shadcn-provider';
import { SunIcon, MoonIcon } from 'lucide-react';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
