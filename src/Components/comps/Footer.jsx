import {
  Truck,
  ShieldCheck,
  Wallet,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-8">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <div className="flex items-center gap-2">
            <Truck size={20} />
            <span>PAN India Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} />
            <span>100% Secure Shopping</span>
          </div>
          <div className="flex items-center gap-2">
            <Wallet size={20} />
            <span>COD (Cash on Delivery)</span>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <h4 className="font-semibold">CONTACT US</h4>
          <div className="flex items-center gap-2">
            <ArrowRight size={16} />
            <span>KNOWMORE</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:info.theartloom@gmail.com">info.theartloom@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+919630699884">+91 9630699884</a>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Shipping & Return</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 min-w-[250px]">
          <span>Product Marketed By:</span>
          <div className="flex items-center gap-2 font-semibold">
            <MapPin size={20} />
            <span>The Art Loom</span>
          </div>
          <address className="not-italic">
            77.PT Purroshottom Roy Street,
            <br />
            Kolkata-700007,
            <br />
            West Bengal, India
          </address>
        </div>

        {/* Last Column */}
        <div className="flex flex-col gap-4 min-w-[150px]">
          <a href="#" className="font-semibold">Corporate</a>
          <a href="#" className="font-semibold">Wholesale</a>
          <a href="#">About Us</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};