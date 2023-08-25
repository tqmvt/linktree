import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { CTA } from "../components/CTA";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <div>Intro video coming soon!</div>
    </Main>

    <CTA />
  </Container>
);

export default Index;
