import { redirect } from "next/navigation";

export default function DocsPage() {
  redirect("/docs/components/accordion");
  return null;
}
