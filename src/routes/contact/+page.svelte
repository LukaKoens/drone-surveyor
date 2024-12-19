<script>
  let name = '';
  let email = '';
  let message = '';
  let successMessage = '';
  let errorMessage = '';

  const sendEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        successMessage = 'Your message has been sent successfully!';
        errorMessage = '';
        name = '';
        email = '';
        message = '';
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      errorMessage = error.message;
      successMessage = '';
    }
  };
</script>

<section class="contact-section">
  <div class="contact-container">
    <h1>Contact Us</h1>
    <p>Have questions? Interested in our services? Drop us a message below, and we’ll get back to you as soon as possible.</p>

    <form class="contact-form" on:submit|preventDefault={sendEmail}>
      <label for="name">Your Name</label>
      <input type="text" id="name" placeholder="Enter your name" bind:value={name} required />

      <label for="email">Your Email</label>
      <input type="email" id="email" placeholder="Enter your email" bind:value={email} required />

      <label for="message">Your Message</label>
      <textarea id="message" placeholder="Write your message here..." bind:value={message} required></textarea>

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

<style>
  .contact-section {
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
  }

  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus, textarea:focus {
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
</style>
