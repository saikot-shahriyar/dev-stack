import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="p-10 bg-white text-base-content border-t border-gray-200">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 text-left">

                    <div className="flex flex-col items-start space-y-4 md:col-span-2">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/logo-text.png"
                                alt="Dev Stack Logo"
                                className="h-9 w-auto object-contain"
                            />
                        </div>

                        <p className="text-sm text-base-content/70 leading-relaxed px-1">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex space-x-4 text-sm font-semibold pt-2">
                            <a href="#" className="link link-hover">
                                GitHub
                            </a>
                            <a href="#" className="link link-hover">
                                Twitter
                            </a>
                            <a href="#" className="link link-hover">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-xs font-semibold tracking-wider uppercase text-gray-900">
                            Product
                        </span>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            Home
                        </a>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            Technologies
                        </a>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            Projects
                        </a>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-xs font-semibold tracking-wider uppercase text-gray-900">
                            Company
                        </span>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            About
                        </a>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            Contact
                        </a>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            Careers
                        </a>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-xs font-semibold tracking-wider uppercase text-gray-900">
                            Legal
                        </span>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            Privacy Policy
                        </a>
                        <a href="#" className="link link-hover text-sm text-base-content/70">
                            Terms of Service
                        </a>
                    </div>
                </div>

                <hr className="border-gray-200" />

                <div className="flex flex-col gap-2 sm:flex-row justify-between items-center pt-6 text-sm text-base-content/70">
                    <p className="text-left">© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="link link-hover">
                            Privacy
                        </a>
                        <a href="#" className="link link-hover">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;