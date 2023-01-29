import Layout from "../../components/layout";
import student from "../../assets/json/student.json";
import Lottie from "react-lottie";
import Title from "./components/title";
import CardPrograms from "./components/card_programs";
import reading from "../../assets/img/read.png";
import writing from "../../assets/img/letter.png";
import listening from "../../assets/img/listening.png";

export default function Home() {
  return (
    <Layout>
      <section id="home" className="flex justify-between items-center">
        <article className="w-1/2">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-theme">Revealing</span> Your True
            Potential of Mastering English
          </h1>
          <p className="my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            voluptate itaque ad nihil, voluptatibus consequatur eum atque
            accusantium tenetur fugit quaerat deleniti assumenda laudantium
            cumque doloribus ratione possimus libero labore?
          </p>
          <button className="bg-blue-theme text-white font-semibold px-5 py-2 rounded-full">
            Get Started
          </button>
        </article>
        <article className="w-2/5">
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
      <section id="programs" className="my-8">
        <Title>Programs</Title>
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
    </Layout>
  );
}
