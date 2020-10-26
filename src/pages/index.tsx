import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';



function Home() {
   return (
      <Fragment>
         <Head>
            <title>Next.js Developer tester app</title>
         </Head>
         <h1>Hello World</h1>
         <div className="app">WOW</div>
         <Link href="/create"><a>Create new pallette</a></Link>
      </Fragment>
   );
}


export default Home;
