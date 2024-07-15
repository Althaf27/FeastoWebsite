/**
 * Render a contact detail
 * @component
 * @param {Object} icon - imported icons
 * @param {string} title - type of the contact
 * @param {string} data - contact data
 * @returns {JSX.Element}
 *
 * @example
 * <ContactCard icon={icon} title="Email address" data="hello@feasto.io"/>
 */
function ContactCard({ icon, title, data }) {
  return (
    <div
      className="flex flex-col items-center xl:flex-row gap-4 
    "
    >
      <div className="w-[60px] h-[60px] bg-primary-color  rounded-lg flex justify-center items-center ">
        <img src={icon} alt={`${icon} icon`} />
      </div>
      <div className="flex flex-col items-center gap-2 xl:items-start xl:justify-center">
        <p className="text-primary-color font-inter font-medium text-lg ">
          {title}
        </p>
        <p className="font-inter font-semibold text-[20px] text-gray-800">
          {data}
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
