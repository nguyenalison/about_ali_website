import './Projects.css'
function Projects() {
    return (
        <body className='projects-body'>
            <h2> Projects</h2>
            <div className="converge-media">
                <p>Converge Media <span className='project-title'></span><br></br>
                    <small>Our Vision is to extend Converge Media’s mission of bringing together Black and Brown communities in the Pacific Northwest through media; to build a place where people can come to view content from the community.
Our Goal is to create a fully functioning Over-The-Top application for Converge Media that streams quality videos to their target audience on Roku.</small>
                </p>
            </div>
            <div className="plant-mama">
                <p>Plant Mama <span className='project-title'></span><br></br>
                    <small>This mobile application user interface designPlantMama is a plant identifying, water tracking and community engagement application. It was design to help novice plant enthusiasts get more comfortable and experienced with plants. As college students, we discovered that growing plants in an apartment is much different than growing plants outside in a garden.</small>
                </p>
            </div>
            <div className="thrift-fits">
                <p>ThriftFits<span className='project-title'></span><br></br>
                    <small>Our mission is to create a thrifting marketplace platform that enables an individual user to market their pre-loved clothing. Our application will allow buyers and sellers to form a community based on their shared interest for thrifting, fashion and sustainability.</small>
                </p>
            </div>
        </body>
    )
}

export default  Projects