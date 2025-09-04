import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBotWidget from "./components/chatAI/ChatBot";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-0 bg-white">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <ChatBotWidget />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
