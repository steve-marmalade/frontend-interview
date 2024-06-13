import Image from "next/image";
import { users } from "./users";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {users.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </main>
  );
}
