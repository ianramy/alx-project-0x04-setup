import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import { Provider } from "react-redux";
import store from "@/store/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
