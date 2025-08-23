import BaseLayout from "@/layout/BaseLayout";

function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}

export default Layout;
