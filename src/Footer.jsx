import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Tanmay Singh. Built with React & <span title="Gemini AI">🤖</span> in Varanasi.</p>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:your.email@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;