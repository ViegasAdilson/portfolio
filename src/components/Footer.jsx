function Footer() {
  return (
    <footer className="footerDiv">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              &copy; Copyright {new Date().getFullYear()}, by Adilson Viegas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
