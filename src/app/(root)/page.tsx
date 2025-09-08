import Image from "next/image";
import { SignedOut, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton />
      </SignedOut>

      
    </div>  
  );
}
