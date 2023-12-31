import heroWomanImg from "@/assets/pngs/hero-woman.png";
import whoWeAreImg from "@/assets/pngs/who-we-are-girl.png";
import howItWorksImg from "@/assets/pngs/how-it-works-lady.png";
import { OUR_CORE_VALUES } from "./data";
const About = () => {
  return (
    <div>
      <section className="py-5 min-h-screen bg-[#E8EBEF]">
        <div className="container mx-auto px-3">
          <div className="flex flex-col md:flex-row h-full pt-20">
            <div className="flex flex-col justify-center w-full md:w-[40%] space-y-5">
              <div className="text-3xl text-[#1D1D1D] font-semibold">
                About Us
              </div>
              <p className="text-primaryAsh">
                The expense tracker web app is to simplify financial management
                for users by providing an intuitive platform for effortless
                input and tracking of expenses, budgets, and income. We aim to
                empower individuals to take control of their finances, make
                informed spending decisions, and achieve their financial goals
              </p>
            </div>
            <div className="w-full md:w-[60%] flex items-center relative my-5 md:my-0">
              <img src={whoWeAreImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision */}
      <section className="py-8">
        <div className="container mx-auto px-3">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div className="flex flex-col justify-center w-full md:w-[40%] space-y-5">
              <div className="text-3xl text-[#1D1D1D] font-semibold">
                Our Vision
              </div>
              <p className="text-primaryAsh">
                Our vision is to become the go-to solution for individuals
                seeking a hassle-free approach to managing their finances. We
                envision a future where everyone, regardless of their financial
                expertise, can confidently navigate their income, expenses, and
                budgets, leading to greater financial stability and peace of
                mind.
              </p>
            </div>
            <div className="w-full md:w-[60%] flex items-center relative my-5 md:my-0">
              <img src={heroWomanImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Mision */}
      <section className="py-8">
        <div className="container mx-auto px-3">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div className="w-full md:w-[40%] flex items-center relative my-5 md:my-0">
              <img src={howItWorksImg} alt="" />
            </div>
            <div className="flex flex-col justify-center w-full md:w-[60%] space-y-5">
              <div className="mx-0 md:mx-auto max-w-full ">
                <div className="text-3xl text-[#1D1D1D] font-semibold">
                  Our Mission
                </div>
                <p className="text-primaryAsh">
                  Our mission is to create a user-friendly and efficient expense
                  tracker that not only eases the burden of financial management
                  but also fosters financial literacy and responsible spending
                  habits. We are committed to providing a seamless experience,
                  enabling users to monitor their budgets, track monthly
                  expenses, categorize spending, and manage subscriptions with
                  utmost simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Core Values */}
      <section className="py-8">
        <div className="container mx-auto px-3">
          <div className="flex flex-col">
            <div className="max-w-full md:max-w-[50%] justify-center items-center text-center mx-auto mb-5">
              <div className="text-3xl text-primaryColor font-semibold">
                Our Core Values
              </div>
              <p className="text-primaryAsh">
                We help you set budgets, track expenses, manage categories and
                achieve your financial goals with our intuitive budgeting app.
                Sign up today with Budgetify which allows you to manage your
                money effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {OUR_CORE_VALUES.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center rounded-lg shadow-md md:gap-[10px] p-5 transition-all hover:scale-[1.02]"
                >
                  <span className="hidden md:flex">{item.icon}</span>
                  <div className="space-y-2">
                    <div className="text-xl font-medium">
                      {item.headingText}
                    </div>
                    <div className="text-primaryAsh text-sm">
                      {item.subText}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
