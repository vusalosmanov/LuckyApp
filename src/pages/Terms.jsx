import React from "react";
import TermLogo from '../assets/image/article/img-1.png'
import Layout from "./Layout";
import PageTitle from "../components/PageTitle";
const Terms = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex justify-center items-center flex-col mt-[50px] lg:text-[32px] text-[24px]">
            <h3>Çatdırılma</h3>
            <div className="w-[40px] h-[5px] bg-[#106853] rounded-lg mt-[px] "></div>
          </div>
          <div className="max-w-[1320px] w-full mx-auto pr-[10px] pl-[10px] flex mt-[20px] justify-center items-center cursor-pointer">
            <PageTitle title='Çatdırılma'/>
          </div>
        </section>
        <section className="mt-[80px] mb-[80px]">
          <div className="max-w-[1320px] w-full mx-auto lg:px-[10px] px-[20px] flex justify-center items-center">
            <div className="lg:flex lg:justify-center lg:items-center w-[100%]">
              <div className="lg:w-[50%] w-full">
                <div className="text-[18px] gap-y-[10px]  leading-8 ">
                  <div className="content">
                    <p>
                      <strong>Çatdırılma qiymətləri:</strong>
                    </p>
                    <p>
                      Çatdırılma, 50 azn və üzəri sifarişlərdə ödənişsizdir.
                      <br />
                      50 azn-ə qədər olan sifarişlərdə çatdırılma 5 azn nəzərdə
                      tutulmuşdur
                    </p>
                    <p>
                      <strong>Çatdırılma müddəti:</strong>
                    </p>
                    <p>
                      Həftənin 5 günü iş saatları (09.00 - 18.00) ərzində
                      çatdırılma mövcuddur. Çatdırılma, sifariş verdiyiniz günün
                      ertəsi günü təmin ediləcəkdir. Şənbə günü verdiyiniz
                      sifarişlər növbəti həftənin ilk iş günü ərzində
                      çatdırılacaqdır.
                    </p>
                    <p>
                      <strong>
                        Sifarişlə gətirilən məhsulların çatdırılma şərtləri
                      </strong>
                    </p>
                    <p>
                      Sifarişlə gətirilən məhsulların çatdırılma müddəti və
                      şərtlərini dəqiqləşdirmək üçün müştəri xidmətləri ilə əlaqə
                      saxlamağınız xahiş olunur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] flex justify-center w-full">
                <div className="w-[100%] max-w-[500px]">
                  <img src={TermLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
