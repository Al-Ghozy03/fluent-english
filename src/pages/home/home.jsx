import Layout from "../../components/layout";
import student from "../../assets/json/student.json";
import faq from "../../assets/json/faq.json";
import about from "../../assets/json/about us.json";
import Lottie from "react-lottie";
import Title from "./components/title";
import CardPrograms from "./components/card_programs";
import reading from "../../assets/img/read.png";
import writing from "../../assets/img/letter.png";
import listening from "../../assets/img/listening.png";
import Faq from "./components/faq";

export default function Home() {
  return (
    <Layout>
      <section id="home" className="flex justify-between items-start">
        <article className="w-1/2 mt-10">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-theme">Revealing</span> Your True
            Potential of Mastering <span className="text-blue-theme">English</span>
          </h1>
          <p className="my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            voluptate itaque ad nihil, voluptatibus consequatur eum atque
            accusantium tenetur fugit quaerat deleniti assumenda laudantium
            cumque doloribus ratione possimus libero labore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            voluptate itaque ad nihil, voluptatibus consequatur eum atque
            accusantium tenetur fugit quaerat deleniti assumenda laudantium
            cumque doloribus ratione possimus libero labore?
          </p>
          <button className="bg-blue-theme text-white font-semibold px-5 py-2 rounded-full">
            Get Started
          </button>
        </article>
        <article className="w-2/6">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: student,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </article>
      </section>
      <section id="programs" className="mt-8">
        <Title width={"w-60"}>Popular Course</Title>
        <div className="flex space-x-5 justify-center mt-10">
          <CardPrograms
            icon={reading}
            title="Reading"
            desc={
              "Lorem ipsum dolor sit amet consectetur. Et ullamcorper libero aliquet integer eu nunc massa pellentesque quis. Eros pellentesque cras nibh."
            }
          />
          <CardPrograms
            icon={writing}
            title="Writing"
            desc={
              "Lorem ipsum dolor sit amet consectetur. Et ullamcorper libero aliquet integer eu nunc massa pellentesque quis. Eros pellentesque cras nibh."
            }
          />
          <CardPrograms
            icon={listening}
            title="Listening"
            desc={
              "Lorem ipsum dolor sit amet consectetur. Et ullamcorper libero aliquet integer eu nunc massa pellentesque quis. Eros pellentesque cras nibh."
            }
          />
        </div>
      </section>
      <section id="faq" className="mb-10 mt-20 flex space-x-10">
        <article className="w-1/4">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: faq,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </article>
        <article className="w-1/2 flex flex-col items-start">
          <Title width={"w-20 mb-5"}>FAQ</Title>
          <Faq
            question={"How to join?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur. Et ullamcorper libero aliquet integer eu nunc massa pellentesque quis. Eros pellentesque cras nibh."
            }
          />
          <Faq
            question={"What is the most popular course?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur. Et ullamcorper libero aliquet integer eu nunc massa pellentesque quis. Eros pellentesque cras nibh."
            }
          />
          <Faq
            question={"How to pay course?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur. Et ullamcorper libero aliquet integer eu nunc massa pellentesque quis. Eros pellentesque cras nibh."
            }
          />
        </article>
      </section>
      <section id="about_us" className="my-10">
        <Title width={"w-32 text-center"}>About us</Title>
        <article className="flex justify-between mt-9">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem
            voluptatibus officiis commodi non perferendis incidunt expedita in
            beatae consectetur dignissimos itaque perspiciatis repellat
            consequatur, deserunt aut cupiditate. Reiciendis ut maiores cum
            facilis debitis soluta. Laudantium voluptatem sunt doloremque
            dignissimos perspiciatis, et quaerat veniam delectus accusamus
            repellat, animi a atque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto rem voluptatibus officiis commodi non
            perferendis incidunt expedita in beatae consectetur dignissimos
            itaque perspiciatis repellat consequatur, deserunt aut cupiditate.
            Reiciendis ut maiores cum facilis debitis soluta. Laudantium
            voluptatem sunt doloremque dignissimos perspiciatis, et quaerat
            veniam delectus accusamus repellat, animi a atque.
          </p>
          <div className="w-[300rem]">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: about,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
        </article>
      </section>
    </Layout>
  );
}
