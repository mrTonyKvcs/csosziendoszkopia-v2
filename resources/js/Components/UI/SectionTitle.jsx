const SectionTitle = ({ title }) => {
    return (
        <div className="w-100 flex flex-col justify-center items-center py-8 mt-10">
            <h2 className="uppercase text-3xl mb-3">{title}</h2>
            <img src="img/section-img.png" alt="#"></img>
        </div>
    );
};

export default SectionTitle;
