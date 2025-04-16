export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10 flex items-center justify-center w-full">{children}</div>
  );
}
