import { CartProvider } from "~/contexts/CartContext";
import Navbar from "~/layout/Navbar";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div>
            <Navbar />
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
};

export default Layout;
