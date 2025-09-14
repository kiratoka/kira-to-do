import CreateButton from "@/components/CreateButton";
import HomepageCard from "@/components/HomepageCard";
import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/prisma";


export default async function Home() {
  const tasks = await prisma.todo.findMany()


  return (
    <main>
      <Navbar />
      <section className="max-w-4xl mx-auto mt-20 px-12 mb-32">
        <CreateButton />
        {tasks.map((task) => (
          <HomepageCard key={task.id} task={task} />
        ))}
      </section>
    </main>
  );
}
