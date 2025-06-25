import Banner from "./banner/Banner";
import BurgersList from "./burgers/BurgersList";

const HomeContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <Banner />
      <div className="container mx-auto pt-8">
        <h1 className="text-3xl font-bold">Nuestro Menú</h1>
      </div>
      <BurgersList />
    </div>
  );
};

export default HomeContainer;
