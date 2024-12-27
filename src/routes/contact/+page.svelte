<script>
  let name = "";
  let email = "";
  let message = "";
  let successMessage = "";
  let errorMessage = "";

  const sendEmail = async () => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        successMessage = "Your message has been sent successfully!";
        errorMessage = "";
        name = "";
        email = "";
        message = "";
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      errorMessage = error.message;
      successMessage = "";
    }
  };
</script>

<main>
  <section class="contact-section">
    <a class="home-button" href="/">Home</a>

    <div class="contact-container">

      <form class="contact-form" on:submit|preventDefault={sendEmail}>
        <label for="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          bind:value={name}
          required
        />

        <label for="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          bind:value={email}
          required
        />

        <label for="message">Your Message</label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          bind:value={message}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {#if successMessage}
          <p class="success-message">{successMessage}</p>
        {/if}
        {#if errorMessage}
          <p class="error-message">{errorMessage}</p>
        {/if}
      </form>
    </div>
  </section>
</main>

<style>
  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("/background-images/contact_page.JPG");
    margin: 0;
  }

  .contact-section {
    padding-top: 20vh;
    text-align: center;
  }

  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.6);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #555;
    margin-bottom: 20px;
    font-size: 1rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    font-weight: bold;
    color: #444;
    text-align: left;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus,
  textarea:focus {
    border-color: #007bff;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  .success-message {
    color: green;
    font-size: 1rem;
    margin-top: 10px;
  }

  .error-message {
    color: red;
    font-size: 1rem;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    .contact-container {
      padding: 20px 20px;
    }

    h1 {
      font-size: 2rem;
    }

    button {
      font-size: 1rem;
    }
  }

  /* Home Button */
  .home-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: background-color 0.3s;
    text-decoration: none;
  }

  .home-button:hover {
    background-color: #0056b3;
  }
</style>
