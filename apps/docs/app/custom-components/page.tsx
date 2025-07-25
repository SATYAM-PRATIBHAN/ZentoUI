import { redirect } from "next/navigation";

export default function CustomComponentPage() {
  redirect("/docs");
  return null;
}
