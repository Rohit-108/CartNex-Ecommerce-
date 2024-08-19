import CategoryItem from "./CategoryItem"
import { categoryMenuList } from "../constant";
import Heading from "./Heading";

const categorymenu = () => {
  return (
    <>
        <div className="py-10 bg-blue-500 aos-init">
            <Heading title="Browse Categories" />
            <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
            {categoryMenuList.map((item) => (
          <CategoryItem title={item.title} key={item.id} href={item.href}>
            <img src={item.src} width={48} height={48} alt={item.title} />
          </CategoryItem>
        ))}
            </div>
        </div>
    </>
  )
}

export default categorymenu