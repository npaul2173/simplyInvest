import "./index.styles.css";

export const ContactForm = () => {
  return (
    <div class="contact_form">
      <div class="container">
        <div class="contact_header">
          <span>Get ideas in your inbox</span>
        </div>
        <form autoComplete={"off"}>
          <input type="text" id="contact_name" name="Name" placeholder="name" />

          <input
            type="text"
            id="contact_mobile"
            name="Mobile"
            placeholder="Mobile"
          />

          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <input type="submit" value="Submit" />
        </form>

        <hr class="divider_dashed" />
      </div>
    </div>
  );
};
