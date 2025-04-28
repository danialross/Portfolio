import keyboard from '../assets/keyboard.jpg'
import { forwardRef, useEffect } from 'react'
// eslint-disable-next-line react/prop-types,react/display-name
const AboutMe = forwardRef(({ setter }, ref) => {
    useEffect(() => {
        const handleResize = () => setter(ref.current.offsetHeight)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [ref, setter])

    return (
        <div ref={ref} className="bg-evenPageTone py-padY">
            <div
                className="flex flex-col items-center lg:flex-row font-racing px-8 max-w-screen-xl mx-auto gap-8 lg:gap-0">
                <div className="flex-shrink-0">
                    <img
                        className=" w-96 h-auto rounded-3xl object-cover"
                        src={keyboard}
                        alt="keyboard"
                    />
                </div>
                <div>
                    <div
                        className="flex justify-center text-3xl lg:text-5xl pb-6 lg:px-8 lg:pb-8 lg:pt-2 text-darkTone">
                        About Me
                    </div>
                    <div
                        className="lg:w-auto text-midTone text-md md:text-xl md:px-20 leading-8 md:leading-10 indent-12 px-4">
                        I'm a
                        <span className="text-keyboardTone"> software developer </span>
                        based in Kuala Lumpur, Malaysia, specializing in web development with a strong focus on
                        <span className="text-keyboardTone"> frontend </span>,
                        technologies. With a strong foundation in
                        <span className="text-keyboardTone"> Computer Science </span>
                        I’ve sharpened my skills by
                        <span className="text-keyboardTone"> learning from industry experts </span>
                        and following
                        <span className="text-keyboardTone"> best practices</span>.
                        While my primary expertise lies in frontend development, I'm also experienced in the
                        <span className="text-keyboardTone"> backend </span>
                        , allowing me to contribute across the full stack when needed. I am passionate about leveraging my
                        <span className="text-keyboardTone"> technical abilities </span>
                        to create
                        <span className="text-keyboardTone"> impactful </span>
                        and
                        <span className="text-keyboardTone"> user-centered </span>
                        solutions. I thrive in
                        <span className="text-keyboardTone"> collaborative environments </span>
                        that encourage
                        <span className="text-keyboardTone"> idea-sharing </span>
                        and
                        <span className="text-keyboardTone"> teamwork </span>
                        to deliver solutions that meet
                        <span className="text-keyboardTone"> user needs</span>.
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe
