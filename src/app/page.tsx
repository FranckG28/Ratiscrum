import Button from "@/components/button";
import Price from "@/components/price";
<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import RatiscrumLogo from "/public/rts-logo.png";
=======
import { ExternalLink } from 'lucide-react';
import { Medal } from 'lucide-react';

>>>>>>> db55a2edba36dbfea337e7558e55fed011e45073
export default function Home() {
  return (
    <div className="flex flex-col gap-2 py-5">
      <h1 className="text-white">vidéo ;)</h1>

      <div className="flex flex-col">
        <p className="text-slate-300">14 décembre 2022</p>
        <h1 className="text-4xl text-white font-medium">Nuit de l&apos;info 2022</h1>
        <div className="flex items-center gap-2 py-3">
          <Button style="primary" href="/">
            Visiter
            <ExternalLink size={22} /></Button>
          <Button style="flat" href="/">
            Site officiel
          </Button>
        </div>

      </div>

      <div className="flex rounded-lg flex-col border border-slate-300/40 gap-3 p-5">
        <p className="text-slate-300 flex gap-2 font-medium"><Medal />Résultats</p>
        <div className="grid grid-cols-3 gap-2 gap-y-4">
          <Price
            rank={1}
            title="VEGA CS GROUP 2022"
            description="1500€"
          ></Price>
          <Price
            rank={2}
            title="VEGA CS GROUP 2022"
            description="1500€"
          ></Price>
          <Price
            rank={3}
            title="VEGA CS GROUP 2022"
            description="1500€"
          ></Price>
        </div>

        <section className="flex mt-4 gap-4 py-4">
          <div className="w-2/3 gap-y-4 flex flex-col">
            <div>
              <p className="text-xl font-medium text-white">Notre projet</p>
              <p className="text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dignissimos molestias dolore unde! Vero voluptatem culpa
                eligendi iusto voluptas sint temporibus consequatur alias
                veritatis ipsum, odio praesentium, amet aspernatur deserunt?
              </p>
            </div>

            <div className="flex gap-4">
              <Button style="flat" href="/">
                Ratiscrum.fr
              </Button>
              <Button style="flat" href="/">
                Ratiscrum.fr
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium text-white">
                Technologies utilisés
              </p>
              <div className="flex gap-2">
                <p className="text-slate-400">React, Sequelite, TailwindCSS</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3">
            <Image src={RatiscrumLogo} alt="Ratiscrum Logo" />
          </div>
        </section>
      </div>

    </div>
  );
}
