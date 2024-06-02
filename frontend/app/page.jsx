import UserBoard from "@/components/User Body/userBoard";
import { taskData } from "@/components/User Body/sampleData";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/client");
}
