import React from "react";
import aboutLogo from "../assets/image/logo/about-logo.jpeg"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
    <section>
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] flex justify-center items-center flex-col mt-[50px] text-[32px]">
            <h3>Haqqimizda</h3>
        <div className="w-[40px] h-[5px] bg-[#106853] rounded-lg mt-[10px] "></div>
        </div>
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] flex mt-[20px] justify-center items-center cursor-pointer">
            <Link to="/">
                Ana Seyife /
            </Link>
            <span>Haqqimizda</span>
        </div>
    </section>
      <section className="mt-[80px] mb-[80px]">
        <div className="w-[1320px] mx-auto pr-[10px] pl-[10px] flex justify-center items-center">
          {/* <PageTitle title="Haqqımızda" /   > */}
          <div className="flex justify-center items-center w-[100%]">
            <div className="w-[50%]">
              <div className="text-[18px] gap-y-[10px]  leading-8 ">
                <p>
                  Şirkətimiz, ofisinizin gündəlik təchizatı üçün zəruri olan{" "}
                  <strong>
                    dəftərxana ləvazimatlarının, su, çay, kofe kimi daimi
                    istifadə edilən qida məhsullarının, gigiyena və təmizlik
                    vasitələrinin, daşınan və daşınmaz hər növ inventarın (ofis
                    mebel dəstləri, kompyuter və onun yan avadanlıqları)
                  </strong>{" "}
                  Sizə sürətli və maneəsiz çatdırılması xidmətini həyata
                  keçirir.
                </p>
                <p className="mt-[5px]">Xidmətlərimizdən istifadə etməklə Siz;</p>
                <ul className="leading-9 ml-[20px]"> 
                  <li className="list-disc">vaxtınıza qənaət etmiş olursunuz,</li>
                  <li className="list-disc">
                    sifariş etmədən öncə qiymətlərlə tanış ola, qiymət
                    müqaisəsini rahatlıqla edə bilirsiniz,
                  </li>
                  <li className="list-disc">
                    sifarişlərinizi həm nəğd, həm də köçürmə yolu ilə həyata
                    keçirə bilirsiniz,
                  </li>
                  <li className="list-disc">
                    əməkdaşlarınızın ancaq işlərinə vaxt sərf etməsinə zəmin
                    yaradırsınız,
                  </li>
                  <li className="list-disc">
                    əlavə xərclərdən (taksi, park yeri, park cərimələri və s.)
                    azad olursunuz.
                  </li>
                </ul>
                <p className="mt-[10px]">
                  Bizimlə əməkdaşlıq etdiyiniz təqdirdə, bütün xidmətlərin
                  yüksək sürət və həssasiyyətlə həyata keçiriləcəyinə təminat
                  veririk.
                </p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center">
              <div className="w-[100%] max-w-[500px]">
                <img src={aboutLogo} alt="logo" className="w-[100%] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
