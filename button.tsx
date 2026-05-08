@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 40 33% 94%;
    --foreground: 20 33% 12%;
    --card: 0 0% 100%;
    --card-foreground: 20 33% 12%;
    --popover: 0 0% 100%;
    --popover-foreground: 20 33% 12%;
    --primary: 350 73% 44%;
    --primary-foreground: 0 0% 100%;
    --secondary: 140 55% 24%;
    --secondary-foreground: 0 0% 100%;
    --muted: 40 20% 90%;
    --muted-foreground: 20 10% 40%;
    --accent: 45 65% 52%;
    --accent-foreground: 20 33% 12%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 20 20% 80%;
    --input: 20 20% 80%;
    --ring: 45 65% 52%;
    --radius: 0.5rem;
  }

  body {
    @apply bg-maroc-beige text-maroc-brown;
  }
}
