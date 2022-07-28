/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import NaverMap from "../components/NaverMap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          strategy="beforeInterative"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=83bfuniegk&amp;submodules=geocoder"
        ></script>
      </Head>
      <main>
        <NaverMap />
      </main>
    </div>
  );
}
