
const AddProductPage = () => {
    return (
        <div className="item-body dashboard-wrapper w-full">
            <div className="flex space-x-8">
                <div className="w-[570px] flex  flex-col">
                    <div className="input-item flex space-x-2.5 mb-8">
                        <div className="w-1/2 h-full ">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block mb-2 text-gray-600 text-[13px] font-normal">Product Id*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                                    <input placeholder=" Product Id" className="input-field placeholder:text-sm text-sm px-6 text-gray-500 w-full  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="id" value="" spellCheck={false} data-ms-editor={true} />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block mb-2 text-gray-600 text-[13px] font-normal">Product Title*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                                    <input placeholder="Product Title" className="input-field placeholder:text-sm text-sm px-6 text-gray-500 w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" value="" spellCheck={false} data-ms-editor={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-item flex space-x-2.5 mb-8">
                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block mb-2 text-gray-600 text-[13px] font-normal">Product Brand*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                                    <input placeholder="Brand Name" className="input-field placeholder:text-sm text-sm px-6 ttext-gray-500  w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="email" value="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block mb-2 text-gray-600 text-[13px] font-normal">Product Price*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                                    <input placeholder="  *******" className="input-field placeholder:text-sm text-sm px-6 text-gray-500  w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" value="" spellCheck={false} data-ms-editor={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input-item mb-8">
                        <div className="w-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block mb-2 text-gray-600 text-[13px] font-normal">Category*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                                    <input placeholder="Product Category" className="input-field placeholder:text-sm text-sm px-6 text-gray-500  w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" value="" spellCheck={false} data-ms-editor={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="input-item flex space-x-2.5 mb-8">
                            <div className="w-1/2 h-full">
                                <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block mb-2 text-gray-600 text-[13px] font-normal">Product Image*</label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                                        <input placeholder="" className="" type="file" value="" spellCheck={false} data-ms-editor={true} />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <div className="action-area flex space-x-4 items-center"><button type="button" className="text-md text-red-600 font-semibold" >Cancel</button><button type="button" className="w-[164px] h-[50px] bg-black text-white text-sm" >Add Product</button></div>
        </div>
    )
}

export default AddProductPage