import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>QuickPlay | {titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
