import "nprogress/nprogress.css";
import dynamic from 'next/dynamic';
const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

export default function MyApp({ Component, pageProps }) {
  return <>
    <TopProgressBar />
    <Component {...pageProps} />
  </>
}