// Components
import ContactUsInfo, { type IContactUsInfo } from "./info";
import ContactusForm from "./Form";

export default function ContactUs({ ...props }: IContactUsInfo) {
  return (
    <section className="relative flex lg:flex-row flex-col-reverse  justify-evenly md:px-[120px] px-[40px] ">
      <ContactUsInfo {...props} />
      <ContactusForm />
    </section>
  );
}
