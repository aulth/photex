import React from 'react'

const AboutSec = () => {
    return (
        <>
            <div className="container grid md:grid-rows-2 md:grid-cols-3 grid-rows-3 grid-cols-2 p-8 gap-8">
                <div className="card md:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar flex md:flex-row flex-col md:justify-start items-center  gap-1">
                            <div className="w-16 mask mask-squircle">
                                <img src="https://img.freepik.com/premium-vector/3d-cloud-with-file-sync-icon_169241-6640.jpg?w=740" alt="" />
                            </div>
                            <h2 className="card-title font-bold md:ml-2 md:text-xl text-lg md:text-left text-center">Unlimited Storage</h2>
                        </div>
                        <p className='md:text-left text-center'>Store without limits. Safeguard your entire image collection effortlessly.</p>
                    </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar flex md:flex-row flex-col md:justify-start items-center  gap-1">
                            <div className="w-16 mask mask-squircle">
                                <img src="https://img.freepik.com/free-photo/white-cloud-with-download-icon-cloud-computing-technology-sign-symbol-3d-rendering_56104-1285.jpg?w=996&t=st=1685040199~exp=1685040799~hmac=6720d7f8115ce5a0d62de56fe6a8d729aedffc4f67cd5f2f2e41e8c16a274900" alt="" />
                            </div>
                            <h2 className="card-title font-bold md:ml-2 md:text-xl text-lg md:text-left text-center">Seamless Upload</h2>
                        </div>
                        <p className='md:text-left text-center'> Effortlessly upload images. Simple, quick, and hassle-free.</p>
                    </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar flex md:flex-row flex-col md:justify-start items-center  gap-1">
                            <div className="w-16 mask mask-squircle">
                                <img src="https://img.freepik.com/premium-vector/3d-hand-like-cartoon-flexible-human-character-arm-through-torn-paper-poster-promo-performance-toy-solution-up-thumb-agreement-gesture-icon-vector-illustration-background_440128-477.jpg?w=826" alt="" />
                            </div>
                            <h2 className="card-title font-bold md:ml-2 md:text-xl text-lg md:text-left text-center">Quick Access</h2>
                        </div>
                        <p className='md:text-left text-center'>Instantly access your images. Anytime, anywhere, with just a few clicks.</p>
                    </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar flex md:flex-row flex-col md:justify-start items-center  gap-1">
                            <div className="w-16 mask mask-squircle">
                                <img src="https://img.freepik.com/free-vector/glass-shield-realistic-vector-illustration_206725-545.jpg?w=740&t=st=1685040872~exp=1685041472~hmac=e94432374fabb9054544c66f1dfa45ab4488a68d5f9c3363664205b6e45eb730" alt="" />
                            </div>
                            <h2 className="card-title font-bold md:ml-2 md:text-xl text-lg md:text-left text-center">Secure Storage</h2>
                        </div>
                        <p className='md:text-left text-center'>Keep your memories safe and secure. Advanced protection for your personal images.</p>
                    </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar flex md:flex-row flex-col md:justify-start items-center  gap-1">
                            <div className="w-16 mask mask-squircle">
                                <img src="https://img.freepik.com/premium-photo/share-icon-social-media-notification-isolated-white-background-3d-render-3d-illustration_640106-732.jpg?w=900" alt="" />
                            </div>
                            <h2 className="card-title font-bold md:ml-2 md:text-xl text-lg md:text-left text-center">Seamless Sharing</h2>
                        </div>
                        <p className='md:text-left text-center'>Share your moments effortlessly. Connect and distribute memories with ease.</p>
                    </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar flex md:flex-row flex-col md:justify-start items-center  gap-1">
                            <div className="w-16 mask mask-squircle">
                                <img src="https://img.freepik.com/premium-vector/3d-yellow-folder-with-files-arrow_165488-4788.jpg?w=826" alt="" />
                            </div>
                            <h2 className="card-title font-bold md:ml-2 md:text-xl text-lg md:text-left text-center">Automatic Organization</h2>
                        </div>
                        <p className='md:text-left text-center'>Enjoy organized chaos. Let Photex automatically sort and arrange your images.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSec