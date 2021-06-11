import React from 'react'
import { Layout } from '../layout'

const Resume = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-8 items-center justify-center py-12">
                    <div className="shadow p-4 bg-white">
                        <div className="text-left">
                            <h3 className="mb-2 text-gray-700">Aourik</h3>
                            <h4 className="mb-2 text-gray-700">Khalid</h4>
                            <h4 className="mb-2 text-gray-700">07/10/1996</h4>
                            <p className="text-grey-600 text-sm">if you wnat to contact me its <button>here!</button></p>
                        </div>
                    </div>

                    <div className="shadow p-4 bg-white">
                        <div className="text-left">
                            <h3 className="mb-2 text-gray-700">Formation</h3>
                            <p className="text-grey-600 text-sm">
                                •2016 bac pro SEN au Lycée Newton à clichy(92110)
                                <br/>
                                •2016-2018 Licence MPCI a l'UVSQ à versaille
                                {/* <br />
                                •certification :
                                    freecodecamp hmtl,css,js, react ;
                                    linkedin:
                                        devloppeur javascript, python, java,  react, devloppeur full-stack, devloppeur android  */}
                            </p>
                        </div>
                    </div>

                    <div className="shadow p-4 bg-white">
                        <div className="text-left">
                            <h3 className="mb-2 text-gray-700">Compétence</h3>
                            <p className="text-grey-600 text-sm">
                                •os: windows , mac , linux(debian, mint et arch)
                                <br/>
                                •language: html, css, javascript, python
                                <br/>
                                •framework: react, nodeJs
                                <br/>
                                •gestion de projet: Git , Github/gitlab
                                <br/>
                                •database : mongodb, prostgresgl
                            </p>
                        </div>
                    </div>

                <div className="shadow p-4 bg-white">
                        <div className="text-left">
                            <h3 className="mb-2 text-gray-700">Language</h3>
                            <p className="text-grey-600 text-sm">
                                •Français : langue maternelle
                                •anglais : courrant
                                •arabe : courrant
                            </p>
                        </div>
                    </div>
                <div className="shadow p-4 bg-white">
                        <div className="text-left">
                            <h3 className="mb-2 text-gray-700">Centre d'intérêt</h3>
                            <p className="text-grey-600 text-sm">
                                •nouvelle technologie
                                <br/>
                                •jeux-video
                                <br/>
                                •musique (pratique de la guitare)
                                <br/>
                                •cuisine
                                <br/>
                                •film et série :(en particulié tout ce qui concerne la science-fiction)
                                <br/>
                                •jap-animation
                            </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Resume
