import Footer1 from "@/components/footers/Footer1";
import Header18 from "@/components/headers/Header18";
import DefaultShopDetails from "@/components/shopDetails/DefaultShopDetails";
import Details7 from "@/components/shopDetails/Details7";
import Products from "@/components/shopDetails/Products";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import React from "react";
import Link from "next/link";
import ProductSidebar from "@/components/modals/ProductSidebar";
import SidebarToggler from "@/components/shopDetails/SidebarToggler";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";

export const metadata = {
  title: "Shop Drawer Sidebar || PatyGirls",
  description: "PatyGirls",
};
export default function Page() {
  return (
    <>
      <Header18 />
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right" />
              <a href="#" className="text">
                Women
              </a>
              <i className="icon icon-arrow-right" />
              <span className="text">Cotton jersey top</span>
            </div>
            <div className="tf-breadcrumb-prev-next">
              <a href="#" className="tf-breadcrumb-prev hover-tooltip center">
                <i className="icon icon-arrow-left" />
                {/* <span className="tooltip">Cotton jersey top</span> */}
              </a>
              <a href="#" className="tf-breadcrumb-back hover-tooltip center">
                <i className="icon icon-shop" />
                {/* <span className="tooltip">Back to Women</span> */}
              </a>
              <a href="#" className="tf-breadcrumb-next hover-tooltip center">
                <i className="icon icon-arrow-right" />
                {/* <span className="tooltip">Cotton jersey top</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <SidebarToggler />

      <DetailsOuterZoom />
      <ShopDetailsTab />
      <Products />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
