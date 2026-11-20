import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const PHONE = "8801684961425"; // international format, digits only, no +
const MESSAGE = "Hi, I saw your portfolio and would like to connect.";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}