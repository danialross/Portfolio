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
                    <div className="lg:w-auto text-midTone text-md md:text-xl md:px-20 leading-8 md:leading-10 indent-12 px-4">
                        I'm a
                        <span className="text-keyboardTone"> Software Engineer </span>
                        with hands-on experience delivering
                        <span className="text-keyboardTone"> full-stack applications </span>
                        from
                        <span className="text-keyboardTone"> design to deployment</span>.
                        I've built and maintained production features using
                        <span className="text-keyboardTone"> React</span>,
                        <span className="text-keyboardTone"> Node.js</span>,
                        <span className="text-keyboardTone"> PostgreSQL</span>,
                        and
                        <span className="text-keyboardTone"> GraphQL</span>,
                        translating requirements into
                        <span className="text-keyboardTone"> scalable solutions </span>
                        while supporting
                        <span className="text-keyboardTone"> live customer environments</span>.
                        My experience spans
                        <span className="text-keyboardTone"> UI design </span>
                        and
                        <span className="text-keyboardTone"> prototyping in Figma</span>,
                        <span className="text-keyboardTone"> frontend development </span>
                        with modern React ecosystems,
                        <span className="text-keyboardTone"> backend API development </span>
                        with
                        <span className="text-keyboardTone"> Spring Boot </span>
                        and
                        <span className="text-keyboardTone"> Java</span>,
                        and
                        <span className="text-keyboardTone"> secure authentication and authorization </span>
                        systems. I thrive in
                        <span className="text-keyboardTone"> collaborative environments </span>
                        where I can
                        <span className="text-keyboardTone"> contribute across the stack </span>
                        and
                        <span className="text-keyboardTone"> continuously improve </span>
                        both the product and the development process.
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe
