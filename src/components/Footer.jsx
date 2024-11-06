const Footer = () => {
  return (
    <footer className="footer h-[400px] footer-center bg-slate-100 text-primary-content p-10">
      <div className="text-center mb-8">
        <p className="font-bold text-black text-4xl">Gadget Heaven</p>
        <p className="text-black">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <div className="grid grid-flow-col gap-10 text-black">
        <div>
          <h6 className="footer-title font-bold mb-2">Services</h6>
          <ul>
            <li>
              <a className="link link-hover" href="#">
                Branding
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Design
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title font-bold mb-2">Company</h6>
          <ul>
            <li>
              <a className="link link-hover" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Press kit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title font-bold mb-2">Legal</h6>
          <ul>
            <li>
              <a className="link link-hover" href="#">
                Terms of use
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
