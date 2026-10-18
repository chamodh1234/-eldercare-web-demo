import type { Metadata } from "next";
import AddTaskScreen from "@/screens/AddTask";

export const metadata: Metadata = { title: "Add a task" };

export default function Page() {
  return <AddTaskScreen />;
}
