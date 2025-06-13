import { redirect } from "next/navigation";

import RegisterSection from "./RegisterSection";

import { getProfile } from "../getProfile";

export default async function page() {
  
  const data = await getProfile()
  if (data.userData){
    redirect('/')
  }
  return (
    <RegisterSection/>
  );
}
