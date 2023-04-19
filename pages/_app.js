// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { Roboto } from "next/font/google";
import '../styles/globals.css'; 
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
// own css files here
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />

    </main>
  );
}
