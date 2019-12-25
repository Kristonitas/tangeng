// ./src/pages/share-thought.js

import Router from "next/router";
import Container from "../components/generic/Container";
const { useState } = require("react");

export default function ShareThought() {
  const [message, setMessage] = useState("");

  const submit = async event => {
    event.preventDefault();
    await fetch("/api/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });
    Router.push("/");
  };

  return (
    <Container>
      <form onSubmit={submit}>
        <p>What is in your mind?</p>
        <input
          type="text"
          placeholder="Say something"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />

        <button variant="primary" type="submit">
          Share
        </button>
      </form>
    </Container>
  );
}
