import Image from "next/image";
import SignIn from "./sign_in/page";

export default function Home() {
  return (
    <main className="h-screen w-screen">
       <SignIn/>
    </main>
  );
}
