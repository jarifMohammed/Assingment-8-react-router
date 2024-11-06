import { useLocation } from "react-router-dom";

const Bannerimg = () => {
  const location = useLocation();

  const hideBanner = [
    "/dashboard",
    "/wishlist",
    "/cart",
    "/discount",
    "/statistics",
  ];

  const isProductDetailsPage = location.pathname.includes("/product/");
  const isHideBannerPage =
    hideBanner.includes(location.pathname) || isProductDetailsPage;

  return (
    !isHideBannerPage && (
      <div className="flex justify-center -translate-y-1/2">
        <div className="relative">
          {/* Border Wrapper */}
          <div className="absolute w-[1080px] h-[570px] rounded-[28px] border-4 border-purple-500"></div>

          {/* Image */}
          <img
            className="p-4 pr-2 w-[1062px] h-[550px] rounded-[28px]"
            src="https://i.ibb.co.com/JcPzQnJ/banner.jpg" 
            alt="Banner"
          />
        </div>
      </div>
    )
  );
};

export default Bannerimg;
