import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Your One-Stop Tech Shop for the Latest Devices
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Explore a wide range of premium tech products designed to enhance your
          digital life. Shop with confidence knowing you are getting the best in performance, innovation,
          and value
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
