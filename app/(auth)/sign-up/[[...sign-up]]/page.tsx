import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp
  appearance={{
    variables: {
      colorPrimary: "#df0863"
    }
  }}
/>;
}
