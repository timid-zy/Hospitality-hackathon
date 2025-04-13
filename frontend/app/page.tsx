'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();
  router.push('/guest')

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      {/* <div className="flex flex-col items-center space-y-4">
        <Link href="/guest">
          <Button className="w-64 bg-blue-800 text-white">
            Sign in as Guest
          </Button>
        </Link>
        <Link href="/staff">
          <Button className="w-64 bg-green-800 text-white">
            Sign in as Staff
          </Button>
        </Link>
        <Link href="/managers/dashboard">
          <Button className="w-64 bg-red-800 text-white">
            Sign in as Manager
          </Button>
        </Link>
      </div> */}
    </div>
  );
}
