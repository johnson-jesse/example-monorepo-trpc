import { CssBaseline, Theme } from "@fizzog/ui";
import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <CssBaseline />
      <Component {...pageProps} />
    </Theme>
  );
};

export default trpc.withTRPC(App);
