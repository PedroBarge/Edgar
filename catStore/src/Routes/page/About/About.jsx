import "./About.css";

const About = () => {
  return (
    <>
      <div className="main">
        <h2>Our Mission</h2>
        <p>
          At Unique Cats Store, our mission is to provide cat lovers with the
          most unique and extraordinary feline companions.
        </p>
        <p>
          We believe that every cat deserves a loving home, and we strive to
          match each cat with the perfect owner.
        </p>
        <h2>Location</h2>
        <p>We are located in the heart of the city, at:</p>
        <ul>
          <li>Unique Cats Store</li>
          <li>123 Main Street</li>
          <li>Cityville, USA</li>
          <li> 12345</li>
        </ul>

        <h2>Contacts</h2>
        <p>
          If you have any questions or would like to learn more about our unique
          cats, feel free to contact us:
        </p>
        <ul>
          <li>Email: info@uniquecatsstore.com</li>
          <li>Phone: 555-123-4567</li>
        </ul>
        <footer>
          <p>&copy; 2024 Unique Cats Store. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default About;
