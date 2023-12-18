import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-t md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect Celebrate: Your Events, our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,187+ mentors in world-class
              companies with our global community
            </p>
            <Button asChild className="rounded-full button w-full sm:w-fit">
              <Link href="/">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            width={1000}
            height={1000}
            className="max-h-[70vh] 2xl:max-h-[50vh] object-center object-contain"
            alt="hero"
          />
        </div>
      </section>

      <section
        className="wrapper my-8 flex flex-col gap-8  md:gap-12"
        id="events"
      >
        <h2 className="h2-bold">
          Trusted by <br />
          Thousands of events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search categoryfilter
        </div>
      </section>
    </main>
  );
}
