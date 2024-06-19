import { getExperience } from "@/app/actions";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns } from "./_components/columns";

export default async function Page() {
  const data = await getExperience();

  return (
    <section className="py-12 space-y-4">
      <h2 className="text-5xl">Experience</h2>

      <DataGrid columns={columns} data={data} />
    </section>
  );
}
