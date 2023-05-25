import { Preview, Current, Stats, Animals, AboutAnimals, ToKnow, Tickets } from "@/src/pages/main";
import Head from 'next/head'


export default function Home() {

  
  return (
    <div className=" flex flex-col bg-main-gray">
      <Head>
        <title>Белгородский зоопарк</title>
      </Head>
      
      <Preview/>
      <Current/>
      <Stats/>
      <Animals/>
      <AboutAnimals/>
      {/* <Tickets/> */}
      <ToKnow/>
    </div>
  );
}


