const commonButton = ({ content }) => {
    return (
        <a href="#" className="inline-block rounded-xl bg-[#FFF6D8]/90  px-12 py-3 border-[3px] border-[#FF3D3D] font-semibold text-xl font-poppins">{content}</a>
    );
};
commonButton.defaultProps = {
    content: "Register!",
};

export default commonButton;
