import Button from "@/components/Button"
import heroWomanImg from "@/assets/pngs/hero-woman.png"
import whoWeAreImg from "@/assets/pngs/who-we-are-girl.png"
import ChevronRight from "@/assets/icons/chevron-right.svg"
const Home = () => {
    return (
        <div>
            <section className="py-5 min-h-screen bg-[#E8EBEF]">
                <div className="container mx-auto px-3">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center max-w-[70%] pt-10 pb-5 text-[#1d1d1d] ">
                            <div className="font-medium mb-3">Plan, Save and Achieve</div>
                            <h1 className="text-4xl font-semibold mb-5">Take Control of Your <span className="text-[#163A5F]">Finances</span></h1>
                            <div className="text-lg text-primaryAsh mb-8">Set budgets, track expenses, manage categories and achieve your financial goals with our intuitive budgeting app. Sign up today with Budgetify which allows you to manage your money effectively.</div>
                            <Button customClass="min-w-[40%]" variant="filled">Get Started</Button>
                            <img className="h-[300px] mt-5" src={heroWomanImg} alt="Use Budgetify" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Who We are */}
            <section className="py-8 bg-bgWhite">
                <div className="container mx-auto px-3">
                    <div className="flex flex-col gap-12 md:flex-row">
                        <div className="flex flex-col w-full md:w-[40%] space-y-5">
                            <div className="text-3xl text-primaryColor font-semibold">Who We Are</div>
                            <p className="text-primaryAsh">At Budgetify, we are passionate about helping you take control of your finances. Our mission is to simplify budgeting and financial planning and also track expenses making it accessible to everyone.</p>
                            <Button customClass="max-w-[60%]" variant="filled" iconPlacement="end" icon={<ChevronRight />}>Learn More</Button>
                        </div>
                        <div className="w-full md:w-[60%] flex items-center relative">
                            <img src={whoWeAreImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home