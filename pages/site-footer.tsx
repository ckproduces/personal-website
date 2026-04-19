import { M } from "@/components/Md";

export const path = "/__site-footer";
export const title = "Site footer";

export default function SiteFooterPage() {
  return (
    <M.Flex
      alignItems="center"
      justifyContent="space-between"
      gap={0}
      flexDirection="column"
    >
      <M.P>built with 🌪️🧠</M.P>
      <M.P>© 2026 Çağrı Okan. All rights reserved.</M.P>
    </M.Flex>
  );
}
