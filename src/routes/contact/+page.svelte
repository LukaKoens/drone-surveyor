<script>
    let name = '';
    let email = '';
    let message = '';
  
    function submitForm() {
      alert(`Message sent by ${name}`);
      // Here you could integrate with an API to handle form submissions
    }
  </script>
  
  <main>
    <h1>Contact Us</h1>
    <form on:submit|preventDefault={submitForm}>
      <label for="name">Name:</label>
      <input id="name" type="text" bind:value={name} required />
      
      <label for="email">Email:</label>
      <input id="email" type="email" bind:value={email} required />
      
      <label for="message">Message:</label>
      <textarea id="message" bind:value={message} required></textarea>
      
      <button type="submit">Send Message</button>
    </form>
    <a href="/">Back to Home</a>
  </main>
  
  <style>
    main {
      margin: 2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: auto;
    }
    label {
      margin-top: 1rem;
    }
    input, textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      background-color: #007bff;
      color: white;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    a {
      display: block;
      margin-top: 1rem;
      color: #007bff;
      text-decoration: none;
      text-align: center;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
  