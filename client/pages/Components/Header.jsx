import BasketIcon from "./BasketIcon"

function Header({quantity}) {
   return (
     <header className="header">
       <div className="header-left">
         <img
           className="octopus_logo"
           src="https://static.octopuscdn.com/logos/logo.svg"
           alt="Octopus Energy Logo"
         />
       </div>
       <div className="header-right">
         <BasketIcon quantity={quantity} />
       </div>
     </header>
   );
}

export default Header