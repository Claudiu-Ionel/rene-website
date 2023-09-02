export default function ContactForm() {
  return (
    <div>
      <h2>Contact me:</h2>
      <form>
        <div>
          <label for="userName">Name:</label>
          <input type="text" name="userName" required></input>
        </div>

        <div>
          <label for="userEmail" required>
            E-mail:
          </label>
          <input type="email" name="userEmail"></input>
        </div>

        <div>
          <label for="subject">Subject:</label>
          <input type="text" name="subject"></input>
        </div>

        <textarea rows="30" cols="10"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}
