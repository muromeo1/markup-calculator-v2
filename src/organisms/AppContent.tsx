import Container from "../atoms/Container";

import Header from "../molecules/Header";
import Form from "../molecules/Form";
import Grid from "../molecules/Grid";

import { DataProvider } from "../contexts/FormContext";

const AppContent = () => {
  return (
    <Container>
      <DataProvider>
        <Header />
        <Form />
        <Grid />
      </DataProvider>
    </Container>
  );
};

export default AppContent;
