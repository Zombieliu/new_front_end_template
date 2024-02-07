import { Button } from "@repo/ui/components/ui/button";
import Image from 'next/image'
import Link from "next/link";

// import * as NavbarLogo from "../public/Noggles.svg"

export default function Page() {

  const balance = 0
  const address = 'https://suiexplorer.com/address/0x2cf0029ed0845f27da4af2f3bb252437c4e33378332b873b53b88dfc1dba4fb1?network=testnet'

  return (
    <main className='flex flex-col min-h-screen min-w-full'>
        <div className='flex items-center justify-center bg-zinc-300 '>
          <Link href={address}>
            <Image
              src='/noggles.svg'
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </Link>
          <Link href={address}>
              <Button  variant="outline" className='font-bold'>
                Treasury Ξ {balance}
              </Button>
          </Link>
        </div>
    </main>
  );
}
