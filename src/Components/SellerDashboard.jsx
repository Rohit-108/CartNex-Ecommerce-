import { Link } from "react-router-dom"


const SellerDashboard = () => {
  return (
    <>
        <section className="w-[100vw] m-0 p-0  bg-blue-50">
        <div className="mt-5 container-x mx-10 w-full">
            <div className="flex mx-5 my-5">
                <div className="flex flex-1">
                    <div className="flex items-center 
                    "><h1 className="text-xl font-semibold">Your Dashboard</h1></div>
                    <div>
                        <Link to= "/"><div><h3>Dashboard</h3></div></Link>
                    </div>

                </div>
                <div></div>
            </div>
        </div>
        </section>

    </>
  )
}

export default SellerDashboard