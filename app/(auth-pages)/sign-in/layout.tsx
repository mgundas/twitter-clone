export const metadata = {
  title: "Sign in | Twitter Clone",
  description: "Sign in | Twitter Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <div className="">
    { children }
  </div>;
}
