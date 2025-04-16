import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex w-9/12 items-center justify-start md:justify-around gap-4 py-10 flex-wrap mt-6">
        <Image
          src="/favicon.ico"
          alt="Twitter Clone Logo"
          width={100}
          height={100}
          className="w-32 h-32"
          priority
        />
        <div className="grid gap-10">
          <h1 className="text-6xl font-bold leading-snug tracking-wide">
            Happening
            <br />
            now
          </h1>
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold">Join today.</h2>
            <Link
              href="/sign-up"
              className=" bg-blue-600 text-center p-2 rounded-full"
            >
              Sign up
            </Link>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg">Already have an account?</h3>
            <Link
              href="/sign-in"
              className=" text-blue-400 border-[1px] border-gray-500 text-center p-2 rounded-full"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
