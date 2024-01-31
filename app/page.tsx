import { DataTableDemo } from "@/components/TableComponent";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <DataTableDemo />
     
    </main>
  );
}
