import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../../prismicio";
import Links from "@/components/atoms/Link";
import { Apollo } from "@/base/libs/apolloClient";
import Layout from "@/components/organisms/Layouts/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Links {...props} path={href}>
          {children}
        </Links>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Apollo>
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        </Apollo>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
