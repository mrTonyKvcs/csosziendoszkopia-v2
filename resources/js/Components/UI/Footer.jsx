import Contacts from "@/Components/UI/Contacts";

const Footer = () => {
    return (
        <footer>
            <div className="bg-blue-500 p-10 w-full flex flex-col justify-center items-center">
                <div className="w-10/12 flex flex-col items-center">
                    <Contacts />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.5212298584547!2d19.683446315606478!3d46.91213347914477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da0563063a3b%3A0x80d91a017ffa997a!2zS2Vjc2tlbcOpdCwgRmFyYWfDsyBCw6lsYSBmYXNvciA0LCA2MDAw!5e0!3m2!1sen!2shu!4v1589653555069!5m2!1sen!2shu"
                        width="100%"
                        height="300"
                        frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex={0}
                        className="mt-7"
                    ></iframe>
                    <img
                        className="mt-7 mb-1 w-full md:w-1/2 h-auto "
                        src="/img/simplepay_bankcard_logo.png"
                        alt=""
                    ></img>
                </div>
            </div>
            <div className="w-full text-center p-3">
                <div>
                    <a
                        href="/pdfs/aszf.pdf"
                        className="text-blue-500"
                        target="_blank"
                    >
                        ÁSZF
                    </a>
                </div>
                © Copyright 2023 | csosziendoszkopia.hu
            </div>
        </footer>
    );
};

export default Footer;
