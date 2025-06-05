const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 10px',
      
      bottom: 0,
      width: '100%',
      fontSize: '14px',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.3)'
    }}>
      <p>© 2025 VibePlay. All rights reserved.</p>
      <p>
        
        
        <a href="/privacy" style={{color: '#1db954', marginLeft: '5px'}}>Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
