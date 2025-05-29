import { useState } from "react";
import "./styles/index.css";

import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main style={{ padding: "1.5rem", fontFamily: "var(--font-family)" }}>
        <h1>🎨 Mini UI Kit Showcase</h1>

        <section style={{ marginBottom: "2rem" }}>
          <h2>Buttons</h2>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button disabled>Disabled</Button>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>Inputs</h2>
          <Input id="username" label="Username" placeholder="e.g. kiro_dev" />
          <Input
            id="email"
            label="Email (Error)"
            placeholder="your@email.com"
            error
          />
        </section>

        <section>
          <h2>Modal</h2>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isModalOpen}
            title="Hello!"
            onClose={() => setIsModalOpen(false)}>
            <p>This modal is part of the design system.</p>
          </Modal>
        </section>
      </main>
      <footer
        style={{
          marginTop: "4rem",
          textAlign: "center",
          fontSize: "0.875rem",
          opacity: 0.6,
        }}>
        <p>Kirollos Rezkallah · Mini UI Kit · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
