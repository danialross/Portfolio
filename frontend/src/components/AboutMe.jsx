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
                        I am a skilled
                        <span className="text-keyboardTone"> software developer </span>
                        based in Kuala Lumpur, Malaysia, with specialization in
                        <span className="text-keyboardTone"> Frontend </span>,
                        <span className="text-keyboardTone"> Backend </span>
                        , and
                        <span className="text-keyboardTone"> Full-Stack </span>
                        development. With a strong foundation in
                        <span className="text-keyboardTone"> Computer Science </span>
                        , I have honed my skills by learning industry
                        <span className="text-keyboardTone"> best practices </span>
                        from experts in the field. I am passionate about
                        leveraging my
                        <span className="text-keyboardTone"> technical abilities </span>
                        to
                        <span className="text-keyboardTone"> create impactful solutions </span>
                        and thrive in
                        <span className="text-keyboardTone"> collaborative environments </span>
                        . Always eager to
                        <span className="text-keyboardTone"> innovate </span>
                        , I am committed to contributing to
                        <span className="text-keyboardTone"> meaningful projects </span>
                        and continuing my
                        <span className="text-keyboardTone"> professional growth </span>
                        to make a tangible impact through technology.
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe
