import { Container, Theme } from "@radix-ui/themes";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Theme
      appearance="light"
      accentColor="red"
      grayColor="slate"
      radius="medium"
    >
      <Container>
        <Dashboard />
      </Container>
    </Theme>
  );
}

export default App;
