import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutButton from "../Elements/About/AboutButton";
import AboutHeadline from "../Elements/About/AboutHeadline";
import AboutQuestionTitle from "../Elements/About/AboutQuestionTitle";
import AboutQuestionAnswer from "../Elements/About/AboutQuestionAnswer";
import AboutImg from "../Elements/About/AboutImg";
import {RiInstagramLine, RiLinkedinBoxFill, RiMailLine, RiTelegramLine} from "react-icons/ri";

function About({ uistate, setUiState }) {
    let questionOne = "Обо мне";
    let answerOne =
        "дипломированный психолог, степень магистра, сертифицированный коуч, автор курсов, мои программы и консультации прошли 800+ человек";
    let questionTwo = "Методы и техники";
    let answerTwo =
        "Когда начала практиковать, обнаружила, что классической психологии мало и нужно всесторонне исцелять и наполнять своих клиентов. "+
        "Поэтому в подходах применяю классические методы психологии, духовные практики и коучинг, который приводит к результатам. "+
        "Обучалась у наставников родологии, дизайну человека, расстановкам, нейрографике, арт-терапии, регрессивному гипнозу, когнитивно-поведенческой терапии. "+
        "Подход к каждому клиенту индивидуален, так как у каждого своя неповторимая душа ❤️";


    return (
        <div className={`about ${uistate.aboutShown ? "" : "about--hidden"}`}>
            <AboutHeader uistate={uistate} setUiState={setUiState} />
            <div className="about__wrapper">
                {/* Need our headline */}
                <div className="about-group">
                    <AboutHeadline content="" />
                </div>
                {/* Need img */}
                <AboutImg />
                {/* Need Questions */}
                <div className="about-group">
                    <AboutQuestionTitle content={questionOne} />
                    <AboutQuestionAnswer content={answerOne} />
                </div>
                <div className="about-group">
                    <AboutQuestionTitle content={questionTwo} />
                    <AboutQuestionAnswer content={answerTwo} />
                </div>

                <hr />

                {/* Second Headline */}
                <div className="about-group">
                    <p>Контакты</p>
                    <AboutHeadline content="Соц. сети" />
                </div>

                {/* Socials */}
                <div className="about-socials">
                    <div className="about-socials-group">
                        <RiInstagramLine className="about-socials-icon" />
                        <p className="about-socials-text">https://svetlanapyres.ru</p>
                    </div>
                    <div className="about-socials-group">
                        <RiTelegramLine className="about-socials-icon" />
                        <p className="about-socials-text">
                            @ps_swetlana
                        </p>
                    </div>
                    <div className="about-socials-group">
                        <RiMailLine className="about-socials-icon" />
                        <p className="about-socials-text">
                            svps7@mail.ru
                        </p>
                    </div>
                </div>

                <hr />
                {/* Third Headline */}

                {/* Portfolio Button */}
                <AboutButton />
            </div>
        </div>
    );
}

export default About;
