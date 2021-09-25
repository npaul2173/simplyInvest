import "./index.styles.css";

export const ContactForm = () => {
  return (
    <div class="contact_form">
      <div class="container">
        <div class="contact_header">
          <span>Get ideas in your inbox</span>
        </div>
        <form autoComplete={"off"}>
          <input type="text" id="contact_name" name="Name" placeholder="Name" />

          <input
            type="text"
            id="contact_mobile"
            name="Mobile"
            placeholder="Mobile"
          />

          <input type="text" id="email" name="email" placeholder="Email Id" />

          <textarea
            style={{ height: 80 }}
            rows="12"
            cols="60"
            name="text"
            placeholder="Your Message"
          ></textarea>

          {/* <input type="submit" value="Submit" /> */}
          <button
            className="submitButton"
            onClick={() => {
              console.log("clicled");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
