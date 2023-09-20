import Image from "next/image";
import Navbar from "./SharedComponent/navbar";
import BrandNameAndCart from "./SharedComponent/BrandNameAndCart";
import OfferBanner from "./SharedComponent/OfferBanner";
import SearchBar from "./SharedComponent/SearchBar";
import Banner from "./SharedComponent/Banner";

export default function Home() {
  return (
    <div>
      <OfferBanner></OfferBanner>
      <SearchBar></SearchBar>
      <BrandNameAndCart></BrandNameAndCart>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}
