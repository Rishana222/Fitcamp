import React from 'react'

const CheckoutPage = () => {
    return (
        <>
            <div className='relative bg-sky-200 h-[350px] mb-10'>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm absolute inset-0">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Account Details</h2>
                        <p className="text-sm text-gray-500">
                            Fill your data and make sure your contact before checkout
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Input full name of yourself"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Input valid phone number validation"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Input your valid email address"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default CheckoutPage