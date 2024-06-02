
import UserBoard from "@/components/User Body/userBoard";
import { taskData } from "@/components/User Body/sampleData";

export default function Home() {
  return <UserBoard taskData={taskData} />;
}
