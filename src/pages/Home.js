import React from 'react'
import { Layout } from '../layout'
 
const date = new Date()
const currentDate  = date.toDateString()
const hours = date.getHours()
const minuts = date.getMinutes()
const seconde = date.getSeconds()

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center">
                <div className="p-8">
                    <div className="shadow-xl rounded-lg">
                        <div className="h-64 bg-gray-900 bg-cover bg-center rounded-t-lg flex items-center justify-center"> 
                        <p className="text-white font-bold text-4xl">Aourik Khalid</p>
                        </div>
                        <div className="bg-white rounded-b-lg px-8">

                        <div className="pt-8 pb-8 text-center">
                            <h1 className="text-2xl font-bold text-gray-700">Computer science studient</h1>
                        
                        </div>
                        </div>
                    </div>
                    </div>


                
                <div class="w-1/2 mx-auto">
                    <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                        <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                            <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                            </div>
                            <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                            </div>
                            <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                            </div>
                            <div class="mx-auto pr-16" id="terminaltitle">
                                <p class="text-center text-sm">Terminal</p>
                            </div>

                            </div>
                            <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
                            <p class="pb-1">Last login: {currentDate} {hours}:{minuts}:{seconde} on ttys002</p>
                            <p class="pb-1">Aourik_khalid[DILAHK]:SoftWareDeveloper$ <span className="text-green">cd /hireMe!/</span></p>
                        </div>
                    </div> 
                </div>
            </div>
        </Layout>
    )
}

export default Home 