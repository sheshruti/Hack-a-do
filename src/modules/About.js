import React from 'react'
import AboutImg from '../assets/about-img.jpg'
const About = () => {
  return(
	<div>
		<section id = "about" className = "about my-10 ">
            <div className = "about-inner bg-[#46b6a6] ">
                <div className = "flex justify-center">
                    <div className = "about-left text-center w-[45%]">
                        <div className = "flex justify-center py-10 px-5">
                            <h2 className='text-3xl align-left  flex justify-center text-white underline'>About Us </h2>
					
                            <div className = "border-line"></div>
                        </div>
                        <p className = "text text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias delectus facilis, temporibus eum consectetur, a debitis exercitationem quae distinctio aliquid ea ipsam vitae esse amet soluta maxime dolorem? Inventore ut maiores illo ipsum nisi, nulla eligendi unde reiciendis quod voluptas velit sit voluptate perferendis cum pariatur molestiae tenetur repellat!</p>
                        <a href = "#" className = "btn btn-white ">Learn More</a>
                    </div>
                    <div className = "about-right flex right ">
                        <div className = "img ">
                            <img src = {AboutImg} width={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</div>
  )
}

export default About