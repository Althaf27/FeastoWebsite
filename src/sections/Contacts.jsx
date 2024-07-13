import ContactCard from "../components/ContactCard";
import envelop from "../assets/icons/envelope.svg";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";

function Contacts() {
  return (
    <div className="mt-[60px] bg-gray-50 px-4 py-10 border border-gray-300 mx-4 rounded-lg lg:mx-[60px] xl:mx-[120px]">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-gray-800 font-inter font-black text-2xl lg:text-[38px] tracking-tight">
          Still have some question?
        </h2>
        <p className="font-inter text-gray-600 text-center text-lg px-8 mt-3 max-w-[600px] lg:mt-4">
          Can’t find the answer that you’re looking for? Feel free to our team
          reach out for more info.
        </p>
      </div>
      <div className="flex flex-col items-center mt-14 gap-10 sm:flex-row sm:justify-center md:gap-16">
        <ContactCard
          title="Email address"
          data="hello@feasto.io"
          icon={envelop}
        />
        <div
          className="h-[60px] border border-gray-300 hidden xl:block
        "
        ></div>
        <ContactCard title="Get in touch" data="+94 77 604 4021" icon={phone} />
        <div className="h-[60px] border border-gray-300 hidden xl:block"></div>
        <ContactCard
          title="Location"
          data="Jaffna, Sri Lanka"
          icon={location}
        />
      </div>
    </div>
  );
}

export default Contacts;
