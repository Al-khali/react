import React from 'react'
import { Layout } from '../layout'

const About = () => {
    return (
        <Layout>
            <div class="rounded-lg shadow-lg text-center">
                <div class="flex justify-center items-center">
                    <div class="p-4 h-32 flex items-end text-grey-900">
                        <h3 class="mb-2 ">About me</h3>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-grey-600 ">
                    Hi, my name is khalid aourik i'm a french computer science studient,
                    I program since my 15 years mainly small web project in php, small games in c, c++ and some script in python but now I try to do things in a professional way 
                    I would like to become a good software developer and I do everything to achieve my goals </p>
                    <div class="mt-4">
                        <button>Someting</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
