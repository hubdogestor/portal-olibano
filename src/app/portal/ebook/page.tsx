import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { getServerComponentClient } from "@/lib/supabase/server";
import EbookExperience from "./EbookExperience";

export const metadata: Metadata = {
  title: "E-book Interativo | Portal Olíbano",
};

export default async function EbookPage() {
  const supabase = await getServerComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    redirect("/login?redirectTo=/portal/ebook");
  }

  return <EbookExperience />;
}
