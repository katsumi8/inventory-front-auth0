import AuthSection from "@/features/Auth/components/AuthSection";


export default function RootLayoutForAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthSection>{children}</AuthSection>;
}
