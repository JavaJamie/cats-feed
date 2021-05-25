import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from '../src/components/layout/Layout';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/globals.css';
import store from '../src/store';

const queryClient = new QueryClient();
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ChakraProvider>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
