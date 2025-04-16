import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex w-9/12 items-center justify-start md:justify-around gap-4 py-10 flex-wrap mt-6">
        <Image
          src="/vercel.svg"
          alt="Twitter Clone Logo"
          width={100}
          height={100}
          className="w-32 h-32"
          priority
        />
        <form action="" className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold leading-snug tracking-wide">
            Happening
            <br />
            now
          </h1>
          <h2 className="text-3xl font-bold">Join today.</h2>
          <input
            type="email"
            placeholder="Email"
            className="py-2 px-4 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 rounded-md"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Sign in
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-gray-500 text-white rounded-md"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
