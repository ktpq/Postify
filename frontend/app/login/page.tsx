import { redirect, RedirectType } from "next/navigation";

import LoginSection from "./LoginSection";
import { getProfile } from "../getProfile";

export default async function page() {

  const data = await getProfile()
  if (data.userData){
    redirect('/')
  }

  return (
    <LoginSection/>
  );
}
