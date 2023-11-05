import Head from "next/head";
import Hero3 from "../../../components/Hero3";
import TeamMembers from "../../../components/TeamMembers";

export default function Team() {
  return (
    <div>
      <Head>
        <title>Nick Petroleum | Team</title>
        <meta
          name="description"
          content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TeamMembers />
      </main>
    </div>
  );
}
