
const Review = () => {
  return (
    
    <div className="item-body dashboard-wrapper w-full">
    <div className="review-tab-wrapper w-full">
        <div className="grid grid-cols-2 gap-8">
            <div className="item">
                <div className="product-row-card-style-one w-full h-[170px] bg-white group relative overflow-hidden" >
                    <div className="flex space-x-2 items-center w-full h-full p-2">
                        <div className="w-1/3 h-full">
                            <img src="/assets/images/product-img-1.jpg" alt="" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex-1 flex flex-col justify-center h-full">
                            <div>
                                <span className="text-qgray text-sm mb-1.5 block">July 22, 2022</span>
                                <div className="flex mb-1.5">
                                  
                                    <span><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></span>
                                   
                                </div>
                                <a href="/single-product">
                                    <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600">
                                        Xoggle aute et pariatur adipisicing nostrud et excepteur
                                    </p>
                                </a>
                                <p className="price mb-[26px] text-sm text-qgray line-clamp-2">
                                    Didn't I tell you not put your phone on charge because weekend?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

  )
}

export default Review