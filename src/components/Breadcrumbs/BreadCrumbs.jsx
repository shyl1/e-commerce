// import { useLocation , Link } from "react-router-dom"

// export default function BreadCrumbs() {

// const location = useLocation();
//  let currentLink ='';
//  const crumbs = location.pathname.split('/')
//  .filter(crumb => crumb !== '')
//  .map(crumb => {
//     currentLink += `/${crumb}`

//     return(
//         <div className="crumb" key={crumb}>
//             <Link to={currentLink}>{crumb}</Link>
//         </div>
//     )

//  })
//   return (
//     <div className="breadcrumbs">
//         {crumbs}
//     </div>
//   )
// }


import { useLocation, Link } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter(crumb => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;

      const formattedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);

      return (
        <span key={index} className="text-sm text-gray-600">
          <span className="mx-1">/</span>
          <Link to={currentLink} className="hover:underline">
            {formattedCrumb}
          </Link>
        </span>
      );
    });

  return (
    <div className="text-sm my-3 text-gray-500">
      <Link to="/" className="hover:underline text-gray-700">Home</Link>
      <Link to="/cart" className="hover:underline text-gray-700">Cart</Link>
      <Link to="/checkout" className="hover:underline text-gray-700">Checkout</Link>
      {crumbs}
    </div>
  );
}